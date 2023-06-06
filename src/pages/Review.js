import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";

function Review() {
  let quiz = useSelector(gs => gs.quiz);
  let selections = useSelector(gs => gs.selections);
  const navigate = useNavigate();
  let getAnswers = function () {
    return dispatch => {
      axios.get("http://localhost:8080/answer/" + quiz.id)
          .then(result => {
            dispatch({type: "SET_ANSWERS", payload: result.data});
            navigate('/results');
          })
          .catch(error => {
            console.log(error);
          });
    };
  }
  let onCheck = () => {
  };
  let onBack = () => {
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
      let questionId = q.id;
      let question = q.question;
      let options = q.option;
      let selection = selections.find(s => s.questionId === questionId);
      let selectionId = selection.selectionId;
      let selected = options.find(o=>o.id === selectionId);
      return <Row key={q.id}>
        <h6 className="mt-4">{questionId + ".- " + question}</h6>
        <p>Selected answer: {selected.id}.- {selected.option}</p>
      </Row>;
    })}
    <Row className="my-3">
      <Col>
        <Button className="mx-2" variant="primary" onClick={onCheck}>Check</Button>
        <Button className="mx-2" variant="secondary" onClick={onBack}>Back</Button>
      </Col>
    </Row>
  </Container>
}

export default Review;