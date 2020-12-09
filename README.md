A minimalistic REST API built in PHP. I noticed that nodejs is the go to technology/language to build a simple API. So i started this project as a way of finding out if PHP can be a great tool of bootstrapping a REST API. This project is built on top of [WaterPipe](https://github.com/ElementaryFramework/WaterPipe), a routing framework and request and reponse handler for PHP.
No authentication/authorization or any type of Access control has been implemented.

*Available endpoints.*
````
GET /api/v1/users/list
GET => /api/v1/users/list?id=0000
POST /api/v1/users/0000
PUT/PATCH /api/v1/users/0000
DELETE /api/v1/users/0000

GET /api/v1/jobs/list
GET /api/v1/jobs/list?id=0000
POST /api/v1/jobs/0000
PUT/PATCH /api/v1/jobs/0000
DELETE /api/v1/jobs/0000
