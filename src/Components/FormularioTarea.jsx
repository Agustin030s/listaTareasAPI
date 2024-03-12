import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { crearTareaAPI } from "../helpers/queries";
import { useState } from "react";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (tareaNueva) => {
    const respuesta = await crearTareaAPI(tareaNueva);
    if(respuesta.status === 201){
      alert("producto creado con exito");
      reset();
    }else{
      alert("no se pudo crear el producto");
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <Form.Group className="d-flex" controlId="inputTarea">
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            className="me-2"
            {...register("descripcion", {
              required: "Debe ingresar una tarea",
              minLength: {
                value: 4,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 700,
                message: "Debe ingresar como máximo 700 caracteres",
              },
            })}
            // onChange={(e) => setTarea(e.target.value)}
            // value={tarea}
          />
          <Button type="submit">Agregar</Button>
        </Form.Group>
        <Form.Text className="text-danger">
          {errors.descripcion?.message}
        </Form.Text>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
