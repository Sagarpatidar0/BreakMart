from django.db import models
# from django.utils.text import slugify 

class Image(models.Model):
    work = models.ForeignKey('Work', on_delete=models.CASCADE, related_name='work_images')
    image = models.ImageField(upload_to='works/images/')

    def __str__(self):
        return f"{str(self.image.url)}"

class WorkSubCategory(models.Model):
    title = models.CharField(max_length=50, blank=False, null=False)
    subcate_image = models.ImageField(upload_to='subimages')

    def __str__(self):
        return str(self.title)


class Work(models.Model):
    CATEGORY_CHOICES = (
        ('tech', 'tech'),
        ('design', 'design'),
        ('social', 'social'),
        ('media', 'media'),
        ('scale', 'scale'),
    )

    work_name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, blank=False, null=False)
    disc = models.TextField(blank=True, null=True)
    cats = models.ManyToManyField(WorkSubCategory, through='WorkSub', related_name='cats')
    videos = models.FileField(upload_to='works/videos/',null=True, blank=True)
    images = models.ManyToManyField(Image, through='WorkImage', related_name='+')

    def __str__(self):
        return self.work_name

class WorkSub(models.Model):
    work = models.ForeignKey(Work, on_delete=models.CASCADE)
    cat = models.ForeignKey(WorkSubCategory, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.cat)
    

class WorkImage(models.Model):
    work = models.ForeignKey(Work, on_delete=models.CASCADE)
    image = models.ForeignKey(Image, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.work.work_name} - {self.image}"
