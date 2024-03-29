import Swal from "sweetalert2";

const URI_TAREA = import.meta.env.VITE_API_TAREA;

export const obtenerTareaAPI = async () => {
  try {
    const respuesta = await fetch(URI_TAREA);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const obtenerTareaPorIdAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_TAREA}/${id}`);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const crearTareaAPI = async (tareaNueva) => {
  try {
    const respuesta = await fetch(URI_TAREA, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaNueva),
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const editarTareaAPI = async (tarea, id) => {
  try {
    const respuesta = await fetch(`${URI_TAREA}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const borrarTareaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_TAREA}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};
