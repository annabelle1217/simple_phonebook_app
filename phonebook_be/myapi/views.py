from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Phonebook
from django.http.response import JsonResponse, Http404
from .serializer import PhonebookSerializer
from django.core import serializers


@api_view(["GET"])
def phonebook_listing(request):
    return Response(
        {
            "data": Phonebook.objects.all().values(),
        }
    )


@api_view(["GET"])
def phonebook_get(request, pk):
    print(pk)
    try:
        serializer = PhonebookSerializer(Phonebook.objects.get(phonebook_id=pk))
        return Response(
            {
                "data": serializer.data,
            }
        )
    except Phonebook.DoesNotExist:
        raise Http404


@api_view(["POST"])
def phonebook_create(request):
    data = request.data
    serializer = PhonebookSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            {
                "message": "New entry added successfully",
                "data": serializer.data,
            },
        )
    return JsonResponse("Failed to save", safe=False)


@api_view(["PUT"])
def phonebook_edit(request, pk):
    try:
        student_to_update = Phonebook.objects.get(phonebook_id=pk)
    except Phonebook.DoesNotExist:
        raise Http404

    serializer = PhonebookSerializer(
        instance=student_to_update, data=request.data, partial=True
    )

    if serializer.is_valid():
        serializer.save()
        return Response(
            {
                "message": "Saved successfully",
                "data": serializer.data,
            },
        )
    return JsonResponse("Failed to update", safe=False)


@api_view(["DELETE"])
def phonebook_delete(request, pk):
    try:
        student_to_delete = Phonebook.objects.get(phonebook_id=pk)
    except Phonebook.DoesNotExist:
        raise Http404
    student_to_delete.delete()
    return JsonResponse("Student Deleted Successfully", safe=False)
