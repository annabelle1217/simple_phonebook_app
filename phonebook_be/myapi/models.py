from django.db import models
import uuid


# Create your models here.
class Phonebook(models.Model):
    phonebook_id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    name = models.CharField(max_length=25)
    phone_number = models.CharField(max_length=16)
