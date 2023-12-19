import { Button, Form } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="inputTarea">
          <Form.Control type="text" placeholder="Ej: Tarea 1" className='me-2'/>
          <Button type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTarea;
