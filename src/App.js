import './style/App.css';
import AppNavBar from "./components/AppNavBar";
import AppRouter from "./router/AppRoutes";
import {Container} from "react-bootstrap";

function App() {
  return (
      <Container>
        <AppNavBar/>
        <AppRouter/>
      </Container>
  );
}

export default App;
