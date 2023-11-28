from django.contrib import admin
from .models import *

# Register your models here.

class ImageInline(admin.TabularInline):
    model = Image
    extra = 3
    
class CatInline(admin.TabularInline):
    model = WorkSub
    extra = 1

class WorkAdmin(admin.ModelAdmin):
    inlines = [CatInline,ImageInline] 
    list_display = ['work_name', 'category']
    
    
    

admin.site.register(Work, WorkAdmin)
admin.site.register(Image)
admin.site.register(WorkSubCategory)

admin.site.site_header = "BreakMart Admin"
admin.site.site_title = "BreakMart Admin Portal"
admin.site.index_title = "Welcome to BreakMart Portal"
