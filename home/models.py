from mongoengine import *

class Links(Document):
    used = BooleanField(default=True)
    date_created = DateTimeField(required=True)
    date_updated = DateTimeField()
    date_played = DateTimeField()
    sequence = SequenceField()
    plays = IntField(default=0)
    url = StringField(required=True)

class CreateCounter(Document):
    pass

class PlayCounter(Document):
    pass
