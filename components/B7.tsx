import React, {useState} from 'react'

export default function B7() {
    const [numbers, setNumbers] = useState<number[]>([]);

    const addPositiveInteger = () => {

        const newNumber = Math.ceil(Math.random() * 100);
        const newnumberObject = { id: Date.now(), value: newNumber};
        setNumbers(numberArray => [...numberArray, newnumberObject]);
    };
    const displayIntegerArray = () => {
        return "[" + numbers.map(integerObject => integerObject.value).join(", ") + "]";
      };
  return (
    <>
    <h3>Mảng số: {displayIntegerArray()}</h3>
    <button onClick={addPositiveInteger}>Add element</button>
    </>
  )
}
