import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from 'react-redux'
import {addTodoAction} from '../store/Todo.reducer'

const TodoInput = () =>{
    const [Todo, setTodo] = useState('')
    const submitform = e =>{
        e.prevebtDefault()
        console.log(`{uuidv4 : ${uuidv4()}}`)
        const newTodo = {
            id: uuidv4(),
            name: Todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo('')
    }
    const dispatch = useDispatch()
    const addTodo = Todo => dispatch(addTodoAction(Todo))
    const handleChange = e =>{
        e.prevebtDefault()
        setTodo(e.target.value)
    }

    return(
        <>
        <h1>정신나갈거같아</h1>
        <form onSubmit = {submitform} method = "POST">
            <div className = "row mt-3">
                <div className = "form=group col-sm-8">
                    <input
                        type = "text"
                        placeholder = "할일 입력"
                        name = "todo"
                        className = "form control"
                        value = {Todo}
                        onChange = {handleChange}
                    />
                </div>
            </div>
        </form>
        
        </>

    )
}

export default TodoInput