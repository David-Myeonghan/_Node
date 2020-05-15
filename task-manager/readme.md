- SQL || NoSQL

  - Table || Collection
  - Row/Record || Document
  - Column || Field

  - After downloading MongoDB community server, Set the mongodb path by creating folder 'mongodb-data' and the following command '/Users/david/mongodb/bin/mongod --dbpath=/Users/david/mongodb-data'
  - Keep running this command while using MongoDB
  - If 'address already in use', Use shutdownServer(): 'use admin db.shutdownServer()'

  - install admin tool 'robo 3t'
  - Install MongoDB driver 'http://mongodb.github.io/node-mongodb-native/', which is low level.

  - From different terminal 'node mongodb.js' after setting up the db connection

- Refer Update method here: 'https://docs.mongodb.com/manual/reference/operator/update/'

- Install Mongoose - to set up field, for authentication, etc.

  - Mongoose is ODM (Objecct Document Mapper)
  - Mongoose uses the Mongo DB module behind the

- Data validation & sanitisation

  - validation: enforce the data conforms to some rules.
  - sanitisation: alter to data before saving it, such as lowercase, and trim.
  - use a 'validator' module.

- REST API (RESTful API)

  - Representational State Transfer - Application Programming Interface
  - API: a set of tools that allow you to build software applications (NPM modules like Express)
  - REST API: allows clients such as a web application to access and manipulate resources using a set of predefined operations.

- HTTP request

  - The request line: HTTP method and protocol.
  - Request headers: a key-value pair to attach meta information to the request. we can have as many as we need.
  - request body

- HTTP response

  - status line
  - response headers
  - response body

- Install Nodemon as devDependency & Express as regular dependency
