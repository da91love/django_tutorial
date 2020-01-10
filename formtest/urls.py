from django.contrib import admin
from django.urls import include, path
from . import views

app_name = 'formtest'
urlpatterns = [
    path('response/', views.responseform, name='response'),
    path('result/', views.result, name='result'),
    path('comparison/<str:domain>/', views.comparison, name='comparison'),
    path('i18nTest/', views.test_i18n, name='i18n'),
]