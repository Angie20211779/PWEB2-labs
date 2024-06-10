from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def myHomeView(*args, **kwargs):
    return HttpResponse('<h1> Hola </h1>')

def anotherView(request):
    return HttpResponse('<h1>Solo<h1>')