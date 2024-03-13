import { Button, ListGroup } from "react-bootstrap";
import {
  borrarTareaAPI,
  editarTareaAPI,
  obtenerTareaAPI,
  obtenerTareaPorIdAPI,
} from "../helpers/queries";
import Swal from "sweetalert2";

const ItemTarea = ({ tarea, setListaTareas, setEditar, setId, setValue, setTextoBoton }) => {
  const editarTarea = async () => {
    Swal.fire({
      title: "Estás seguro que deseas editar está tarea?",
      text: "Editaras el contenido de la tarea",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Editar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setEditar(true);
        setId(tarea.id);
      setTextoBoton("Editar");
        setValue("descripcion", tarea.descripcion);
      }
    });
  };

  const borrarTarea = async (id) => {
    Swal.fire({
      title: "Estás seguro que deseas eliminar esta tarea?",
      text: "No podrás revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(tarea.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Tarea eliminada!",
            text: "La tarea se elimino con éxito",
            icon: "success",
          });
          const respuestaTareas = await obtenerTareaAPI();
          if (respuestaTareas.status === 200) {
            const tareasRestantes = await respuestaTareas.json();
            setListaTareas(tareasRestantes);
          }
        }
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {tarea.descripcion}
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Button
          variant="warning"
          className="mx-md-1 mb-2 mb-md-0"
          onClick={() => editarTarea(tarea, tarea.id)}
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
