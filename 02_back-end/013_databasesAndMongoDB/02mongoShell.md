# Mongo Commands

* mongod: starts mongo service
* mongo: open shell
* help: list of the basic features of mongo
* show dbs: show databases names
* use: if a databases exists, use it, if not, create it and use it.
* insert: insert data into the collection (we don't need to create the collection, we can do it by inserting the data)
  > **db.dogs.insert({name: "Dog", breed: "Dachshund"})** <br>
  <br>
  > db -> refer to the db we are on <br>
  > dogs -> collection <br>
  > insert -> command to insert <br>
  > {} -> object with the data
* find: view all my dogs in my databases
  > db.dogs.find()
  * or find a specific dog
    > db.dogs.fing({name: "Dog"})
* update: update the value of a field
  > db.dogs.update({name: "Dog"}, {breed: "Labradoodle"})
  * change the dog where has name "dog" and update his breed to labradoodle
  * but this update will replace everything and dog will lose his name and only have a breed
  * to fix this, we do the **$set: {}** property
    > db.dogs.update({name: "Dog"}, {$set: {breed: "Labradoodle", isCute: true}})
* remove: destroy
  > db.dogs.remove({breed: "Labradoodle"})
  * remove where breed is labradoodle
  * will remove everything that matches, if we want to limit we use:
  > db.dogs.remove({breed: "Labradoodle"}).limit(1)