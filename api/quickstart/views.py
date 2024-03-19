from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import status
from .models import CityWeather
from django.conf import settings
import jwt
from .serializers import CityWeatherSerializer, UserSerializer


class CityWeatherView(APIView):
    '''returns all city weather data'''
    def get(self, request):
        city_weather_data = CityWeather.objects.all()
        serialized_data = CityWeatherSerializer(city_weather_data, many=True)
        return JsonResponse(serialized_data.data, status=status.HTTP_200_OK, safe=False)


class SpecificCityWeatherView(APIView):
    '''returns all city weather data matching city name provided'''
    def get(self, request, name):
        weather_data = CityWeather.objects.filter(city_name__icontains=name)
        serialized_data = CityWeatherSerializer(weather_data, many=True)
        return JsonResponse(serialized_data.data, status=status.HTTP_200_OK, safe=False)


class RegisterView(APIView):
    '''creates a new account'''
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):
    def get_user(self, username):
        '''
        finds user by username, used in post method below. Returns error if no username found
        '''
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):
        '''Logs in existing user'''
        username = request.data.get('username')
        password = request.data.get('password')

        user = self.get_user(username)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})
        print(user)
        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({
            'token': token,
            'message': f'Welcome back {user.username}!',
            'id': user.id
             }, status=status.HTTP_202_ACCEPTED)