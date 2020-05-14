- SQL || NoSQL

  - Table || Collection
  - Row/Record || Document
  - Column || Field

  - After downloading MongoDB community server, Set the mongodb path by making 'mongodb-data' folder and the following command '/Users/david/mongodb/bin/mongod --dbpath=/Users/david/mongodb-data'
  - Keep running this command while using MongoDB
  - If 'address already in use', Use shutdownServer(): 'use admin db.shutdownServer()'

  - install admin tool 'robo 3t'
  - Install MongoDB driver 'http://mongodb.github.io/node-mongodb-native/', which is low level.

  - From different terminal 'node mongodb.js' after setting up the db connection

- Refer Update method here: 'https://docs.mongodb.com/manual/reference/operator/update/'

- Install Mongoose - to set up field, for authentication, etc.
  - Mongoose is ODM (Objecct Document Mapper)
  - Mongoose uses the Mongo DB module behind the scenes
