# backend/api/blog/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import CategoryViewSet, PostViewSet, CommentViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('posts/<slug:post_slug>/comments/', 
         CommentViewSet.as_view({'get': 'list', 'post': 'create'}), 
         name='post-comments'),
]