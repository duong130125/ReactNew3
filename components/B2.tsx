import React, {useState} from 'react'

export default function B2() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
    <h2>Dữ liệu người dùng nhập: {inputValue}</h2>
    <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập dữ liệu text..."
      />
    </>
  )
}
