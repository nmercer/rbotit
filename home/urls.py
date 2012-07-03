from django.conf.urls import patterns, include, url

urlpatterns = patterns('home.views',
    url(r'^$', 'create'),
    url(r'[a-zA-Z0-9]{5}/$', 'play'),
    url(r'^stat/$', 'stat'),
    url(r'^code/$', 'code'),
)
