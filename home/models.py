from django.db import models

class Links(models.Model):
    date = models.DateField(auto_now=True, auto_now_add=False)
    used = models.BooleanField(default=True)

class CreateCounter(models.Model):
    pass

class PlayCounter(models.Model):
    pass
