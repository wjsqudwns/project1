import {createStore} from 'redux'
import TodoReducer from './Todo.reucer'
export const store = createStore(TodoReducer)