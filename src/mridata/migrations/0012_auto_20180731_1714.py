# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-08-01 00:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mridata', '0011_auto_20180605_1620'),
    ]

    operations = [
        migrations.AddField(
            model_name='data',
            name='downloads',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='tempdata',
            name='original_filename',
            field=models.TextField(default=''),
        ),
    ]
