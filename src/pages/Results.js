import {Button, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Check from "../components/Check";
import {useNavigate} from "react-router-dom";

function Results() {
  let quiz = useSelector(gs => gs.quiz);
  let selections = useSelector(gs => gs.selections);
  let answers = useSelector(gs => gs.answers);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  let onFinish = () => {
    dispatch({type: 'SET_STEP', payload: 0})
    dispatch({type: "CLEAR_QUIZ"});
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
      let selection = selections.find(s => s.questionId === q.id);
      let answer = answers.question.find(a => a.id === q.id);
      return <Row key={q.id}><Check question={q} selection={selection} answer={answer}/></Row>;
    })}
    <Row className="my-3">
      <Col>
        <Button className="mx-2" variant="primary" onClick={onFinish}>Finish</Button>
      </Col>
    </Row>
  </Container>;
}

export default Results;