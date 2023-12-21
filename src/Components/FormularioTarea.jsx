import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  // [nombre del state, funcion que cambiara en state] = useState(valor inicial);
  //Este estado es para el input, cada input debe tener un state.
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar el state tarea en arrayTareas
    // ... -> operador spread
    //[...listaTareas, tarea] realiza una copia del array original y luego al final me agrega la tarea
    setListaTareas([...listaTareas, tarea]);
    //limpiar el formulario
    setTarea('');
  };

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
      <ListaTareas listaTareas={listaTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
