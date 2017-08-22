from django.shortcuts import render

def get_index(request):
    return render(request, 'index.html')

def get_gallery(request):
    return render(request, 'gallery.html')

def get_booking(request):
    return render(request, 'booking_info.html')

def get_vendors(request):
    return render(request, 'vendors.html')


