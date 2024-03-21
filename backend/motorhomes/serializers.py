from rest_framework import serializers
from .models import Motorhome, Rent, Photo

class MotorhomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Motorhome
        fields = ['id','name', 'description', 'price', 'capacity']

class RentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = ['motorhome', 'user', 'rental_start', 'rental_end']

# Assuming you have a Photo model
class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['motorhome', 'image', 'description']