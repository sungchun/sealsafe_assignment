## Running the Project
This is Preston Ng's Take Home test for Sealsafe.
This project is comprised of a frontend project made with React and a backend project made with Django in one repository.

To start the backend, navigate to ```sealsafe_assignment/api``` and execute the command:
```python manage.py runserver```. 
This should start the backend server on port 8000.

To start the frontend navigate to ```sealsafe_assignment``` and execute the command:
```npm start```.
This will start the React App on server 3000.


## Making Requests.
If you wish to test the database outside of the app here are the requests the API supports:

##### Get all weather data:
URL: http://127.0.0.1:8000/api/city-weather

##### Get weather data for one city:
URL: http://127.0.0.1:8000/api/city-weather/[city name]


##### Register an account:

URL: http://127.0.0.1:8000/api/register
Request body:
```
{
    "username": "example_name",
    "password": "pwd",
    "password_confirmation": "pwd"
}
```


##### Login 
URL: http://127.0.0.1:8000/api/login
Request body:
```
{
    "username": "example_username",
    "password": "example_password"
}
```
## Populating database.
The database includes existing weather data for 2 cities, "Hong Kong" and "London". You can querty these by putting the city name in the url in the request above.

If the database does not include this data, here is how you can populate the database with your own data:

1. Navigate to ```sealsafe_assignment/api```
2. In the terminal, run the command: ```python manage.py createsuperuser```.
3. Follow the instructions provided to create a user and make sure you remember the credentials you provided!.
4. Using the instructions at the beginning of this document, start the backend server.
5. In a web browser navigate to: ```http://127.0.0.1:8000/admin```
6. Use the credentials you entered earlier to login. 
7. You should now be able to use the Django UI to create more instances of any table with custom data, and query them afterwards. 
8. IMPORTANT! If you are creating new instances of CityWeather data, all city names should be in lowercase and cities with whitespace (such as 'Hong Kong' or 'San Francisco') should use an underscore('_') instead of whitespace. This is because the React app automatially changes user input when querying city weather to be lowercase and replace whitespace with underscores. 






























































