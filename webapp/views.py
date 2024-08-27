from .serializers import WebSerializer,UserSerializer
from .models import WebModel,User
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
# Create your views here.
@api_view(['GET'])
def home(request):
    if request.method == 'GET':
        articles = WebModel.objects.all()
        serializer = WebSerializer(articles,many=True)
        return JsonResponse(serializer.data,safe=False)

@api_view(['POST'])
def add(request):
    serializer = WebSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response( status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_404_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])

def articlelist(request,id):
    article = WebModel.objects.get(pk=id)
    if request.method =='GET':
        serializer = WebSerializer(article)
        return Response(serializer.data)


    
    elif request.method =='PUT':
        serializer = WebSerializer(article,data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data,)
        return Response(serializer.errors,status=status.HTTP_404_BAD_REQUEST)

    elif request.method == 'DELETE':
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response( status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




