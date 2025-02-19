# views.py
from django.shortcuts import render, redirect
from .models import Review, Contact
from .forms import ReviewForm, ContactForm

def index(request):
    # Get all reviews to display them on the page
    reviews = Review.objects.all()

    # Handle Review Form Submission
    if request.method == 'POST' and 'review_form' in request.POST:
        review_form = ReviewForm(request.POST)
        if review_form.is_valid():
            review_form.save()  # Save the review to the database
            return redirect('index')  # Redirect to the same page after submission to avoid re-submitting
    else:
        review_form = ReviewForm()  # Initialize an empty form if not submitted

    # Handle Contact Form Submission
    if request.method == 'POST' and 'contact_submit' in request.POST:  # Check for the contact_submit button
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            contact_form.save()  # Save the contact form to the database
            return redirect('index')  # Redirect to avoid re-submitting
    else:
        contact_form = ContactForm()

    # Render the index page with reviews and forms
    return render(request, 'index.html', {
        'reviews': reviews,
        'review_form': review_form,
        'contact_form': contact_form
    })
