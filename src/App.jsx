import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center text-light display-3">Lista de Tareas</h1>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
