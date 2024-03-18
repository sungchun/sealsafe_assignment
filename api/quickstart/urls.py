from django.urls import path
from .views import CityWeatherView, SpecificCityWeatherView, RegisterView, LoginView

urlpatterns = [
    path('city-weather/', CityWeatherView.as_view()),
    path('city-weather/<str:name>/', SpecificCityWeatherView.as_view()),
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view())
]