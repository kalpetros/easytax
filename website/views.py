import json

from datetime import datetime, date

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.generic import View
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt


TEMPLATES_FOLDER = 'website/'


class IndexView(View):
    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, TEMPLATES_FOLDER + 'base.html', context)

