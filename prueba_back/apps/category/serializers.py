from rest_framework import serializers
from .models import Category
from apps.product.models import Product
# from apps.product.serializers import ProductSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')
