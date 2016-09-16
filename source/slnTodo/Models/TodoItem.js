var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoItemSchema = new Schema({
    subject: String,
    Description: String,
    DueDate: Date,
    AssginedTo: String
});

var TodoItem = mongoose.model('TodoItem', TodoItemSchema);

module.exports = TodoItem;