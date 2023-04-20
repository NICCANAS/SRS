from django.shortcuts import render

def home(request):
   return render(request, 'index.html') 

def testApi(request):
   print("testeando react con django")
   ans = "ola"
   return ans



