from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import UserSerializer

# Create your views here.


class List(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class Auth(generics.ListAPIView):
    permission_classes = (AllowAny,)

    def put(self, request):
        dataPost = request.data
        email = dataPost['email']
        password = dataPost['password']

        queryset = User.objects.filter(email=email).filter(password=password)
        if queryset.count == 0:
            Response({'succes': False})
        serializer = UserSerializer(queryset[0], many=False)
        return Response(serializer.data)
