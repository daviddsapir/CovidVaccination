from django.urls import URLPattern, path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
  path('register', views.handleRegister, name="register"),
  path('SummaryPage', TemplateView.as_view(template_name='index.html')),
  path('StudyJourneyPage', TemplateView.as_view(template_name='index.html')),
  path('SummaryPage/getFormInfo',views.handleFetchFormResults),
  path('', TemplateView.as_view(template_name='index.html')),
]