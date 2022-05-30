from atexit import register
import json
from django.shortcuts import redirect, render
from .models import RegisterForm
from django.shortcuts import redirect
from django.http import JsonResponse
def handleFetchFormResults(request):

    data = RegisterForm.objects.all()
    
    responseDataInfo = []
    for d in data:
        responseDataInfo.append({ 
            'first_name': d.first_name,
            'last_name': d.last_name, 
            'date_of_birth': d.date_of_birth,
            'address': d.address,
            'city': d.city,
            'zip_code': d.zip_code,
            'land_line': d.land_line,
            'cellular_phone': d.cellular_phone,
            'been_infected': d.infected_before,
            'other_conditions': d.other_conditions
            })

    responseData = {'data': responseDataInfo}

    return JsonResponse(responseData)


def handleRegister(request):

    if request.method == 'POST':

        # Mandatory form fields

        # 1
        if "first_name" in request.POST:
            first_name = request.POST["first_name"]

        # 2
        if "last_name" in request.POST:
            last_name = request.POST["last_name"]

        # 3
        if "date_of_birth" in request.POST:
            date_of_birth = request.POST["date_of_birth"]
        
        # 4
        if "address" in request.POST:
            address = request.POST["address"]

        # 5
        if "city" in request.POST:
            city = request.POST["city"]

        # 6
        if "zip_code" in request.POST:  
            zip_code = request.POST["zip_code"]

        # 7
        if "land_line" in request.POST:
            land_line = request.POST["land_line"]

        # 8
        if "cellular_phone" in request.POST:  
            cellular_phone = request.POST["cellular_phone"]

        # Have been infected by COVID-19 before
        # 9
        if "been_infected" in request.POST:
            infected_before = True
        else:
            infected_before = False

        # Other conditions
        other_conditions = []

        # 10
        if "diabetes" in request.POST:
            other_conditions.append('diabetes')
        
        # 11
        if "Cardio_Vascular" in request.POST:
            other_conditions.append('Cardio_Vascular')

        # 12
        if "cancer" in request.POST:
            other_conditions.append('cancer')

        # 13
        if "obesity" in request.POST:
            other_conditions.append('obesity')

        # 14
        if "MRSA" in request.POST:
            other_conditions.append('MRSA')

        # 14
        if "cholesterol" in request.POST:
            other_conditions.append('cholesterol')

        # 15
        if "high_blood_pressure" in request.POST:
            other_conditions.append('high_blood_pressure')
            
        other_conditions=", ".join(other_conditions)
        print(other_conditions)

        RegisterForm(
            first_name=first_name,
            last_name=last_name,
            date_of_birth=date_of_birth,
            address=address,
            city=city,
            zip_code=zip_code,
            land_line=land_line,
            cellular_phone=cellular_phone,
            infected_before = infected_before,
            other_conditions=other_conditions
            ).save()

        return redirect('/SummaryPage')

    return render(request, 'index.html')