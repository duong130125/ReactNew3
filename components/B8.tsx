import React, {useState} from 'react'

export default function B8() {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
      setCount(count + 1); 
    };
  return (
    <>
    <button onClick={incrementCount}>Click {count} lần</button>
    </>
  )
}
