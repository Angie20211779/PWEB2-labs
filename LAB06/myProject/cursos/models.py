from django.db import models

class Curso(models.Model):
    nombre = models.CharField(max_length=100)
    docente = models.CharField(max_length=100)
    codigo = models.IntegerField()
   