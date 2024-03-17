from django.db import models

class CityWeather(models.Model):
    city_name = models.CharField(max_length=50)
    temperature = models.DecimalField(max_digits=5, decimal_places=2)
    humidity = models.IntegerField()
    condition = models.CharField(max_length=50)
    date = models.DateField()

    class Meta:
        app_label = 'quickstart'
    def __str__(self):
        return f'{self.city_name} - {self.temperature}°C, {self.condition}'