// this is a react hook. 
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // useState returns two things, count: the current value for the state variable and setCount: a setter function so we can update the state variable
                          //  we use useState hook and call it inside of our component 
   function increment() {
       setCount((currentCount) => currentCount + 1);
       setCount((currentCount) => currentCount + 1);
    }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
// As a rule of thumb, any time you need to set state based on the current value of state, you should use the callback syntax.
// state is only for values that are expected to change during the components life.


// Whenever we need dynamic data in our applications (values that change over time), we should use state. We create our initial state by calling the useState hook inside of our components.
// To update state, we must use the setState function returned by useState, so that changes to state cause our components to re-rende