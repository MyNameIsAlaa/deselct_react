import {combineReducers} from 'redux'
import usersReducer from './users'
import countriesReducer  from './country'


export default combineReducers({
    usersReducer,
    countriesReducer
});