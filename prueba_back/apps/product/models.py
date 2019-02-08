from django.db import models
from apps.category.models import Category
from apps.user.models import User


# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    amount = models.CharField(max_length=50)
    category = models.ForeignKey(
        Category, related_name="category_product", on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, related_name="user_product", on_delete=models.CASCADE)