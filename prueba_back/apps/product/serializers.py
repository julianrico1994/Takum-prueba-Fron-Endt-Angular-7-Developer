from rest_framework import serializers
from .models import Product
# from apps.category.models import Category


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'amount', 'category', 'user')
