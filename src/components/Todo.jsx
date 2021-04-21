
const Todo = ({ id, todo, deleteTodo, editTodo }) => {
    return (
        <p>{id} - {todo}
            <button onClick={() => deleteTodo(id)}>X</button>
            <button onClick={() => editTodo(id)}>edit</button>
        </p>
    )
}

export default Todo
