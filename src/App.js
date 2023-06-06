import './style/App.css';
import 'react-toastify/dist/ReactToastify.css';

import AppNavBar from "./components/AppNavBar";
import AppRouter from "./router/AppRoutes";
import {Container} from "react-bootstrap";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <Container>
        <ToastContainer/>
        <AppNavBar/>
        <AppRouter/>
      </Container>
  );
}

export default App;
