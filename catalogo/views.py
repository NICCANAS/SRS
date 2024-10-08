from django.shortcuts import render
from transbank.webpay.webpay_plus.transaction import Transaction
import random
from django.http import JsonResponse
import json
import requests #Para probar lo de wsp
#vista de api y respuestas
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, viewsets
from .serializers import CategorySerializer
from .models import datosPrueba
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
#Oracle connection
from django.http import HttpResponse
import getpass
import oracledb
import os
#transformar blob de la base de datos en file python
import base64

#from catalogo.bdd.oracle import lista

def home(request):
   return render(request, 'index.html') 

class printAPI(APIView):
   permission_classes = (permissions.AllowAny,)
   def get(self, request):
      string = request.GET.get("string")
      print()
      print(string)
      return Response(status=status.HTTP_200_OK)
   
class WebpayAPI(APIView):
   permission_classes = (permissions.AllowAny,)
   def get(self, request):
      amount = request.GET.get("amount")
      buy_order = request.GET.get("buy_order")
      return_url = 'http://127.0.0.1:8000/webpayTransaction'
      session_id = str(random.randrange(1000000, 99999999))

      transaction = (Transaction()).create(buy_order, session_id, amount, return_url)

      return Response({'token': transaction['token'],'url': transaction['url'], 'amount': amount}, status=status.HTTP_200_OK)
   
   def post(self, request):
      #Commit del token para ver el estado
      token = request.data.get("token")
      print("TOKEN: "+str(token))
      print("commit for token_ws: {}".format(token))

      response = (Transaction()).commit(token=token)
      print("response: {}".format(response))

      return Response({'order_id': int(response['buy_order']), 'status': response['status'], 'code': response['response_code']},status=status.HTTP_200_OK)
      #return render_template('webpay/plus/commit.html', token=token, response=response)

class WspAPI(APIView):
   permission_classes = (permissions.AllowAny,)
   def get(self, request):
      phoneNumber = request.GET.get("phone")
      message = request.GET.get("message")

      print(phoneNumber)
      print(message)
      #Token de autorizacion (se cambia cada dia)
      headers = {"Authorization": 'Bearer EAABlqEXpZCSMBAHPA35TVjkJZBZAg27F2b2mZBVSkOoqEHcNi1CZAfiCRebmlbVhbl7ukpWWaID18yZB6ftWBhsUT3ZC593BRknSrZCoXI9E1FNSFCaOdBIenKiu3kmzOBfsPI8HuTkscJi9JIiZBgB0ZC4u0RMtgVwsLFTD0iKtr5lHMEDeTl7ghonhJcPvivefqJrCuJZAxgniy3ZCd4TYZABX4'} #aqui va el nombre que pusimos en settings.py
      payload = {"messaging_product": "whatsapp",
               "recipient_type": "individual",
               "to": phoneNumber,
               "type": "text",
               "text": {"body": message}
            }
	   #wsp_url = lo del settings.py
      response = requests.post('https://graph.facebook.com/v16.0/101238452953735/messages', headers=headers, json=payload)
      print(response)
      #ans = response.json()
      return Response(status=status.HTTP_200_OK)

class OracleCloudAPI(APIView):
   permission_classes = (permissions.AllowAny,)
   def get(self, request):
      #print("/////////////////////Llamando oracle///////////////////////////")
      Query = request.GET.get("query")
      #print(request.GET.get("query"))
      #print(request.GET)

      #Datos de la wallet
      connection = oracledb.connect(
      user="ADMIN",
      password="Holaolaola2021=-",
      config_dir = "catalogo/bdd", #solo nos recupera el path local
      dsn=r"(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.sa-santiago-1.oraclecloud.com))(connect_data=(service_name=g3e61719689d692_of9irekmrz0t3e0r_low.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
      wallet_location= "catalogo/bdd",
      wallet_password= "Holaolaola2021=-") #si le habian puesto la clave
      #print(f"{46*'-'}\n Conectado con la base de datos Oracle Database \n{46*'-'}")

      querysReturn = []

      #Crear el cursor
      #cursor = connection.cursor()
      #print("Resultado del cursor")
      #print(cursor.rowcount)

      with connection.cursor() as cursor:
         #Crea el cursor para la coneccion con sql
         cursor.execute(Query)
         queryType = Query.split()[0]

         if (queryType == "SELECT"):
            for row in cursor:
               #print(row)
               querysReturn.append(row)
            #print("///Return row////")
            #print(querysReturn)
            
      #commit hacia la base de datos
      connection.commit()
      return Response({'query': querysReturn}, status=status.HTTP_200_OK) #Response({'token': '123456789'}, status=status.HTTP_200_OK)