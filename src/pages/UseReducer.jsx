import React from 'react';
import { useReducer } from 'react';
function UseReducer() {
  const intitalState = {
    count: 0,
  };

  const increment = () => {
    return { type: 'increment' };
  };
  // reducer function
  const counterReducer = (state, action) => {
    if (action.type === 'increment') {
      return { ...state, count: state.count + 1 };
    }
  };
  const [state, dispatch] = useReducer(counterReducer, intitalState);
  console.log(state);
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button>decrement</button>
    </div>
  );
}

export default UseReducer;


// addTocart ={
//     carItems 
// }
// auth => {    product => {
//     product , laoding , eroror
// }
//     token 
//     role ,
//     id
// }
// product.loading , auth .toke
// => {
//     product : {
//         proudct, 
//         laoding ,
//         error
//     },
//     auth : {
//         token , role , id
//     } ,
//     addToCart : {
//         cartItem : {}
//     }
