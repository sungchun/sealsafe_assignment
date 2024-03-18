from django.urls import path
from .views import CityWeatherView, SpecificCityWeatherView, RegisterView, LoginView

urlpatterns = [
    path('city-weather/', CityWeatherView.as_view(), name='city-weather'),
    path('city-weather/<str:name>/', SpecificCityWeatherView.as_view(), name='specific-city-weather'),
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login')
]