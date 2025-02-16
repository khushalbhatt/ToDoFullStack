const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Khushalbhatt:Khushal%40123@cluster0.ytwue.mongodb.net/todoapp');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};
 
