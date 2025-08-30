from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('add_emp/', Employee_db.as_view(), name='add_emp'),
    path('get_emp/', Get.as_view(), name='get_emp'),
    path('update_emp/', UpdateUserDetails.as_view(), name='update_emp'),
]