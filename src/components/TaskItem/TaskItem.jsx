import './TaskItem.css'
function TaskItem({ task, deleteTask, onComplete }) {
    return (
        <div className='task'>
            <input className='checkboxItem'
                type="checkbox"
                checked={task.completed}
                onChange={() => onComplete(task.id)} />
            <p className={task.completed ? 'complete' : 'titleTask'}>{task.title}</p>
            <button className='buttonDelete' onClick={() => deleteTask(task.id)}>x</button>
        </div>
    )
}

export default TaskItem