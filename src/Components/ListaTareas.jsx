import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({
  listaTareas,
  setListaTareas,
  setEditar,
  setId,
  setValue,
  setTextoBoton,
}) => {
  return (
    <ListGroup>
      {listaTareas.map((tarea) => (
        <ItemTarea
          key={tarea._id}
          tarea={tarea}
          setListaTareas={setListaTareas}
          setEditar={setEditar}
          setId={setId}
          setTextoBoton={setTextoBoton}
          setValue={setValue}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
