import usernameReducer from './usernameReducer'
import emailReducer from './emailReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    username: usernameReducer,
    email: emailReducer,
});

export default rootReducer;