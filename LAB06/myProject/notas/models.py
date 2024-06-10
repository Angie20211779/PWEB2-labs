from django.db import models

class Nota(models.Model):
    alumno = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)
    nota = models.IntegerField()
   