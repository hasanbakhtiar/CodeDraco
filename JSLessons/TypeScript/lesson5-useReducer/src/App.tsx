import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'increment'|'decrement';
  payload: number;
};

type ResetAction = {
  type:'reset'
}
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return {count:state.count + action.payload}
      case "decrement":
        return {count:state.count - action.payload}
      case 'reset':
        return initialState;
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>
        Counter :<span>{state.count}</span>
      </h1>
      <p>Basic type-scrript project with react</p>
      <button onClick={()=>{dispatch({type:'decrement',payload:50})}}>-1</button>
      <button onClick={()=>{dispatch({type:'increment',payload:10})}}>+1</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
    </div>
  );
};

export default App;
