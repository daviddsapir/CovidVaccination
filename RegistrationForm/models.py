from django.db import models

# Create your models here.

class RegisterForm(models.Model):
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    date_of_birth = models.DateField(max_length=80)
    address = models.CharField(max_length=80)
    city  = models.CharField(max_length=80)
    zip_code  = models.CharField(max_length=80)
    land_line = models.CharField(max_length=20)
    cellular_phone = models.CharField(max_length=20)
    infected_before = models.BooleanField()
    # other_conditions = models.ForeignKey()
