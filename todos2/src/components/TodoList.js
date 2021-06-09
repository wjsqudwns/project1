import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction, toggleTodoAction } from '../store/Todo.reducer'

const TodoList = () =>{
    const Todos = useSelector(state => state.Todos)
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))

    return(
        <>
        {Todos.lenght === 0 && (<p className = 'alert alert-info '>등록된 할일이 없습니다.</p>)}
            {Todos.lenght !== 0 && 
            Todos.map(Todo => (<div key = {Todo.id} className = "row mb-1">
            <div className = "col-sm-2"> 
            <input type ="checkbox" checked={Todo.complete} onChange={toggleTodo.bind(null, Todo.id)}></input>
            {Todo.complete 
            ? <span style = {{textDecoration: "line-through"}}>{Todo.name}</span>
            : <span>{Todo.name}</span>
            }
            <button onClick = {deleteTodo.bind(null, Todo.id)}>x</button>
            
                </div>
            </div>))}
        
        
        
        </>
    )
}
export default TodoList