from rest_framework import serializers
from .models import *

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkSubCategory
        fields = ['title','subcate_image']

class WorkSerializer(serializers.ModelSerializer):
    work_images = ImageSerializer(many=True, read_only=True)# Embedded image data
    cats = CatSerializer(many=True, read_only=True)
    class Meta:
        model = Work
        fields = ['id', 'work_name', 'category', 'cats','disc' ,'videos', 'work_images']