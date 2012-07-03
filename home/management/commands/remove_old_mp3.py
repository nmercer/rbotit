from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from home.models import Links
from datetime import date, datetime, timedelta

import subprocess
import short_url

# Put in crontab to run at 4am every night:
# 00 4 * * * python /path/to/manage.py remove_old_mp3
class Command(BaseCommand):

    def handle(self, *args, **options):
        links = Links.objects.all()

        for link in links:
            link_date = link.date
            delete_date = date.today() - timedelta(days=4)

            if delete_date > link_date:
                link.used = False;
                link.save()

                url = short_url.encode_url(link.id)
                print url

                proc = subprocess.Popen('rm %s%s.mp3' % (settings.SOUND_DIR, url), shell=True)
