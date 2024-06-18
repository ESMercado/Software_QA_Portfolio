# Restful API Testing using Postman
[Portfolio](https://github.com/ESMercado/Software-QA-Portfolio/blob/aca7b6413e351484170d55980250a06c54e74a2d/README.md)  -  [Processes](#process)  -  [Test Case](#test-cases)  -  [Go to Bottom](#---)
# <h3> Tools </h3>
* API: [Restful-Booker](https://restful-booker.herokuapp.com/)
* Postman - Testing


[Video Sample of the test](https://drive.google.com/file/d/1itBFPP6wAwLZqs2mzbHjiPy1LIcaTTOs/view?usp=sharing)


# <h3> Introduction </h3>

The Restful-booker is an API that you can use to learn more about API Testing or try out API testing tools against. The API comes pre-loaded with 10 records for you to work with and resets itself every 10 minutes back to that default state. Restful-booker also comes with detailed API documentation to help get you started with your API testing straight away.

For this pupose of the portfolio the API is a great tool for demonstraiting real world scenorios specifically for businesses involing booking or record keeping.

# <h3>API Documentation</h3>
The documentation can be read here: https://restful-booker.herokuapp.com/apidoc/index.html

# <h3>Process</h3>

My approach on this is to first understand what the product requirments are in order properly set test scenarios and then build test cases based on the created test scenarios.

# <h3>Scenario</h3>

In this scenario the company is a well known hiring agency from a big city and is building an API for their appointments setting tool which they will be using in their company system to manage their appointments on future hiring processes such as interviews for their clients. The API will serve as a pioneer for the company to allow their development team to develope a web app for the public and other companies to use.

# <h3>Requirements</h3>

- Test the API if all access points are working.
- API can CREATE, READ, UPDATE, DELETE (CRUD) data & records.
- Data is correctly handled in the CRUD Processes.
- API is stable.

# <h3>Test Cases</h3>

Base URL: ```https://restful-booker.herokuapp.com```

**1 - Ping Check**

The request is a simple health check endpoint to confirm whether the API is up and running. Testing to see if a response of code status: 201 indicates the API is connected and running.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/fe74eb94-da57-4af0-8c3c-fa270beed5b0)

**2 - Create Booking**

Setting a request to create a booking into the database through the API Post /booking

JSON body:
```
{
    "firstname" : "Elmer",
    "lastname" : "Mercado",
    "totalprice" : {{$randomPrice}},
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2024-01-01",
        "checkout" : "2024-01-07"
    },
    "additionalneeds" : "Dinner"
}
```

The request response must return a status code 200. After that I set a global variable as the bookingId, first name and last name values to keep track the test incase an error occures.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/0976c11b-1449-410b-a826-8a8d7f30abae)

**3 - GET get all booking**

Test if API can collect all created bookings in the database. Sending the GET request ``` {{baseUrl}}/booking ``` will expect a status code 200. 

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/013c5d40-56ef-4d43-96db-071fafb39e44)

**4 - GET show 1 booking**

Test if API can filter 1 booking. Using the bookingId variable in step 2 to use as a filter to retreive a created booking to insure a record will return.
Get request is ```{{baseUrl}}/booking/:bookingId``` 

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/e0ab64f1-12d7-4517-9ff9-d09f888d5413)

**5 - GET filter non-existing booking**

Test if API can resturn 404. Using a random number or kust '00' as the bookingId to use as a filter to retreive non-existing booking to insure a record will not return.
Get request is ```{{baseUrl}}/booking/00```. The expected response should be 404: Not found

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/3fde20f2-f72d-435b-bbbf-ab14e6e4c1d7)

**6 - Get filter by first name**

Test if API can filter 1 booking. Using the firstname variable in step 2 to use as a filter to retreive a created booking to insure a record will return.
Get request is ```{{baseBUrl}}/booking?firstname={{fName}} ```. The expected response should be Code status: 200.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/591a627f-3ebd-4dbe-87b1-8e95109d2335)

