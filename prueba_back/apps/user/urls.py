from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^list$', views.List.as_view()),
    url(r'^auth$', views.Auth.as_view())
]
