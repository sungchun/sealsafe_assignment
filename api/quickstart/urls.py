from django.urls import path
from .views import CityWeatherView, SpecificCityWeatherView

urlpatterns = [
    path('', CityWeatherView.as_view()),
    path('<str:name>/', SpecificCityWeatherView.as_view()),
]