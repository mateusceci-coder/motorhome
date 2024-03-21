from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MotorhomeViewSet, RentViewSet, PhotoViewSet

router = DefaultRouter()
router.register(r'motorhomes', MotorhomeViewSet)
router.register(r'rents', RentViewSet)
router.register(r'photos', PhotoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]