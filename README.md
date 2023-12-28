# simple_phonebook_app

This is a simple phonebook app that allows users to store and manage their contacts.

The techstack using is React, Django and SQLite.

The app has a main listing page, which shows a table with names and their respective phone numbers. Additionally, there's a second page featuring two textboxes for easily creating and editing both names and phone numbers.

Now, let's get started.

## Prerequisites

- [Node.js](https://nodejs.org/en)
- [Python>=3.8.0](https://www.python.org/)
- [DB Browser for SQLite](https://sqlitebrowser.org/dl/)(Recommended) or [SQLite](https://www.sqlite.org/index.html)

## Setup

### Frontend

1. Navigate to the frontend folder in a terminal.

   ```
   cd phonebook_fe
   ```

2. Install packages

   ```
   npm install
   ```

3. Run frontend
   ```
   npm start
   ```

You should see the app hosted at http://localhost:3000/.

### Backend

1. Navigate to the backend folder in another terminal.

   ```
   cd phonebook_be
   ```

2. Install packages

   ```
   pip install djangorestframework django-cors-headers
   ```

3. Run backend
   ```
   python manage.py runserver
   ```

The backend will be hosted at http://127.0.0.1:8000/.

### Demo

After running both frontend and backend, you should able to use the simple phonebook app at http://localhost:3000/.

![phonebook_app_gif](https://github.com/annabelle1217/simple_phonebook_app/assets/79887667/ee0fa302-47ab-4712-97af-a1533e079810)
