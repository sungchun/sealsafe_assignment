from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from .models import CityWeather
from .serializers import CityWeatherSerializer


class CityWeatherView(APIView):
    def get(self, request):
        print("request")
        city_weather_data = CityWeather.objects.all()
        print("booba",city_weather_data)
        serialized_data = CityWeatherSerializer(city_weather_data, many=True)
        print("serialized",serialized_data.data)
        return JsonResponse(serialized_data.data, status=status.HTTP_200_OK, safe=False)