const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://root:#M12345@ds131902.mlab.com:31902/todo')

