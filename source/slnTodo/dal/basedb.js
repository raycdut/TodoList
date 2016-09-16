var mongoose = require('mongoose');

var url = "mongodb://localhost:10000/todosdb";
mongoose.connect(url);
var TodoUser = mongoose.model('TodoUser', {
    name: String,
    roles: Array,
    age: Number
});

var user1 = new TodoUser({
    name: 'test1',
    roles: ['admin', 'normal user'],
    age: 30
})


console.log(user1);

user1.save();
//console.log(d);