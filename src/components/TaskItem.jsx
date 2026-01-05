import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center mb-2 rounded">
      <span
        className={task.completed ? 'completed' : ''}
      >
        {task.title}
      </span>

      <ButtonGroup>
        <Button
          size="sm"
          variant={task.completed ? 'warning' : 'success'}
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button
          size="sm"
          variant="danger"
          onClick={() => {
            let confirm = window.confirm('Are you sure you want to delete this task?');
            if (confirm) deleteTask(task.id);
          }}
        >
          Delete
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
}

export default TaskItem;
