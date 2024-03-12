import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = () => {
    console.log("desde el onsubmit");
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
