from django.urls import path
from . import views

urlpatterns = [
    path("phonebook-listing/", views.phonebook_listing, name="phonebook_listing"),
    path("phonebook/<uuid:pk>/", views.phonebook_get, name="phonebook_get"),
    path("phonebook-create/", views.phonebook_create, name="phonebook_create"),
    path("phonebook-edit/<uuid:pk>/", views.phonebook_edit, name="phonebook_edit"),
    path(
        "phonebook-delete/<uuid:pk>/", views.phonebook_delete, name="phonebook_delete"
    ),
]
