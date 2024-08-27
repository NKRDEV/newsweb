from django.urls import path
from . import views
urlpatterns = [
    path("",views.home),
    path("add/",views.add),
    path("signup/",views.register),
    path("webapp/<int:id>/",views.articlelist)
]