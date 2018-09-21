const restful = require('node-restful')
const mongoose = restful.mongoose

const Schema = new mongoose.Schema({
    description:    {type: String, require: true},
    done:           {type: Boolean, require: true, default: false},
    createdAt:      {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', Schema)