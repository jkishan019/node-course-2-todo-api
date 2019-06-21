// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to db server');
    }
    console.log('connected to mongodb server');

    db.collection('Users').deleteMany({name:'andrew'}).then((result)=>{
        console.log(result);
    });

    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id:new ObjectID('5d0d3889f4f93505f8c9c39d')}).then((result)=>{
        console.log(result);
    });

    // db.close();
});