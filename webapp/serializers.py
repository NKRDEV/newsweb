from rest_framework import serializers
from .models import WebModel,User

class WebSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebModel
        fields = ['title','description','author']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','password']


    