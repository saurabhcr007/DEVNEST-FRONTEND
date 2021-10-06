import TodoReducer from './TodoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todos: TodoReducer,
});

export default rootReducer;