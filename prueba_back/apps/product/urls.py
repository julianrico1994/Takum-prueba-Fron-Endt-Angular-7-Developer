from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^list$', views.List.as_view()),
    url(r'^listByUser/(?P<user>[\w.@+-]+)/$', views.ListByUser.as_view()),
    url(r'^listGroupByCategoryByUser/(?P<user>[\w.@+-]+)/$', views.ListGroupByCategoryByUser.as_view()),
    url(r'^softDelete$', views.soft_delete.as_view()),
]
