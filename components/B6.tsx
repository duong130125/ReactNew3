import React, {useState} from 'react'

export default function B6() {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleVisibility = () => {
      setIsVisible(!isVisible); 
    };
  return (
    <>
    <h2>Hiện/Ẩn nâng cao:</h2>
    <button onClick={toggleVisibility}>
        {isVisible ? 'Hiển' : 'Ẩn'}
      </button>
    </>
  )
}
