from django.urls import path, include
from .views import *


urlpatterns = [
    path('works/', allwork),
    path('works/<str:category>/', works_by_category, name='works-by-category'),
    path('works/<str:category>/<str:single_sub_category>/', get_works_by_subcategory, name='works_by_subcategory'),
    path('singleworks/<int:id>/', WorkDetailAPIView.as_view(), name='work-detail'),
    path('works/category',subcategory),
]


# <a href="{% url 'works_by_category_and_subcategory' category='tech' single_sub_category='subcat2' %}">Works in Tech Category with Subcategory 'subcat2'</a>