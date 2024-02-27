import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  // [nombre del state, funcion que cambiara en state] = useState(valor inicial);
  //Este estado es para el input, cada input debe tener un state.
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalStorage);

  //Para ciclo de vida de un componente, para montaje y actualización
  useEffect(() => {
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
  }, [listaTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar el state tarea en arrayTareas
    // ... -> operador spread
    //[...listaTareas, tarea] realiza una copia del array original y luego al final me agrega la tarea
    setListaTareas([...listaTareas, tarea]);
    //limpiar el formulario
    setTarea('');
  };

  const borrarTarea = (nombreTarea) =>{
    const arregloFiltrado = listaTareas.filter((tarea) => tarea !== nombreTarea);
    setListaTareas(arregloFiltrado);
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="inputTarea">
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            className="me-2"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button type="submit">Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas listaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
