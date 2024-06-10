from django.shortcuts import render
from .models import Nota
from .forms import NotaForm

# Create your views here.
def notaTestView(request):
    
    obj = Nota.objects.get(id = 1)
    context = {
        'objecto':obj,
        }
    return render(request, 'notas/descripcion.html', context)
def notaCreateView(request):
    form = NotaForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = NotaForm()
        
    
    return render(request, 'notas/notasCreate.html', {'form': form})