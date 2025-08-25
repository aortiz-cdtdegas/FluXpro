# _AppInfo/views.py
from django.shortcuts import render

def Info(request):
    return render(request, '_AppInfo/Info.html')
