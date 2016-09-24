# generator-kamlesh
This the Custom generator using the yeoman , Angular1 application and mongodb server
1) git clone http://github.com/mahapatrakamlesh/generator-kamlesh.git
2) Inside this generator-kamlesh, run this command: npm install 
3) Then run this command :  npm link 
4) Create a folder where you want to scaffold this custom generator.
5) Then run this command : yo kamlesh
6) After that open a new command prompt and start the mongodb server by issuing command 
   mongod 
7) From the earlier command prompt run this command :node server.js
8) As we are implementing a form validation , open a new another command prompt 
and type this command:  mongo
Now in this command prompt create a database named kamlesh
by writing this command : use kamlesh 
now in this database add a record as follows:
db.todos.insert({name:"kamlesh",email:"abc@123"})

Finally in the browser type: localhost:8080
Then a html page appears which will be asking for the username and password
if we type the username an password correct as per the data inserted to database.Then 
we get the successful login message and if wrongly typed we get unsuccessful message.



For any queries : mahapatrakamlesh@gmail.com
