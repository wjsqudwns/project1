const initialstate = {Todos: [], Todo:{}}
export const addTodoAction = Todo =>(
    {type: "ADD_TODO", payload: Todo}
)

export const toggleTodoAction = todoId =>(
    {type: "TOGLE_TODO", payload: todoId}
)
export const deleteTodoAction = todoId =>(
    {type: "DELETE_TODO", payload: todoId}
)
const TodoReducer = (state = initialstate, action) =>{
    switch(action.type){
        case "ADD_TODO" : return {...state, Todos: [action.payload]}
        case "TOGLE_TODO" : return {...state, Todos: state.Todos.map(Todo => (Todo.id === action.payload) ? {...Todo,complete: !Todo.complete} : Todo)}
        case "DELETE_TODO" : return {...state, Todos: state.Todos.filter(Todo.id !== action.payload)}
        default: return state

    }
}

export default TodoReducer