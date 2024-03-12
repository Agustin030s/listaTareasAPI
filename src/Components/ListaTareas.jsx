import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTareas, borrarTarea }) => {
  return (
    <ListGroup>
      <ItemTarea></ItemTarea>
      <ItemTarea></ItemTarea>
    </ListGroup>
  );
};

export default ListaTareas;
