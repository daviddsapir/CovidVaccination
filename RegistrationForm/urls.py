from django.urls import URLPattern, path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
  path('', TemplateView.as_view(template_name='index.html')),
  path('register', views.handleRegister, name="register")
]