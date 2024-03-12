import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { crearTareaAPI, obtenerTareaAPI } from "../helpers/queries";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerTareas();
  }, []);

  const onSubmit = async (tareaNueva) => {
    const respuesta = await crearTareaAPI(tareaNueva);
    if (respuesta.status === 201) {
      alert("producto creado con exito");
      reset();
    } else {
      alert("no se pudo crear el producto");
    }
  };

  const obtenerTareas = async () => {
    const respuesta = await obtenerTareaAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setTareas(datos);
    } else {
      alert("ocurrio un error");
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
      <ListaTareas listaTareas={tareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
