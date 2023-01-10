


//Create and Save a Record of a Model:
const mongoose = require('mongoose');
const  person = new Person ({
    name:'Sabrine Aouini',
    age:22,
    favoritefood:['pizza','sushi']
});
person.save((error,person)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`${person.name} has been saved to the database`);
    }
});

const arrayOfPeople = [
    {
      name: 'Youssef',
      age: 22,
      favoriteFoods: ['pizza', 'pasta']
    },
    {
      name: 'Skander',
      age: 53,
      favoriteFoods: ['lablebi', 'fricasse']
    }
    
  ];
  Person.create(arrayOfPepole,(error,pepole)=>{
  if (error){
    console.log(error);
  }
  else{
    console.log(`${people.length} people were created`);
  }});

  //Use model.find() to Search Your Database
  Person.find({name:'Sabrine Aouini'},(error,people)=>{
    if (error){
        console.log(error);
    }
    else{
        console.log(people)
    }
  });

  //Use model.findOne() to Return a Single Matching Document from Your Database
  Person.findOne({favoriteFoods: 'pizza'}, (error, person) => {
    if (error) {
      console.log(error);
    } else {
      console.log(person);
    }
  });
  

  //Use model.findById() to Search Your Database By _id

  const Person = mongoose.model('Person', personSchema);

  const personId = '1234567890';

Person.findById(personId, (err, person) => {
  if (err) {
    console.error(err);
    return;
  }

  
//Perform Classic Updates by Running Find, Edit, then Save

  if (!person) {
    console.error(`Person with id ${personId} not found.`);
    return;
  }

  person.favoriteFoods.push('hamburger');

  if (person.favoriteFoods.isMixed) {
    person.markModified('favoriteFoods');
  }

  person.save((saveErr, savedPerson) => {
    if (saveErr) {
      console.error(saveErr);
      return;
    }

    console.log(savedPerson);
  });
});

//Perform New Updates on a Document Using model.findOneAndUpdate()

const personName = 'Skander';

Person.findOneAndUpdate(
  { name: personName },
  { $set: { age: 20 } },
  { new: true },
  (err, person) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(person);
  }
);
 
//Delete One Document Using model.findByIdAndRemove
Person.findByIdAndRemove(personId, (err, person) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log(person);
  });
  //MongoDB and Mongoose - Delete Many Documents with model.remove()
  Person.remove({ name: 'Sabrine Aouini' }, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log(result);
  });
  //Chain Search Query Helpers to Narrow Search Results
  Person.find({ favoriteFoods: 'fricasse' })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((err, people) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(people);
  });
  module.exports=FoodPerson