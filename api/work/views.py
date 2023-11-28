from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import WorkSerializer, CatSerializer
from .models import Work, WorkSubCategory
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import RetrieveAPIView

class WorkDetailAPIView(RetrieveAPIView):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    lookup_field = 'id'

@api_view(['GET'])
def allwork(request):
    obj = Work.objects.all()
    serializer = WorkSerializer(obj, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def works_by_category(request, category):
    # Filter works based on the provided category
    works = Work.objects.filter(category=category)
    
    if works.exists():
        serializer = WorkSerializer(works, many=True)
        return Response(serializer.data)
    else:
        return Response(
            {"message": f"No works found for category: {category}"},
            status=status.HTTP_404_NOT_FOUND
        )

@api_view(['GET'])
def get_works_by_subcategory(request, category, single_sub_category):
    # Filter works based on the provided category
    works = Work.objects.filter(
        category=category,
        cats__title=single_sub_category
        )
    
    if works.exists():
        serializer = WorkSerializer(works, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(
            {"message": f"No works found for category: {category}/{single_sub_category}"},
            status=status.HTTP_404_NOT_FOUND
        )

@api_view(['GET'])
def subcategory(request):
    cate = WorkSubCategory.objects.all()
    serializer = CatSerializer(cate, many=True)
    return Response(serializer.data)