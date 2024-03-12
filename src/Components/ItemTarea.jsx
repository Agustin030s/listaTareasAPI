import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {tarea}
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Button
          variant="warning"
          className="mx-md-1 mb-2 mb-md-0"
          onClick={() => borrarTarea(tarea)}
        >
          <i class="bi bi-pencil-square"></i>
        </Button>
        <Button
          variant="danger"
          className="mx-md-1"
          onClick={() => borrarTarea(tarea)}
        >
          <i class="bi bi-trash3-fill"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
