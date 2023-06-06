import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function Question(props) {
  let dispatch = useDispatch();
  let selections = useSelector(gs => gs.selections);
  let [selection, setSelection] = useState({});

  useEffect(()=>{
    let initialSelection = selections.find(s => s.questionId === props.question.id);
    if (initialSelection) {
      setSelection(initialSelection.selectionId);
    }else{
      setSelection({});
    }
  }, [props.question.id, selections]);


  const handleSelection = (event) => {
    setSelection(+event.target.value);
    dispatch({type: "SET_SELECTION", payload: {questionId: props.question.id, selectionId: +event.target.value}});
  }

  return <div>
    <h6 className="mt-4">{props.question.id + ".- " + props.question.question}</h6>
    <div className="mx-4">
      {props.question.option.map(o => (
          <Form.Check value={o.id} key={o.id} label={o.option} name={props.question.id} type="radio" id={o.id}
                      onChange={(event) => handleSelection(event)}
                      checked={selection === o.id}/>
      ))}
    </div>
  </div>;
}

export default Question;