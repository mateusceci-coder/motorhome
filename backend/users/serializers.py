from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        extra_kwargs = {'email': {'write_only': True}}
        model = CustomUser
        fields = ['id','email', 'first_name', 'last_name', 'phone_number', 'is_active', 'is_staff', 'date_joined']