import React, {useState} from 'react'

export default function B5() {
    const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <>
    <h2>Hiện/Ẩn:</h2>
    <button>
        {isVisible ? 'Hiện':'Ẩn'}
      </button>
    </>
  )
}
