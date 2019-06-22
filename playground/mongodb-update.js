// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to db server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5d0d421d826e8c37b93579ee')
    // },{
    //     $set :{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5d0d379f96bc971170f68998')
    },{
        $inc :{
            age:5
        },
        $set:{
            name:'andrew'
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
    // db.close();
});