import { ButtonGroup, Button } from 'react-bootstrap';

function FilterButtons({ setFilter }) {
  return (
    <ButtonGroup className="mb-3 w-100 d-flex gap-2">
      <Button variant="outline-secondary" onClick={() => setFilter('all')}>
        All
      </Button>
      <Button variant="outline-secondary" onClick={() => setFilter('completed')}>
        Completed
      </Button>
      <Button variant="outline-secondary" onClick={() => setFilter('pending')}>
        Pending
      </Button>
    </ButtonGroup>
  );
}

export default FilterButtons;
