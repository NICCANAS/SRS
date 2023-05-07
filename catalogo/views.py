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

class WebpayAPI(APIView):
   permission_classes = (permissions.AllowAny,)
   def get(self, request):
      amount = 1000
      buy_order = 'orden_de_compra_1234'
      return_url = 'http://localhost:8000/'
      #final_url = 'http://localhost:8000/payment-success/'
      buy_order = str(random.randrange(1000000, 99999999))
      session_id = str(random.randrange(1000000, 99999999))
      #amount = random.randrange(10000, 1000000)
      
      #Este objeto no es necesario para que funcione transbank, lo puse en caso de ser necesario pasarle datos a la pagina
      #vease para confirmar los datos de la compra como el monto o alguna otra cosa que vaya a poner
      create_request = {
         "buy_order": buy_order,
         "session_id": session_id,
         "amount": amount,
         "return_url": return_url
      }

      transaction = (Transaction()).create(buy_order, session_id, amount, return_url)

      return Response({'token': transaction['token'],'url': transaction['url'], 'amount': amount}, status=status.HTTP_200_OK)
   
class WspAPI(APIView):
   permission_classes = (permissions.AllowAny,)
   def get(self, request):
      phoneNumber = request.GET.get("phone")
      message = request.GET.get("message")

      print(phoneNumber)
      print(message)

      headers = {"Authorization": 'Bearer EAABlqEXpZCSMBAL2VdheHBZCWJmiWR5HD757HYWnrhvUD70IR9vKd2JZClRQTsteLbK6MNxEIoFuNHT2xBPdvGZB57gXIZAda97SckAO994lwacKJ9WbxeQArRfEvJEN0raSqxnZAsdlMzkMnwWZCN8ndPwT8rn37OtSq5zhRKh1ZBDaP3KHHjXRLZBARdlVMReLTPWLlmrJjkRiZBshlmfCfv'} #aqui va el nombre que pusimos en settings.py
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
      print("/////////////////////Llamando oracle///////////////////////////")
      Query = request.GET.get("query")
      print(request.GET.get("query"))
      print(request.GET)

      #Datos de la wallet
      connection = oracledb.connect(
      user="ADMIN",
      password="Holaolaola2021=-",
      config_dir = "catalogo/bdd", #solo nos recupera el path local
      dsn=r"(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.sa-santiago-1.oraclecloud.com))(connect_data=(service_name=g3e61719689d692_of9irekmrz0t3e0r_low.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
      wallet_location= "catalogo/bdd",
      wallet_password= "Holaolaola2021=-") #si le habian puesto la clave
      print(f"{46*'-'}\n Conectado con la base de datos Oracle Database \n{46*'-'}")

      # variables
      #counter = 0
      #lista = []
      #lista2 = []
      #lista3 = []
      querysReturn = []

      #Crear el cursor
      #cursor = connection.cursor()
      #print("Resultado del cursor")
      #print(cursor.rowcount)

      with connection.cursor() as cursor:
         d = cursor.execute(Query)
         #print(cursor.rowcount)
        # counter += 1
         for row in cursor:
            print(row)
            blobObject = row[3].read()
            encoded_content = base64.b64encode(blobObject)
            url = 'data:application/octet-stream;base64,' + encoded_content.decode('utf-8')
            fixList = list(row)
            fixList[3] = url
            row = tuple(fixList)


            print()
            #print(row[3].read())
            #blobRead = row[3].read()
            #row[3] = blobRead
            querysReturn.append(fixList)
         print("///Return row////")
         print(querysReturn)
            #lista.append(row)       
         #querys.append(lista)
      #commit hacia la base de datos
      connection.commit()
      return Response({'query': querysReturn}, status=status.HTTP_200_OK) #Response({'token': '123456789'}, status=status.HTTP_200_OK)