from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^list$', views.ListCreate.as_view()),
    url(r'^create$', views.ListCreate.as_view()),
    url(r'^update/(?P<pk>[\w.@+-]+)$', views.Update.as_view()),
    url(r'^softDelete$', views.SoftDelete.as_view()),

    url(r'^listByUser/(?P<user>[\w.@+-]+)/$', views.ListByUser.as_view()),
    url(r'^listGroupByCategoryByUser/(?P<user>[\w.@+-]+)/$', views.ListGroupByCategoryByUser.as_view()),
    
]
