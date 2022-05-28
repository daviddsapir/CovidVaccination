# Generated by Django 4.0.4 on 2022-05-28 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RegisterForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=80)),
                ('last_name', models.CharField(max_length=80)),
                ('date_of_birth', models.DateField(max_length=80)),
                ('address', models.CharField(max_length=80)),
                ('city', models.CharField(max_length=80)),
                ('zip_code', models.CharField(max_length=80)),
                ('land_line', models.CharField(max_length=20)),
                ('cellular_phone', models.CharField(max_length=20)),
                ('infected_before', models.BooleanField(verbose_name=False)),
                ('other_conditions', models.CharField(max_length=255)),
            ],
        ),
    ]
