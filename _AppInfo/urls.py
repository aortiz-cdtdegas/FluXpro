# _AppInfo/urls.py
from django.urls import path
from .views import Info

urlpatterns = [
    path('Info/', Info, name='Info'),
]
