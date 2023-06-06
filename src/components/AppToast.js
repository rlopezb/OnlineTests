import {Toast} from "react-bootstrap";
import {useState} from "react";

function AppToast(props) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  return <Toast show={show} onClose={toggleShow} delay={3000} autohide>
    <Toast.Header>
      <strong className="me-auto">{props.toast.title}</strong>
    </Toast.Header>
    <Toast.Body>{props.toast.message}</Toast.Body>
  </Toast>;
}

export default AppToast;