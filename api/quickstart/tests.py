from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User
from django.urls import reverse
from .models import CityWeather

class TestRegisterView(APITestCase):
    def test_registration_success(self):
        url = reverse('register')
        data = {'username': 'test_user', 'password': 'test_password', 'password_confirmation': 'test_password'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_202_ACCEPTED)

    def test_registration_failure(self):
        url = reverse('register')
        data = {'username': 'tester_user', 'password': 'test_password', 'password_confirmation': 'tess_password'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_422_UNPROCESSABLE_ENTITY)

class TestCityWeatherView(APITestCase):
    def test_get_city_weather(self):
        url = reverse('city-weather')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestSpecificCityWeatherView(APITestCase):
    def test_get_specific_city_weather(self):
        url = reverse('specific-city-weather', kwargs={'name': 'london'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestLoginView(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='test_user', password='test_password')

    def test_login_success(self):
        url = reverse('login')
        data = {'username': 'test_user', 'password': 'test_password'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_202_ACCEPTED)