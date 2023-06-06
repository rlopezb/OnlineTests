import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";

let initialState = {
  step: 0,
  quizzes: [],
  quiz: {},
  selections: [],
  answers: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_QUIZZES':
      return {...state, quizzes: action.payload};
    case 'SET_QUIZ':
      let quiz = state.quizzes.find(q => q.id === action.payload.id);
      quiz.question = action.payload.question;
      return {...state, quiz: quiz};
    case 'SET_SELECTION':
      let index = state.selections.findIndex(s => s.questionId === action.payload.questionId);
      if (index >= 0) {
        const newSelections = state.selections.map((selection) => {
          if (action.payload.questionId === selection.questionId) {
            return action.payload;
          } else {
            return selection;
          }
        });
        return {...state, selections: newSelections};
      } else {
        const newSelections = [...state.selections, action.payload];
        return {...state, selections: newSelections};
      }
    case 'SET_SELECTIONS':
      return {...state, selections: action.payload};
    case 'SET_ANSWERS':
      return {...state, answers: action.payload};
    case 'SET_STEP':
      return {...state, step: action.payload};
    default:
      return state;
  }
}

let store = createStore(reducer, applyMiddleware(thunk));

export default store;