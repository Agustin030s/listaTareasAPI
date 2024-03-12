import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTareas }) => {
  return (
    <ListGroup>
      {listaTareas.map(tarea => <ItemTarea key={tarea.id} tarea={tarea}></ItemTarea>)}
    </ListGroup>
  );
};

export default ListaTareas;
