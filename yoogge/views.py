from django.shortcuts import render
from django.contrib import messages
from .models import Contact, Subscriber


def home(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        details = Contact(name=name, email=email, subject=subject, message=message)
        details.save()
        messages.success(request, 'Message Sent!')
        return render(request, 'index.html')
    else:
        return render(request, 'index.html')


def joined(request):
    checkbox = {'on': True,
                'off': False, }
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subscribe = checkbox[request.POST.get('subscribe')]
        details = Subscriber(name=name, email=email, subscribe=subscribe)
        details.save()
        messages.success(request, 'You\'ll Get your Coupon!')
        return render(request, 'index.html')


def bargain(request):
    return render(request, 'chat/index.html')
