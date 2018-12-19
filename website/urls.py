from django.conf.urls import url
from django.urls import path, re_path

from website import views as WSV

urlpatterns = [
    url(r'^(?:.*)/?', WSV.IndexView.as_view()),
]
