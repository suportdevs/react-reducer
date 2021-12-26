import { useReducer } from 'react';
import './App.css';
import StudentManagement from './components/StudentManagement/StudentManagement';
import ShopManagement from './components/ShopManagement/ShopManagement';

const initialState = {count: 0};

const reducer = (state, action) => {
  console.log(state, action);
  switch(action.type){
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>This is Reducer Count: {state.count}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Increment</button>
      <StudentManagement></StudentManagement>
      <ShopManagement></ShopManagement>
    </div>
  );
}

export default App;
