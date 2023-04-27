from django.shortcuts import render
from transbank.webpay.webpay_plus.transaction import Transaction
import random
from django.http import JsonResponse
import json
import requests #Para probar lo de wsp
#vista de api y respuestas
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework import viewsets
from .serializers import CategorySerializer
from .models import datosPrueba

#Oracle connection
from django.http import HttpResponse
from catalogo.bdd.oracle import lista

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

      #transaction = (Transaction()).create(buy_order, session_id, amount, return_url)
      #print(transaction)
      #return Response(transaction, status=status.HTTP_200_OK)

      return Response({'token': 500, 'amount': 500}, status=status.HTTP_200_OK)
         

   def post(self, request):
      amount = request.POST.get('plata')
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

      #transaction = (Transaction()).create(buy_order, session_id, amount, return_url)
      #print(transaction)
      #return Response(transaction, status=status.HTTP_200_OK)
      return Response({'token': '123', 'amount': amount}, status=status.HTTP_200_OK)

class datoPruebaView(viewsets.ModelViewSet):
   serializer_class = CategorySerializer
   queryset = datosPrueba.objects.all()

def wspMessage(phoneNumber, message):
   headers = {"Authorization": 'Bearer EAABlqEXpZCSMBAMV4v8jcSWZB2m0CDipRPVg7KtTVtYqHRhc5EbBhzPnmtrZBAqTlDEqL5cupzNDojwZAsm3XDwtLMEyiZCrFAdNHG24He4hVzLMciyWtPvLkbcGlG7baghJNDP6Alf2b1dTjVjHkatDZBZAZASsFpVnKzNf8ZBco3Y8hypv1dTAR377yK9ZA0dMSIZAvJCtu0wFPRH5SkeZCnaV'} #aqui va el nombre que pusimos en settings.py
   payload = {"messaging_product": "whatsapp",
				"recipient_type": "individual",
				"to": phoneNumber,
				"type": "text",
				"text": {"body": message}
			  }
	#wsp_url = lo del settings.py
   response = requests.post('https://graph.facebook.com/v16.0/101238452953735/messages', headers=headers, json=payload)
   ans = response.json()
   return



def oracle(request):
    return HttpResponse(json.dumps(lista))



""" //Oracle connection
from django.http import JsonResponse
from django.db import connection
    
def process(request):
    with connection.cursor() as cursor:
         cursor.execute("select * from YOUR_TABLE")
         columns = [col[0] for col in cursor.description]
         return JsonResponse([
            dict(zip(columns, row))
            for row in cursor.fetchall()
         ], safe=False) """