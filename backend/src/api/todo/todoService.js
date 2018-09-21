const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

//Aplica as validações na atualização e já retorna o valor atualizado
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo

