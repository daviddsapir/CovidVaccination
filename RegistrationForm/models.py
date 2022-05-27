from django.db import models

# Create your models here.

class RegisterForm(models.Model):
    first_name = models.CharField(max_length=80)        # 1
    last_name = models.CharField(max_length=80)         # 2
    date_of_birth = models.DateField(max_length=80)     # 3
    address = models.CharField(max_length=80)           # 4
    city  = models.CharField(max_length=80)             # 5
    zip_code  = models.CharField(max_length=80)         # 6
    land_line = models.CharField(max_length=20)         # 7
    cellular_phone = models.CharField(max_length=20)    # 8
    infected_before = models.BooleanField(False)        # 9
    other_conditions = models.CharField(max_length=255) # 10
