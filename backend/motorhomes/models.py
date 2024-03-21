from django.db import models
from users.models import User
from django.core.exceptions import ValidationError

# Create your models here.
class Motorhome(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10,decimal_places=2)
    capacity = models.IntegerField()

    def __str__(self):
        return self.name


class Rent(models.Model):
    motorhome = models.ForeignKey(Motorhome, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rental_start = models.DateTimeField()
    rental_end = models.DateTimeField()

    def clean(self):
        overlap = Rent.objects.filter(
            motorhome=self.motorhome,
            rental_start__lt=self.rental_end,
            rental_end__gt=self.rental_start
        ).exclude(pk=self.pk)
        if overlap.exists():
            raise ValidationError('This motorhome is already rented for this period')

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user} rented {self.motorhome} from {self.rental_start} to {self.rental_end}'

class Photo(models.Model):
    motorhome = models.ForeignKey(Motorhome, related_name="photos", on_delete=models.CASCADE)
    image = models.ImageField(upload_to='motorhomes/')
    description = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f'Photo of {self.motorhome}'