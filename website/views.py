import base64
import json
import uuid

from datetime import datetime, date

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import PasswordResetForm
from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.generic import View
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt

from website import forms as FRM
from website import models as MOD

TEMPLATES_FOLDER = 'website/'


class IndexView(View):
    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, TEMPLATES_FOLDER + 'base.html', context)


class Authentication(View):
    def login(self, request, *args, **kwargs):
        rq_form = kwargs['form']

        # Check if user exists
        try:
            user = User.objects.get(username=rq_form['username'])
        except User.DoesNotExist as e:
            return JsonResponse(
                {
                    'errors': True,
                    'message': 'Please check your input'
                }
            )
        else:
            user = authenticate(
                request,
                username=rq_form['username'],
                password=rq_form['password']
            )
            if user is not None:
                login(request, user)
            else:
                return JsonResponse({'errors': True})
            
            return JsonResponse({'errors': False})
    
    def join(self, request, *args, **kwargs):
        rq_form = kwargs['form']
        form = FRM.UserForm(rq_form)

        if form.is_valid():
            user = User.objects.create_user(
                rq_form['username'],
                rq_form['email'],
                rq_form['password']
            )
            user.first_name = rq_form['first_name']
            user.last_name = rq_form['last_name']
            user.save()
        else:
            return JsonResponse(
                {
                    'errors': True,
                    'message': form.errors.as_json(),
                }
            )
        
        return JsonResponse(
            {
                'errors': False,
                'message': 'Account created successfully.'
            }
        )

    def password_reset_request(self, request, *args, **kwargs):
        rq_form = kwargs['form']

        # Check if user exists
        try:
            user = User.objects.get(email=rq_form['email'])
            #domain = request.get_host()
            
            # Encode users primary key in base64
            #encoded_pk = base64.b64encode(str(user.pk).encode())

            form = PasswordResetForm({'email': user.email})
            # if form.is_valid():
            #     form.save(
            #         request=request,
            #         use_https=True,
            #         from_email="email@petroskal.com", 
            #         email_template_name='registration/password_reset_email.html')

        except User.DoesNotExist as e:
            return JsonResponse(
                {
                    'errors': True,
                    'message': 'Please check your input'
                }
            )
        else:
            
            return JsonResponse({'errors': False})

    def password_reset(self, request, *args, **kwargs):
        rq_form = kwargs['form']
        
        u = User.objects.get(username='john')
        u.set_password(rq_form['password'])
        u.save()
        
        return JsonResponse({'errors': False})

    def logout(self, request, *args, **kwargs):
        logout(request)
        return JsonResponse({'errors': False})

    def post(self, request, *args, **kwargs):
        rq_data = json.loads(request.body.decode('utf-8'))

        if rq_data['action'] == 'login':
            return self.login(request, **rq_data)
        elif rq_data['action'] == 'join':
            return self.join(request, **rq_data)
        elif rq_data['action'] == 'password_reset_request':
            return self.password_reset_request(request, **rq_data)
        elif rq_data['action'] == 'password_reset':
            return self.password_reset(request, **rq_data)
        elif rq_data['action'] == 'logout':
            return self.logout(request, **rq_data)


class UserInfo(View):
    def get_user(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            username = request.user.username
            email = request.user.email,
            first_name = request.user.first_name
            last_name = request.user.last_name
            date_joined = request.user.date_joined
            last_login = request.user.last_login
            
            user = {
                'username': username,
                'email': email,
                'first_name': first_name,
                'last_name': last_name,
                'date_joined': date_joined,
                'last_login': last_login
            }
        else:
            return JsonResponse({'errors': True})
        
        return JsonResponse(
            {
                'errors': False,
                'user': user
            }
        )

    def post(self, request, *args, **kwargs):
        rq_data = json.loads(request.body.decode('utf-8'))

        if rq_data['action'] == 'get_user':
            return self.get_user(request, **rq_data)


class Customers(View):
    def fetch_customer(self, request, *args, **kwargs):
        customer_pk = kwargs.get('customer_pk', None)

        if customer_pk is None:
            return JsonResponse(
                {
                    'errors': True
                }
            )

        try:
            customer = MOD.Customer.objects.get(pk=customer_pk)
        except MOD.Customer.DoesNotExist:
            return JsonResponse(
                {
                    'errors': True
                }
            )
        else:
            content = {
                'taxis_username': customer.taxis_username,
                'taxis_password': customer.taxis_password,
                'ika_username': customer.ika_username,
                'ika_password': customer.ika_password,
                'business_registry_username': customer.business_registry_username,
                'business_registry_password': customer.business_registry_password,
                'tax_number': customer.tax_number,
                'social_security_number': customer.social_security_number,
                'first_name': customer.first_name,
                'last_name': customer.last_name,
                'last_name_2': customer.last_name_2,
                'father_first_name': customer.father_first_name,
                'father_last_name': customer.father_last_name,
                'mother_first_name': customer.mother_first_name,
                'mother_last_name': customer.mother_last_name,
                'date_of_birth': customer.date_of_birth,
                'date_of_death': customer.date_of_death,
                'country_of_birth': customer.country_of_birth,
                'gender': customer.gender,
                'nationality': customer.nationality,
                'home_phone_number': customer.home_phone_number,
                'mobile_phone_number': customer.mobile_phone_number,
                'fax': customer.fax,
                'email': customer.email,
                'identity_type': customer.identity_type,
                'identity_number': customer.identity_number,
                'identity_issue_date': customer.identity_issue_date,
                'identity_issuing_authority': customer.identity_issuing_authority,
                'country': customer.country,
                'postcode': customer.postcode,
                'address': customer.address,
                'municipality': customer.municipality,
                'marital_status': customer.marital_status,
                'marriage_date': customer.marriage_date,
                'partner_tax_number': customer.partner_tax_number,
                'partner_first_name': customer.partner_first_name,
                'partner_last_name': customer.partner_last_name,
            }

            return JsonResponse(
                {
                    'errors': False,
                    'content': content
                }
            )
    
    def fetch_customers(self, request, *args, **kwargs):
        customers = MOD.Customer.objects.all()

        content = []
        for customer in customers:
            content.append(
                {
                    'pk': customer.pk,
                    'tax_number': customer.tax_number,
                    'first_name': customer.first_name,
                    'last_name': customer.last_name,
                    'country': customer.country
                }
            )

        return JsonResponse(
            {
                'errors': False,
                'content': content
            }
        )
        
    def create_customer(self, request, *args, **kwargs):
        rq_form = kwargs['form']

        form = FRM.CustomerForm(rq_form)

        if form.is_valid():
            form.save()
        else:
            return JsonResponse(
                {
                    'errors': True,
                    'message': form.errors.as_json()
                }
            )
        
        return JsonResponse(
            {
                'errors': False
            }
        )

    def post(self, request, *args, **kwargs):
        rq_data = json.loads(request.body.decode('utf-8'))

        if rq_data['action'] == 'fetch_customer':
            return self.fetch_customer(request, **rq_data)
        elif rq_data['action'] == 'fetch_customers':
            return self.fetch_customers(request, **rq_data)
        elif rq_data['action'] == 'create_customer':
            return self.create_customer(request, **rq_data)
