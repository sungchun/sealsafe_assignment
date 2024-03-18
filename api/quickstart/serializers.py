from django.contrib.auth.models import Group, User
import django.contrib.auth.password_validation as validations
from quickstart.models import CityWeather
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})

        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password) 
        return data

    class Meta:
        model = User
        fields = ['username', 'email', 'pasword', 'password_confirmation']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CityWeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = CityWeather
        fields = '__all__'
