import { useState } from 'react';
import { nanoid } from 'nanoid';
import Todo from './components/Todo';

const initialState = [
    { id: "0", desc: "leer pdf1"},
    { id: "1", desc: "leer pdf2"},
    { id: "2", desc: "leer pdf3"}
]

const App = () => {

    const [todos, setTodos] = useState(initialState)
    const [todo, setTodo] = useState("")
    const [edit, setEdit] = useState(null)

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([{ id: nanoid(3), desc: todo}, ...todos])
        setTodo("")
    }

    const deleteTodo = (id) => {
        //filtrar los ToDo's y por cada todo me va a devolver siempre y cuando todo.id sea distinto del que se está pasando
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setEdit(todos.filter(todo => todo.id === id)[0])
    }

    const handleOnChangeEdit = () => {
        setEdit({ ...edit, desc: edit.desc })
    }

    return (
        <main>
            {!edit ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={todo} onChange={handleChange}/>
                </form>) : (
                <form>
                    <input type="text" value={edit.desc} onChange={handleOnChangeEdit}/>
                </form>
            )}
            <section>
                {todos.length > 0 ?
                    (todos.map(({ id, desc }) =>
                        <Todo
                            key={id}
                            id={id}
                            todo={desc}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}/>))
                    :   <h3>Sin tareas</h3>
                }
            </section>
        </main>
    )
}

export default App
