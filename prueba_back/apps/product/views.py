from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Product
from .serializers import ProductSerializer
from apps.category.models import Category


class ListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)


class Update(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)


class SoftDelete(generics.UpdateAPIView):
    permission_classes = (AllowAny,)

    def put(self, request):
        dataPost = request.data
        queryset = Product.soft_delete(dataPost['id'])
        serializer = ProductSerializer(queryset, many=False)
        return Response(serializer.data)


class ListGroupByCategoryByUser(generics.ListAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        user = self.kwargs['user']
        queryset = Product.objects.filter(user=user, deleted_at=None).order_by('category')
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


class ListByUser(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        user = self.kwargs['user']
        queryset = Product.objects.filter(user=user)
        return queryset
