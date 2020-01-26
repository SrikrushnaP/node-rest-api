In this tutorial, we’ll be learning how to build a Rest API in Node.js and Express.js by building a simple API for different http verbs. 
This tutorial assumes an intermediate knowledge of javascript and experience working on the command line.

### In this tutorial we are using 

* [nodejs](https://nodejs.org/en/) for creating the api
* [mondodb](https://www.mongodb.com/) for storing the data
* [postman](https://www.getpostman.com/) for test the functionlity

### We are also used some dependency which listed below
* [express]()
* [mongoose](https://www.npmjs.com/package/mongoose)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [cors](https://www.npmjs.com/package/cors)
* [body-parser](https://www.npmjs.com/package/body-parser)

Note: all are installed form npm.


# [Commit 1](https://github.com/SrikrushnaP/node-rest-api/commit/80e65ac73405de7f3f7851611f7d2793023ed6fb): Initial commit

# [Commit 2](https://github.com/SrikrushnaP/node-rest-api/commit/cb7438c2200c629c0365f19bffe83ac605f29736): Create a folder and point to the folder 
Create a file inside the folder <br />
app.js <br />
.gitignore(for git only) <br />
``` run npm init ```<br />
``` npm i --save express ```<br />

# [Commit 3](https://github.com/SrikrushnaP/node-rest-api/commit/7c2cffb0431d1b81d6b3492123462e67f14994f0):  "Added nodemon and separate routes"
In this commit I installed 3 dependency [nodemon](https://www.npmjs.com/package/nodemon), [cors](https://www.npmjs.com/package/cors), [body-parser](https://www.npmjs.com/package/body-parser). Click on each to know more. <br />
``` npm i --save-dev nodemon ```<br />
``` npm i --save cors ```<br />
``` npm i --save body-parser ```<br />

# [commit 4](https://github.com/SrikrushnaP/node-rest-api/commit/5f980bb9e9213a6be8f3e7e0a33df06086c87b38): Connected to could mongo and create one post api which store data on mongodb
Install dependency mongoose <br />
```npm i --save mongoose```

Login to monogo cloud : https://cloud.mongodb.com/ <br />
Create a cluster (chose aws) <br />
Click on collection (Collection is similar to table) <br />
Create database <br />
For more refer the video link: https://youtu.be/-KYtgWyGmLA <br />

Connect using momgooes<br />
Chose connect and select connect your application <br />
Copy the connection string  <br />
mongodb+srv://<username>:<password>@cluster0-b8x3b.mongodb.net/test?retryWrites=true&w=majority
  
## You can test by using postman
Download the postman from the link: https://app.getpostman.com/app/download/win64 <br />
Test the api <br />
```
http://localhost:3000/api/register
header: [{"key":"Content-Type","value":"application/json","description":""}]
body: {
	"email": "sri@gmail.com",
	"password": "123"
}
Method : post
```


# [Commit 5](https://github.com/SrikrushnaP/node-rest-api/commit/3e565f4a748edfe7de5cd62bf80282d29d5d60ff): added get, post, put, patch and delete method api

# [Commit 6](https://github.com/SrikrushnaP/node-rest-api/commit/78371d4b837c8717297e61a9d7c3339746a31905): created login api with auth key and add authorization for get all users api
Install dependency [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
``` npm install –save jsonwebtoken ```




