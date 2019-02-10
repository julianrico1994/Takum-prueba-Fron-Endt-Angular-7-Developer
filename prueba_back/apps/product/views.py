from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Product
from .serializers import ProductSerializer, ProductSerializerNested
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
        queryset = Product.objects.filter(user=user, deleted_at=None).order_by('category')
        serializer = ProductSerializerNested(queryset, many=True)
        return Response(serializer.data)


class soft_delete(generics.ListAPIView):
    permission_classes = (AllowAny,)

    def put(self, request):
        dataPost = request.data
        queryset = Product.soft_delete(dataPost['id'])
        serializer = ProductSerializer(queryset, many=False)
        return Response(serializer.data)
