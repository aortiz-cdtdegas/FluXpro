from .base import *
import os

DEBUG = False
#ALLOWED_HOSTS = ['tudominio.com']
ALLOWED_HOSTS = os.getenv('DJANGO_ALLOWED_HOSTS_PROD').split(',')
SESSION_COOKIE_AGE = 1800

# Configuración para Azure App Service Linux
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Configuraciones de seguridad adicionales para Azure
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')