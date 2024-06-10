from django.shortcuts import render
from django.http import Destination

# Create your views here.

def index(request):

    dest1 = Destination ()
    dest1.name = 'Mumbai'
    return render(request, "index.html",{'dest1': dest1})
