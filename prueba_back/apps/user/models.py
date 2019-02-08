from django.db import models


TYPES_PROFILES = (
    ('TAKUM', 'TAKUM'),
    ('INVITADO', 'INVITADO'),
)


class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    profile = models.CharField(
        max_length=100, choices=TYPES_PROFILES, null=False)
