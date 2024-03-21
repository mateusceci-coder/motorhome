from rest_framework import viewsets
from .models import Motorhome, Rent, Photo
from .serializers import MotorhomeSerializer, RentSerializer, PhotoSerializer

class MotorhomeViewSet(viewsets.ModelViewSet):
    queryset = Motorhome.objects.all()
    serializer_class = MotorhomeSerializer

class RentViewSet(viewsets.ModelViewSet):
    queryset = Rent.objects.all()
    serializer_class = RentSerializer

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

