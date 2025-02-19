from django import forms
from .models import Review, Contact

# Review form
class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['name', 'company', 'review']

# Contact form
class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['first_name', 'last_name', 'email_addr', 'message']
