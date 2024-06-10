from django.shortcuts import render
from .models import Curso
from .forms import CursoForm

# Create your views here.
def cursoTestView(request):
    
    obj = Curso.objects.get(id = 1)
    context = {
        'objecto':obj,
        }
    return render(request, 'cursos/descripcion.html', context)
def cursoCreateView(request):
    form = CursoForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = CursoForm()
        
    
    return render(request, 'cursos/cursosCreate.html', {'form': form})