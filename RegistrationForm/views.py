from atexit import register
from django.shortcuts import render
from .models import RegisterForm

# Create your views here.
def handleRegister(request):
    if request.method == 'POST':

        # Mandatory form fields
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        date_of_birth = request.POST["date_of_birth"]
        address = request.POST["address"]
        city = request.POST["city"]
        zip_code = request.POST["zip_code"]
        land_line = request.POST["land_line"]
        cellular_phone = request.POST["cellular_phone"]

        # Have been infected by COVID-19 before
        if "been_infected" in request.POST:
            print(request.POST["been_infected"])

        # Other conditions
        other_conditions = ""
        if "diabetes" in request.POST:
            other_conditions += request.POST["diabetes"]

        if "Cardio_Vascular" in request.POST:
            other_conditions += request.POST["Cardio_Vascular"]

        if "cancer" in request.POST:
            other_conditions += request.POST["cancer"]

        if "obesity" in request.POST:
            other_conditions += request.POST["obesity"]

        if "MRSA" in request.POST:
            other_conditions += request.POST["MRSA"]

        if "cholesterol" in request.POST:
            other_conditions += request.POST["cholesterol"]  

        if "high_blood_pressure" in request.POST:
            other_conditions += request.POST["high_blood_pressure"]

        RegisterForm(
            first_name=first_name,
            last_name=last_name,
            date_of_birth=date_of_birth,
            address=address,
            city=city,
            zip_code=zip_code,
            land_line=land_line,
            cellular_phone=cellular_phone,
            
            ).save()
        
    return render(request, 'index.html')