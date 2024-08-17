from django.db import models

# Create your models here.
class WebModel(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    author = models.CharField(max_length=200)
    
    
    def __str__(self):
        return self.title


class User(models.Model):
    username = models.CharField(max_length=100)
    email=models.EmailField(max_length=250)
    password = models.CharField(max_length=50)
