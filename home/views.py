from django.shortcuts import *
from django import forms
from django.forms.widgets import RadioSelect
from django.conf import settings
from home.models import Links, CreateCounter, PlayCounter
from django.utils.safestring import mark_safe
from utils import create_espeak_data

import espeak_py
import short_url

class MessageForm(forms.Form):
    message = forms.CharField(widget=forms.Textarea, max_length=200)
    speed = forms.CharField(max_length=6)
    pitch = forms.CharField(max_length=6)
    amp = forms.CharField(max_length=4)
    lang = forms.CharField(max_length=20)

def create(request):
    if request.method == 'POST':
        form = MessageForm(request.POST)

        if form.is_valid():
            empty_links = Links.objects.filter(used=False)

            count = CreateCounter()
            count.save()

            if empty_links:
                link = empty_links[0]
                url = short_url.encode_url(link.id)
                link.used = True
                link.save()
            else:
                new_link = Links()
                new_link.save()
                url = short_url.encode_url(new_link.id)

            data = create_espeak_data(
                        form.cleaned_data['speed'],
                        form.cleaned_data['pitch'],
                        form.cleaned_data['amp'],
                        form.cleaned_data['lang'])

            speak = espeak_py.init(settings.SOUND_DIR)
            speak.say(form.cleaned_data['message'].replace("'", ""), data, url)

            return HttpResponseRedirect('/' + url + '/')
    else:
        form = MessageForm()
        
    return render(request, 'create.html', {
        'form': form,
    })

def play(request):
    try:
        url_id = short_url.decode_url(request.path.replace("/", ""))
        link = Links.objects.filter(id=url_id)
    except:
        link = None

    if link:
        count = PlayCounter()
        count.save()

        path = "sound/" + request.path.replace("/", "") + ".mp3"
        return render_to_response('play.html', {
            'path': path,
            'mobile': request.mobile,
        })

    return render_to_response('bad_url.html')


def stat(request):
    play = PlayCounter.objects.all()
    play_count = len(play)
    create = CreateCounter.objects.all()
    create_count = len(create)
    return render_to_response('stat.html', {
        'create_count': create_count,
        'play_count': play_count,
    })

def code(request):
    return render_to_response('code.html')

def bad(request):
    return render_to_response('bad_url.html')
