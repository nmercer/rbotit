from django.shortcuts import *
from django import forms
from django.forms.widgets import RadioSelect
from django.conf import settings
from home.models import Links, CreateCounter, PlayCounter
from django.utils.safestring import mark_safe
from utils import create_espeak_data, sequence_to_url, url_to_sequence
from datetime import datetime

import mongoengine
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
            link = Links.objects(used=False).update_one(
                set__used=True,
                set__date_updated=datetime.now(),
                full_result=True,
            )

            count = CreateCounter()
            count.save()

            if link.has_key('updatedExisting') and not link['updatedExisting']:
                link = Links()
        		link.date_created = datetime.now()
        		link.url = sequence_to_url(link.sequence) 
                link.save()
           
            data = create_espeak_data(
                form.cleaned_data['speed'],
                form.cleaned_data['pitch'],
                form.cleaned_data['amp'],
                form.cleaned_data['lang']
            )
           
            # Todo - Set this up to save to AWS S3. Get s3 url quick and pass up both.
            # Todo - Set SQS message to delete local file after some time 
            speak = espeak_py.init(settings.SOUND_DIR)
            speak.say(
                form.cleaned_data['message'].replace("'", ""),
                data,
                link['url'] if isinstance(link, dict) else link.url,
            )

            return HttpResponseRedirect('/' + link.url + '/')
    else:
        form = MessageForm()
        
    return render(request, 'create.html', {
        'form': form,
    })

def play(request):
    sequence = url_to_sequence(request.path.replace("/", ""))
    link = Links.objects(sequence=sequence).update_one(
        inc__plays=1,
        set__date_played=datetime.now(),
    )

    if link:
        # Todo - Setup AWS SQS message with delay to kill url after a few days if not played again
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

def bad(request):
    return render_to_response('bad_url.html')
