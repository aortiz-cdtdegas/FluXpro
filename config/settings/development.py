from .base import *
import os

DEBUG = True
ALLOWED_HOSTS = os.getenv('DJANGO_ALLOWED_HOSTS_DEV').split(',')
SESSION_COOKIE_AGE = 1200

# Habilitar Swagger/Schema solo en desarrollo
# Si REST_FRAMEWORK no está definido en base, inicializarlo aquí para habilitar esquema en dev.
if 'REST_FRAMEWORK' not in globals():
    REST_FRAMEWORK = {}

REST_FRAMEWORK['DEFAULT_SCHEMA_CLASS'] = 'drf_spectacular.openapi.AutoSchema'