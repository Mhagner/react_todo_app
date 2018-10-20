import { combineReducers }  from 'redux'
import todoReducer from '../todo/reducerTodo'

const rootReducer = combineReducers({
    todo: todoReducer   
})

export default rootReducer