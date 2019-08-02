from django.contrib import admin
from django.urls import path
from . import views

app_name = 'app'

urlpatterns = [
    path('', views.index, name='index'),
    path('test1/', views.index2, name='index2'),
    path('test3/', views.index3, name='index3'),

]