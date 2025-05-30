const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;