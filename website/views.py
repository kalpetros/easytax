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


class Clients(View):
    def fetch_client(self, request, *args, **kwargs):
        client_pk = kwargs.get('client_pk', None)

        if client_pk is None:
            return JsonResponse(
                {
                    'errors': True
                }
            )

        try:
            client = MOD.Client.objects.get(pk=client_pk)
        except MOD.Client.DoesNotExist:
            return JsonResponse(
                {
                    'errors': True
                }
            )
        else:
            content = {
                'taxis_username': client.taxis_username,
                'taxis_password': client.taxis_password,
                'ika_username': client.ika_username,
                'ika_password': client.ika_password,
                'business_registry_username': client.business_registry_username,
                'business_registry_password': client.business_registry_password,
                'tax_number': client.tax_number,
                'social_security_number': client.social_security_number,
                'first_name': client.first_name,
                'last_name': client.last_name,
                'last_name_2': client.last_name_2,
                'father_first_name': client.father_first_name,
                'father_last_name': client.father_last_name,
                'mother_first_name': client.mother_first_name,
                'mother_last_name': client.mother_last_name,
                'date_of_birth': client.date_of_birth,
                'date_of_death': client.date_of_death,
                'country_of_birth': client.country_of_birth,
                'gender': client.gender,
                'nationality': client.nationality,
                'home_phone_number': client.home_phone_number,
                'mobile_phone_number': client.mobile_phone_number,
                'fax': client.fax,
                'email': client.email,
                'identity_type': client.identity_type,
                'identity_number': client.identity_number,
                'identity_issue_date': client.identity_issue_date,
                'identity_issuing_authority': client.identity_issuing_authority,
                'country': client.country,
                'postcode': client.postcode,
                'address': client.address,
                'municipality': client.municipality,
                'marital_status': client.marital_status,
                'marriage_date': client.marriage_date,
                'partner_tax_number': client.partner_tax_number,
                'partner_first_name': client.partner_first_name,
                'partner_last_name': client.partner_last_name,
            }

            return JsonResponse(
                {
                    'errors': False,
                    'content': content
                }
            )
    
    def fetch_clients(self, request, *args, **kwargs):
        clients = MOD.Client.objects.all()

        content = []
        for client in clients:
            content.append(
                {
                    'pk': client.pk,
                    'tax_number': client.tax_number,
                    'first_name': client.first_name,
                    'last_name': client.last_name,
                    'country': client.country
                }
            )

        return JsonResponse(
            {
                'errors': False,
                'content': content
            }
        )
        
    def create_client(self, request, *args, **kwargs):
        rq_form = kwargs['form']

        form = FRM.ClientForm(rq_form)

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

        if rq_data['action'] == 'fetch_client':
            return self.fetch_client(request, **rq_data)
        elif rq_data['action'] == 'fetch_clients':
            return self.fetch_clients(request, **rq_data)
        elif rq_data['action'] == 'create_client':
            return self.create_client(request, **rq_data)
