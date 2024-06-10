from django.shortcuts import render
from .models import Alumno
from .forms import AlumnoForm

# Create your views here.
def alumnoTestView(request):
    
    obj = Alumno.objects.get(id = 1)
    context = {
        'objecto':obj,
        }
    return render(request, 'alumnos/descripcion.html', context)
def alumnoCreateView(request):
    form = AlumnoForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = AlumnoForm()
        
    
    return render(request, 'alumnos/alumnosCreate.html', {'form': form})

