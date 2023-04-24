from django.contrib import admin
from django.urls import path, re_path, include 
from django.views.generic import TemplateView
from . import views


from rest_framework import routers
#api versioning
router = routers.DefaultRouter()
router.register(r'pruebas', views.datoPruebaView, 'pruebas')

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name="home"),
    path('webpayAPI/', views.WebpayAPI.as_view()),
    path('webpayAPI/<amount>', views.WebpayAPI.as_view()),
    path('wsp/', views.wspMessage, name="wsp"),
    path('api/v1/', include(router.urls)),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]