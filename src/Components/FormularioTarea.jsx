import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  // [nombre del state, funcion que cambiara en state] = useState(valor inicial);
  //Este estado es para el input, cada input debe tener un state.
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  return (
    <section>
      <Form>
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
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
