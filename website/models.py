from django.contrib.auth.models import User
from django.db import models

from imagekit.models import ImageSpecField


class Name(models.Model):
    name = models.CharField(
        max_length=100,
        blank=True
    )

    class Meta:
        abstract = True


class Description(models.Model):
    description = models.CharField(
        max_length=200,
        blank=True
    )

    class Meta:
        abstract = True


class Image(models.Model):
    image = models.CharField(
        max_length=200,
        blank=True
    )
    avatar_thumbnail = ImageSpecField(
        source='image',
        format='JPEG',
        options={'quality': 60}
    )

    class Meta:
        abstract = True


class Person(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    dob = models.DateTimeField(blank=True)
    GENDER_CHOICES = (
        ('MA', 'Male'),
        ('FE', 'Female')
    )
    gender = models.CharField(
        max_length = 2,
        choices=GENDER_CHOICES
    )

    def __str__(self):
        return self.user.username
