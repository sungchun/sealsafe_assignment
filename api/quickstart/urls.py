from django.urls import path
from .views import CityWeatherView

urlpatterns = [
    path('', CityWeatherView.as_view()),
]