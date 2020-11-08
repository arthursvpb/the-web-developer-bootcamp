# Databases

## Intro to databases

* What is a database?
  * A collection of information/data
  * They have interface for interacting with that data
  
### **SQL** (relational) vs. **NOSQL** (non-relational) examples

#### SQL:
 *  Tabular databases, flat;
 *  Relationed tables;
 *  Join tables;
 *  Not flexible, exact patterns.
 *  Command example:

  > SELECT * FROM users;
    
#### NoSQL:
 *  We don't have to define patterns;
 *  More flexible;
 *  No tables, things can be nested.
 *  Looks like JavaScript object BSON (Binary JavaScript Object Notation);
 *  Command example: 
   
> db.dogs.delete()