from atexit import register
from django.shortcuts import render

# Create your views here.
def handleRegister(req):
    if req.method == 'POST':
        print(req.POST)
        
    return render(req, 'index.html')