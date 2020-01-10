from django.contrib import admin
from django.urls import include, path
from . import views

app_name = 'sessiontest'
urlpatterns = [
    path('', views.index, name='index'),
    path('result/', views.result, name='result'),
]