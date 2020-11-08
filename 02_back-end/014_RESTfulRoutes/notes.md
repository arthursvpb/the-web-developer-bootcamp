# REST (Representational State Transfer)

REST is pattern for defining routes, it's a way of mapping HTTP routes and CRUD (CREATE, READ, UPDATE and DELETE) together.

CREATE - /createBlog/:id
READ - /readBlog/:id
UPDATE - /updateBlog/:id
DESTROY - /destroyBlog/:id


## RESTful ROUTES

## INDEX

name | url | http verb | description<br>
___

<b>INDEX</b> | /dogs | GET | Display a list of all dogs <br>
<b>NEW</b>   | /dogs/new | GET | Display forms to make a new dog <br>
<b>CREATE</b>| /dogs | POST | Add new dog to the DB <br>
<b>SHOW</b>  | /dogs/:id | GET | Show info about one dog <br>
<b>EDIT</b>  | /dogs/:id/edit | GET | Show edit form for one dog <br>
<b>UPDATE</b>  | /dogs/:id | PUT | Update info about one dog, then redirect <br>
<b>DESTROY</b>  | /dogs/:id | DELETE | Destroy info about one dog, then redirect <br>



