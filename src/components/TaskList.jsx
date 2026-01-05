import { ListGroup } from 'react-bootstrap';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ListGroup>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ListGroup>
  );
}

export default TaskList;
