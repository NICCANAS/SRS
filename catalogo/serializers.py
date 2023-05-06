from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=datosPrueba
        fields=[
            'id',
            'Nombre',
            'Prueba'
        ]