from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'profile')

class UserSerializerBasic(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'profile')