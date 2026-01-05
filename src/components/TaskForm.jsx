import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <InputGroup>
        <Form.Control
          placeholder="Enter a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='no-shadow'
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
}

export default TaskForm;
