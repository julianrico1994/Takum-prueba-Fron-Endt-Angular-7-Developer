# Prueba Takúm by Julian Garcia Rico ('Back-End' proyect)

## How to install

For the installation you must have installed python in its version 3.7.2. Then you have to follow the next steps.

1. Install [pipenv](pipenv.readthedocs.io/en/latest/) by using the following command

```
$ pip install pipenv
```

2. Install the virtual environment

```
$ pipenv install
```

3. Enter the virtual environment

```
$ pipenv shell
```

**Notice** that whenever you want to run the project, you need to run the virtual environment.

4. Create a database in postgresql called `'prueba'`

5. In the file 'prueba_back/settings.json' find the property called 'DATABASES'. Then, edit the user and the password. This is for the purpose that 'python' knows the database to which it must consume.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'prueba', # database name
        'USER': 'postgres', # database user
        'PASSWORD': '123', # database key
        'HOST': 'localhost',
        'PORT': '',
    }
}
```

6. Make  migrations and migrate.

```
$ python manage.py makemigrations
$ python manage.py migrate
```

7. Seed the database with the test data

```
$ python manage.py loaddata initial_data.json
```

8. And finally !!!**we run the project**!!!

```
$ python manage.py runserver
```

**Notice** that the proyect is now running at [localhost:8000](http://localhost:8000)
