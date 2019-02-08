from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Product
from .serializers import ProductSerializer
from apps.category.models import Category


class List(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)


class ListByUser(generics.ListAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        user = self.kwargs['user']
        queryset = Product.objects.filter(user=user)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


class ListGroupByCategoryByUser(generics.ListAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        user = self.kwargs['user']
        response = []
        querysetCategory = Category.objects.all()
        for category in querysetCategory:
            querysetProducts = Product.objects.filter(category=category).filter(user=user)
            serializerProduct = ProductSerializer(querysetProducts, many=True)
            response.append({
                'name': category.name,
                'products': serializerProduct.data
            })
        return Response(response)
