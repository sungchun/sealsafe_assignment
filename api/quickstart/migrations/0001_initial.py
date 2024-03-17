# Generated by Django 5.0.3 on 2024-03-17 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CityWeather',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city_name', models.CharField(max_length=50)),
                ('temperature', models.DecimalField(decimal_places=2, max_digits=5)),
                ('humidity', models.IntegerField()),
                ('condition', models.CharField(max_length=50)),
                ('date', models.DateField()),
            ],
        ),
    ]
