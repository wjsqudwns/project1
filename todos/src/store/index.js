import {createStore} from 'redux'
import TodoReducer from './Todo.reducer'
export const store = createStore(TodoReducer)

