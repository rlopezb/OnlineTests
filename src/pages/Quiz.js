import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import Question from "../components/Question";
import {Navigate, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function Quiz() {
  const navigate = useNavigate();
  let quiz = useSelector(gs => gs.quiz);
  let selections = useSelector(gs => gs.selections);
  let dispatch = useDispatch();

  if (Object.keys(quiz).length === 0 && quiz.constructor === Object) {
    toast.error("No quiz selected");
    dispatch({type: 'SET_STEP', payload: 0});
    return <Navigate to="/home"/>;
  }


  let onNext = () => {
    dispatch({type: 'SET_STEP', payload: 2})
    navigate('/review');
  };
  let onClear = () => {
    dispatch({type: "CLEAR_SELECTIONS"});
    dispatch({type: 'SET_STEP', payload: 1})
  };
  let onBack = () => {
    dispatch({type: 'SET_STEP', payload: 0})
    navigate('/home');
  };
  return <Container>
    <Row>
      <Col className={"col-md-auto"}>
        <img src={quiz.img} alt="" className={"quiz-banner-img"}/>
      </Col>
      <Col className={"my-auto"}>
        <h6>{quiz.title}</h6>
        <p>{quiz.description}</p>
      </Col>
    </Row>
    {quiz.question.map(q => {
      return <Row key={q.id}><Question question={q}/></Row>;
    })}
    <Row className="my-3">
      <Col>
        <Button className="mx-2" variant="primary" onClick={onNext}
                disabled={selections.length !== quiz.question.length}>Next</Button>
        <Button className="mx-2" variant="secondary" onClick={onClear}>Clear</Button>
        <Button className="mx-2" variant="danger" onClick={onBack}>Back</Button>
      </Col>
    </Row>
  </Container>;
}

export default Quiz;

