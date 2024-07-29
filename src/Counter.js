// src/Counter.js
import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, set, onValue } from "firebase/database";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countRef = ref(database, "count");
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setCount(data);
      }
    });
  }, []);

  const incrementCount = () => {
    set(ref(database, "count"), count + 1);
  };

  const decrementCount = () => {
    set(ref(database, "count"), count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;
