from django.conf.urls import url
from django.urls import path, re_path

from website import views as WSV

urlpatterns = [
    path('customers_view', WSV.Customers.as_view(), name="customers_view"),
    path('user_info', WSV.UserInfo.as_view(), name="user_info"),
    path('authentication', WSV.Authentication.as_view(), name="authentication"),
    url(r'^(?:.*)/?', WSV.IndexView.as_view()),
]
