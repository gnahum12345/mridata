# Generated by Django 2.0.3 on 2018-03-27 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mridata', '0004_auto_20180327_1414'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='data',
            name='transpose_thumbnail',
        ),
        migrations.RemoveField(
            model_name='tempdata',
            name='transpose_thumbnail',
        ),
        migrations.AddField(
            model_name='data',
            name='rotate_90_thumbnail',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='tempdata',
            name='rotate_90_thumbnail',
            field=models.BooleanField(default=False),
        ),
    ]
