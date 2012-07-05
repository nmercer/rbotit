from django.conf.urls import patterns, include, url
from django.views import *

urlpatterns = patterns('',
    url(r'^', include('home.urls')),
)
