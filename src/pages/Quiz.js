import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import Question from "../components/Question";
import {useNavigate} from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  let quiz = useSelector(gs => gs.quiz);
  let dispatch = useDispatch();

  let onSubmit = () => {
    dispatch({type: 'SET_STEP', payload: 2})
    navigate('/review');
  };
  let onClear = () => {
  };
  let onCancel = () => {
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
        <Button className="mx-2" variant="primary" onClick={onSubmit}>Submit</Button>
        <Button className="mx-2" variant="secondary" onClick={onClear}>Clear</Button>
        <Button className="mx-2" variant="danger" onClick={onCancel}>Cancel</Button>
      </Col>
    </Row>
  </Container>
}

export default Quiz;

