from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    subject = models.CharField(max_length=50)
    message = models.TextField()

    def __str__(self):
        return self.email + self.subject


class Subscriber(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    subscribe = models.BooleanField()

    def __str__(self):
        return self.email
