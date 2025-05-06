import { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStylesFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLES = "CHANGE_TEXT_STYLES";

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      return { ...state, showTextFlag: false };
    case SHOW_TEXT:
      return { ...state, showTextFlag: true };
    case CHANGE_TEXT_STYLES:
      return { ...state, changeTextStylesFlag: !state.changeTextStylesFlag };

    default:
      break;
  }
}
export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      {state?.showTextFlag ? (
        <h3
          style={{
            backgroundColor: state.changeTextStylesFlag ? "black" : "red",
          }}
        >
          Use Reducer Hook Example
        </h3>
      ) : null}

      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLES })}>
        Toggle Text Sytles
      </button>
    </div>
  );
}
