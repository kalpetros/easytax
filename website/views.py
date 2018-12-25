import json

from datetime import datetime, date

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
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
                    'message': 'A user with the username you provided does not exist'
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
                rq_form['email'],
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
        
        return JsonResponse({'errors': False})

    def password_reset(self, request, *args, **kwargs):
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
