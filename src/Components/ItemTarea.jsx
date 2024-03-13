import { Button, ListGroup } from "react-bootstrap";
import { borrarTareaAPI, obtenerTareaAPI, obtenerTareaPorIdAPI } from "../helpers/queries";

const ItemTarea = ({ tarea, setListaTareas}) => {

  const obtenerTareaId = async (id) =>{
    const respuesta = await obtenerTareaPorIdAPI(id);
    console.log(await respuesta.json());
  }

  const borrarTarea = async (id) =>{
    const respuesta = await borrarTareaAPI(tarea.id);
    console.log(respuesta);
    if(respuesta.status === 200){
      alert('producto eliminado');
      const respuestaTareas = await obtenerTareaAPI();
      if(respuestaTareas.status === 200){
        const tareasRestantes = await respuestaTareas.json();
        setListaTareas(tareasRestantes);
      }
    }
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {tarea.descripcion}
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Button
          variant="warning"
          className="mx-md-1 mb-2 mb-md-0"
          onClick={() => obtenerTareaId(tarea.id)}
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button
          variant="danger"
          className="mx-md-1"
          onClick={() => borrarTarea(tarea.id)}
        >
          <i className="bi bi-trash3-fill"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
