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


class TaxisDetails(models.Model):
    taxis_username = models.CharField(max_length=200, blank=True)
    taxis_password = models.CharField(max_length=200, blank=True)

    class Meta:
        abstract = True


class IkaDetails(models.Model):
    ika_username = models.CharField(max_length=200, blank=True)
    ika_password = models.CharField(max_length=200, blank=True)

    class Meta:
        abstract = True


class BusinessRegistryDetails(models.Model):
    business_registry_username = models.CharField(max_length=200, blank=True)
    business_registry_password = models.CharField(max_length=200, blank=True)

    class Meta:
        abstract = True


class Customer(TaxisDetails,
               IkaDetails,
               BusinessRegistryDetails):
    tax_number = models.CharField(max_length=200, blank=False, unique=True)
    social_security_number = models.CharField(max_length=200, blank=False, unique=True)
    first_name = models.CharField(max_length=200, blank=False)
    last_name = models.CharField(max_length=200, blank=False)
    last_name_2 = models.CharField(max_length=200, blank=True)
    father_first_name = models.CharField(max_length=200, blank=True)
    father_last_name = models.CharField(max_length=200, blank=True)
    mother_first_name = models.CharField(max_length=200, blank=True)
    mother_last_name = models.CharField(max_length=200, blank=True)
    date_of_birth = models.DateTimeField(blank=False)
    date_of_death = models.DateTimeField(null=True, blank=True)
    country_of_birth = models.CharField(max_length=200, blank=False)
    GENDER_CHOICES = (
        ('MA', 'Male'),
        ('FE', 'Female')
    )
    gender = models.CharField(
        max_length = 2,
        choices=GENDER_CHOICES
    )
    nationality = models.CharField(max_length=200, blank=False)
    
    home_phone_number = models.CharField(max_length=200, blank=True)
    mobile_phone_number = models.CharField(max_length=200, blank=True)
    fax = models.CharField(max_length=200, blank=True)
    email = models.EmailField(blank=True)

    identity_type = models.CharField(max_length=200, blank=False)
    identity_number = models.CharField(max_length=200, blank=False)
    identity_issue_date = models.CharField(max_length=200, blank=False)
    identity_issuing_authority = models.CharField(max_length=200, blank=False)

    country = models.CharField(max_length=200, blank=True)
    postcode = models.CharField(max_length=200, blank=True)
    address = models.CharField(max_length=200, blank=True)
    municipality = models.CharField(max_length=200, blank=True)

    marital_status = models.CharField(max_length=200, blank=False)
    marriage_date = models.DateTimeField(null=True, blank=True)
    partner_tax_number = models.CharField(max_length=200, blank=True)
    partner_first_name = models.CharField(max_length=200, blank=True)
    partner_last_name = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f'({self.tax_number}) {self.first_name} {self.last_name}'
