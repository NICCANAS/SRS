from django.db import models

# Create your models here.
class datosPrueba (models.Model):
    #el id siempre se agrega por defecto
    #idPrueba = models.IntegerField(primary_key=True,verbose_name='Id') #columnas
    nombrePrueba = models.CharField(max_length=50,verbose_name='Nombre')
    descripcionPrueba = models.CharField(max_length=50,verbose_name='Prueba')

    def __str__(self):
        return self.idPrueba #esta es la cadena de caracteres se devolvera, la puedo modificar con + "" + para agregar mas cosas con espacios
    

