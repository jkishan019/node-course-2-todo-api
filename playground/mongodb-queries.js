const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');

var id = 'd0e9667df3aec8409ecbf35';

if(!ObjectID.isValid(id)){
    console.log('id not valid');
}
// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('todo',todo);
// });

Todo.findById(id).then((todo)=>{
    console.log('todo',todo);
}).catch((e)=>{
    console.log(e);
});