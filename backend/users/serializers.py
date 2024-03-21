from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    extra_kwargs = {'password': {'write_only': True},
                    'email': {'write_only': True}}
    class Meta:
        model = User
        fields = ['id','username', 'email', 'first_name', 'last_name']