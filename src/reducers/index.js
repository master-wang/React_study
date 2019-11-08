import { combineReducers } from 'redux'
import { countReducter } from './count_reducer'
import { postRecuter } from './post_reducer'
export const combinState = combineReducers({
    countReducter,
    postRecuter
})