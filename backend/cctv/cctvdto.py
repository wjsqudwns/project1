'''
import django
django.setup()
from common.models import DataTransferObject
from django.db import models
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")
class CrimeVO(models.Model):  # database 어떤프로그램이던 vo는 엔티티와 연결
    police = models.TextField()
    crime = models.TextField()
    create_at = models.DateTimeField()


class Cctvdto(DataTransferObject):  # 리엑트

    police = ''
    crime = ''
    create_at = ''
'''