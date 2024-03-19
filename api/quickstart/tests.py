from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User
from django.urls import reverse
from .models import CityWeather
'''unit tests for the api views'''
class TestRegisterView(APITestCase):
    def test_registration_success(self):
        '''test registration success returns expected response'''
        url = reverse('register')
        data = {'username': 'test_user', 'password': 'test_password', 'password_confirmation': 'test_password'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_202_ACCEPTED)

    def test_registration_failure(self):
        '''test registration failure returns expected response'''
        url = reverse('register')
        data = {'username': 'tester_user', 'password': 'test_password', 'password_confirmation': 'tess_password'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_422_UNPROCESSABLE_ENTITY)

class TestCityWeatherView(APITestCase):
    def test_get_city_weather(self):
        '''test get city weather returns expected response'''
        url = reverse('city-weather')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestSpecificCityWeatherView(APITestCase):
    def test_get_specific_city_weather(self):
        '''test get specific city weather returns expected response'''
        url = reverse('specific-city-weather', kwargs={'name': 'london'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestLoginView(APITestCase):
    def setUp(self):
        '''creates mock user'''
        self.user = User.objects.create_user(username='test_user', password='test_password')

    def test_login_success(self):
        '''test login success returns expected response'''
        url = reverse('login')
        data = {'username': 'test_user', 'password': 'test_password'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_202_ACCEPTED)
    
    def test_login_failure_username(self):
        '''test login failure returns expected response on wrong username'''
        url = reverse('login')
        data = {'username': 'tester_user', 'password': 'test_password'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
    
    def test_login_failure_password(self):
      '''test login failure returns expected response on wrong password'''
      url = reverse('login')
      data = {'username': 'test_user', 'password': 'password'}
      response = self.client.post(url, data, format='json')
      self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)