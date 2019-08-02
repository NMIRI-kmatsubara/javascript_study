from django.shortcuts import render

def index(request):
    return render(request, 'app/index.html')

def index2(request):
    return render(request, 'app/index2.html')

def index3(request):
    return render(request, 'app/index3.html')

# Create your views here.
