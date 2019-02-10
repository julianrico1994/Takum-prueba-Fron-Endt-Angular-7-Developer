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
        print('queryset.count: ' + str(len(queryset)))
        if len(queryset) == 0:
            return Response({'succes': False})

        data = UserSerializer(queryset[0], many=False).data
        data['succes'] = True
        return Response(data)
