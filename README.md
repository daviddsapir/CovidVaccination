<div align="center">

<img src="front_end/src/Images/vaccination_icon.png" style="width: 300px"/>

</div>

## Cloning the repository

#### Clone the repository using the command below

```bash
git clone https://github.com/daviddsapir/CovidVaccination.git

```

#### Move into the directory where we have the project files

```bash
cd CovidVaccination
```

#

## Create a virtual environment

#### Let's install virtualenv first

```bash
pip install virtualenv
```

#### Then we create our virtual environment

```bash
virtualenv env
```

#

## Build React Project

#### cd to react project folder

```bash
cd ./front_end
```

#### Run npm install to install and dependence's

```bash
npm install
```

#### Run npm run build to build the project

```bash
npm run build
```

#### Go back to project folder

```bash
cd ../
```

#

## Activate the virtual environment

### MacOS

```bash
. ./env/bin/activate
```

> ⚠ On MacOS we need the "." before the command to specify where we want the virtual environment to run. "." means the current directory.

### windows

```bash
.\env\scripts\activate
```

#

## Install Django

After complete creating the directory and virtual environment, it’s time to install Django

```bash
pip install django
```

#

## Setting up the database server

### create database in pgAdmin4

<ul>
    <li>Open pgAdmin4</li>
    <li>Click server, and choose PostgreSQL version, in this article, I use version 14</li>
    <img src="doc utils/create our database name.png" style="width: 500px"/>
    <li>Then create our database: name the database: <b>CovidVaccinationDB</b></li>
    <img src="doc utils/Name the database.png" style="width: 500px"/>
</ul>

### Get back to our code to config the database

<ul>
    <li> <p>Go to settings.py</p> </li>
    <img src="doc utils/settings.png" style="width: 500px"/>
    <li> <p>Approximately, in line 82 of code, this is the database config part.</p> </li>
    <li> <p> Change the password to your password in Database <br />
            ⚠ If it doesn't work, then change to your corresponding database server config:</p>
            <ul>
                <li> <p>NAME → Database name e.g. dbtest that previously created in pgAdmin</p> </li>
                <li> <p>USER → Database username (default is postgres)</p> </li>
                <li> <p>PASSWORD → Database password</p> </li>
                <li> <p>HOST → Database host (In development stage, use localhost or IP Address 127.0.0.1 also available)</p> </li>
                <li> <p>PORT → The port that used to run the database (Default port is 5432)</p> </li>
            </ul>

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'CovidVaccinationDB',
            'USER': 'postgres',
            'PASSWORD': '0523244903',
            'HOST': '127.0.0.1',
            'PORT': '5432',
        }
    }

</ul>

#

## Migrate the table to PostgreSQL database

### MacOS

```bash
pip install psycopg2-binary

python manage.py makemigrations RegistrationForm

python manage.py migrate
```

### windows

```bash
pip install psycopg2

python manage.py makemigrations RegistrationForm

python manage.py migrate
```

### Check if the DB migration went well:

<ul> 
<li> <p>Get back to pgAdmin</p> </li>
<li> <p>Double click on Tables in paAdmin.</p> </li>
<li> <p>Now we successfully created our PostgreSQL database, and migrate all tables in our Django project to PostgreSQL</p> </li>

<img src="doc utils/migrationWentWell.png" style="width: 500px"/>
</ul>

#

## Running the App

### To run the App, we use :

```bash
python manage.py runserver
```

> ⚠ Then, the development server will be started at http://127.0.0.1:8000/

#
