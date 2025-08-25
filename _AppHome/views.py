# _AppHome/views.py
from django.shortcuts import render

def index(request):
    return render(request, '_AppHome/index.html')
