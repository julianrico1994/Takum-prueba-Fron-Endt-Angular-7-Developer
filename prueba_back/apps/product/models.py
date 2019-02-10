from django.db import models
from apps.category.models import Category
from apps.user.models import User
from django.shortcuts import get_object_or_404
import datetime

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    cost = models.CharField(max_length=50)
    deleted_at = models.DateTimeField(blank=True, null=True)
    category = models.ForeignKey(Category, related_name="category_product", on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name="user_product", on_delete=models.CASCADE)

    @staticmethod
    def soft_delete(id):
        product = get_object_or_404(Product.objects.all(), pk=id)
        # product = Product.objects.get(pk=id)
        # product.deleted_at = timezone.now()
        product.deleted_at = datetime.datetime.utcnow()
        product.save()
        return product
