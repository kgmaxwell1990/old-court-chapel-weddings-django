from django.shortcuts import render

def get_index(request):
    return render(request, 'index.html')

def get_gallery(request):
    return render(request, 'gallery.html')

def get_vendors(request):
    return render(request, 'vendors.html')

def get_info(request):
    return render(request, 'info.html')

def contact(request):
    return render(request, 'contact.html')



