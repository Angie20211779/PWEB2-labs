from django.http import HttpResponse
from reportlab.pdfgen import canvas

def generate_pdf(request):
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="report.pdf"'

    p = canvas.Canvas(response)
    p.drawString(100, 100, "Hello, world.")
    p.showPage()
    p.save()

    return response
