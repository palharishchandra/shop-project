# Generated by Django 3.2.6 on 2021-08-22 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_auto_20210822_1325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='createdAt',
            field=models.DateTimeField(null=True),
        ),
    ]