**7 - Get filter by last name**

Test if API can filter 1 booking. Using the lastname variable in step 2 to use as a filter to retreive a created booking to insure a record will return.
Get request is ```{{baseBUrl}}/booking?firstname={{lName}} ```. The expected response should be Code status: 200.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/923c8912-91c2-48a0-bf65-a91bc52f354b)

**8 - GET filter by book in date**

Test if API can filter bookings. Using a set date in the format of CCYY-MM-DD to retreive a created booking to insure a record will return.
Get request is ```{{baseBUrl}}/booking?checkin=2018-01-01 ```. The expected response should be Code status: 200.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/8b2178ef-f2cb-4429-b6fb-e2dd331b8b7b)

**9 - GET filter by book out date**

Test if API can filter bookings. Using a set date in the format of CCYY-MM-DD to retreive a created booking to insure a record will return. We can also set a variable to dinamically to add several days of a checkin date as a test case.
Get request is ```{{baseBUrl}}/booking?checkout=2018-01-01 ```. The expected response should be Code status: 200.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/8b2178ef-f2cb-4429-b6fb-e2dd331b8b7b)

**10 - GET filter by book in & out date**

Test if API can filter booking. Using a set date in and out with the format of CCYY-MM-DD to retreive a created booking to insure a record will return. We can also set a variable to dinamically to add several days of a checkin date as a test case.
Get request is ```{{baseBUrl}}/booking?checkin=2024-01-01&checkout=2024-01-08 ```. The expected response should be Code status: 200.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/dda74c6c-2f1f-4814-b72f-2a88e64f6b47)

**11 - PUT Update booking**

Test if API can update booking. Using the bookingId variable in step 2 to use as a filter to retreive a created booking to insure a record will return. This does require authorization whihc is set in the collection authorization using basic authorization which can be found in the API documentation to generate an access token.
Get request is ```{{baseUrl}}/booking/:bookingId```. The JSON body below I modefies some of the values to help prove changes were made. 
The expected response should be Code status: 200.

JSON body:
```
{
    "firstname" : "Elmer",
    "lastname" : "Doe",
    "totalprice" : {{$randomPrice}},
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2024-01-03",
        "checkout" : "2024-01-07"
    },
    "additionalneeds" : "Breakfast"
}
```

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/d07e631f-b104-4cc3-8945-2e1d0d739186)

**12 - PATCH partial update name booking**

Test if API can partially update bookings. This does require authorization whihc is set in the collection authorization using basic authorization which can be found in the API documentation to generate an access token. The JSON body below I modefies some of the values to help prove changes were made. 
The expected response should be Code status: 200.

JSON body:
```
{
    "firstname" : "Elmer",
    "lastname" : "Doe"
}
```

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/35100a9e-26d9-4532-ae2c-e8fbb6769912)

**13 - DELETE partial update name booking Copy**

Test if API can delete bookings. Using the bookingId variable in step 2 to use as a filter to retreive a created booking to insure the selected booking is deleted. Delete request is ```{{baseUrl}}/booking/:bookingId```. The expected response should be Code status: 200.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/4368eab0-33f2-476b-be55-5220ced4c075)

**14 - POST Set Authorization**

Test if API authentication can properly provide an access token and access poitns for updates and delete request. In the documentation. Testers can use the user name:```admin``` and password: ```password123``` set as a basic authentication in the authentication tab of the collection.

![image](https://github.com/ESMercado/Software-QA-Portfolio/assets/170240544/12581f74-7807-4741-aa27-4a269175a3a7)
#

You can run the test by downloading the test file: [restful-booker.postman_collection.json](https://github.com/ESMercado/Software-QA-Portfolio/blob/8f0ab04685ea37d092451f034f7998bd0820c2e3/Testing-files/restful-booker.postman_collection.json)
and install newman in your terminal using command ```npm install -g newman``` and run the test by typing ```newman run restful-booker.postman_collection.json``` 

#
[Go to Top](#restful-api-testing-using-postman)

# ---
