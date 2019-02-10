from rest_framework import serializers
from .models import Product
from apps.category.serializers import CategorySerializer
from apps.user.serializers import UserSerializerBasic


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'cost', 'category', 'user', 'deleted_at')


class ProductSerializerNested(serializers.ModelSerializer):
    """
    Serializing the Product instances into representations.
    """
    user = UserSerializerBasic()

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'cost', 'category', 'user', 'deleted_at')
