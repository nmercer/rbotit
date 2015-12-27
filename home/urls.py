from django.conf.urls import patterns, include, url

urlpatterns = patterns('home.views',
    url(r'^$', 'create'),
    url(r'^stat/$', 'stat'),
    url(r'^[a-zA-Z0-9]{3,}/$', 'play'),
    url(r'^.*/$', 'bad'),
)
