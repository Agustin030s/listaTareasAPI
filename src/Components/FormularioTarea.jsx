import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import {
  crearTareaAPI,
  obtenerTareaAPI,
  editarTareaAPI,
} from "../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FormularioTarea = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState("");
  const [textoBoton, setTextoBoton] = useState("Agregar");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerTareas();
  }, [listaTareas]);

  const onSubmit = async (tareaNueva) => {
    if (editar) {
      const respuesta = await editarTareaAPI(tareaNueva, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Tarea modificada con éxito",
          text: "La tarea se modifico",
          icon: "success",
        });
        setEditar(false);
        setId("");
        setTextoBoton("Agregar");
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La tarea no pudo ser modificada, intentelo nuevamente dentro de unos minutos`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearTareaAPI(tareaNueva);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Tarea creada",
          text: `La tarea fue creada correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La tarea no pudo ser creada, intentelo nuevamente dentro de unos minutos`,
          icon: "error",
        });
      }
    }
  };

  const obtenerTareas = async () => {
    const respuesta = await obtenerTareaAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaTareas(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error",
      });
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
          />
          <Button type="submit">{textoBoton}</Button>
        </Form.Group>
        <Form.Text className="text-danger">
          {errors.descripcion?.message}
        </Form.Text>
      </Form>
      <ListaTareas
        listaTareas={listaTareas}
        setListaTareas={setListaTareas}
        setEditar={setEditar}
        setId={setId}
        setTextoBoton={setTextoBoton}
        setValue={setValue}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
