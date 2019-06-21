// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to db server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').find({
    //     _id : new ObjectID('5d0d3a54826e8c37b93579dd')
    // }).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch todos',err);
    // });

    // db.collection('Todos')
    // .find()
    // .count()
    // .then((count)=>{
    //     console.log('todos count:',count);
    //     // console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch todos',err);
    // });

    db.collection('Users').find({
        name : 'andrew'
    }).toArray().then((docs)=>{
        console.log('todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch todos',err);
    });
    // db.close();
});