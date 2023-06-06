import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

function QuizCard(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  let selectQuiz = function () {
    return dispatch => {
      axios.get("http://localhost:8080/quiz/" + props.quiz.id)
          .then(result => {
            dispatch({type: "CLEAR_QUIZ"});
            dispatch({type: "SET_QUIZ", payload: result.data});
            dispatch({type: 'SET_STEP', payload: 1});
            navigate('/quiz');
          })
          .catch(error => {
            toast.error(error.message);
          });
    };
  }

  return <Card style={{width: '18rem'}} className={"shadow"}>
    <Card.Img variant="top" src={props.quiz.img} className={"shadow"}/>
    <Card.Body>
      <Card.Title>{props.quiz.title}</Card.Title>
      <Card.Text>
        {props.quiz.description}
      </Card.Text>
      <Button variant="primary" onClick={() => dispatch(selectQuiz())}>Take the quiz!</Button>
    </Card.Body>
  </Card>
}

export default QuizCard;