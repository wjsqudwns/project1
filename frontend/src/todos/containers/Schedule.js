import React from 'react'
import {TodosInput, TodoList} from 'components'
import {Provider} from 'react-redux'
import {store} from './store/Todo.reducer' 


const Schedule = () =>{
    return(
        <>
        <Provider store = {store}>
            <TodosInput>
            </TodosInput>
            <TodoList>
            </TodoList>

        </Provider>
        
        </>

    )
}

export default Schedule