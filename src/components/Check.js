import {Alert} from "react-bootstrap";

function Check(props) {
  return <div>
    <h6 className="mt-4">{props.question.id + ".- " + props.question.question}</h6>
    <div className="mx-4">
      {props.question.option.map(o => {
        if (props.selection.selectionId === props.answer.correctAnswer && o.id === props.selection.selectionId) {
          return <Alert key={o.id} className="m-0 py-0" variant="success">{o.option}</Alert>;
        } else if (o.id === props.selection.selectionId) {
          return <Alert key={o.id} className="m-0 py-0" variant="danger">{o.option}</Alert>;
        } else {
          return <Alert key={o.id} className="m-0 py-0 border-0 bg-white" variant="light">{o.option}</Alert>;
        }
      })}
    </div>
  </div>;
}

export default Check;