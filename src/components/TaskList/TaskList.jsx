import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

function TaskList({ tasks, deleteTask, onComplete }) {
  return (
    <>
      {tasks.length === 0 ? (
        <div className='empty'>No hay tareas</div>
      ) : (
        <div className='taskList'>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              onComplete={onComplete}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default TaskList