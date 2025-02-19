from django.contrib import admin
from .models import Review, Contact  # Import your models

# Register your models with the admin site
admin.site.register(Review)
admin.site.register(Contact)
