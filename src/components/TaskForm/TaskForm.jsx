import { useState } from 'react'
import './TaskForm.css'

function TaskForm({ createTask }) {
    const [title, setTitle] = useState('')
    const completed = false

    // Esta funcion se encarga de actualizar el estado de title
    // Recibe como parametro el evento del input
    // y actualiza el estado de title
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    // Esta funcion se encarga de crear una nueva tarea
    // Recibe como parametro el evento del formulario
    // y llama a la funcion createTask del componente padre
    // con un objeto con la siguiente forma:
    // {title: string, completed: boolean}
    // y limpia el estado de title
    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '') {
            alert('Escribir una tarea')
            return
        } else {
            createTask({ title, completed })
            setTitle('')
        }
    }

    return (
        <form className='taskForm' onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Escribir nueva tarea"
                value={title}
                onChange={handleChange}
            />
            <button type="submit">Añadir</button>
        </form>
    )
}

export default TaskForm