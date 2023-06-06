import {useDispatch, useSelector} from "react-redux";
import QuizCard from "../components/QuizCard";
import {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";

function Home() {
  let quizzes = useSelector(gs => gs.quizzes);
  let dispatch = useDispatch();
  let getQuizzes = function () {
    return dispatch => {
      axios.get("http://localhost:8080/list")
          .then(result => {
            dispatch({type: "SET_QUIZZES", payload: result.data});
          })
          .catch(error => {
            console.log(error);
          });
    };
  }
  useEffect(()=>dispatch(getQuizzes()), [dispatch]);

  return (
      <div>
        <Container>
          <Row className={"gy-5"}>
            {quizzes.map(q => <Col key={q.id}><QuizCard quiz={q}/></Col>)}
          </Row>
        </Container>
      </div>);
}

export default Home;