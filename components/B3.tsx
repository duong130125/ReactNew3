import React, {useState} from 'react'

export default function B3() {
    const [dateValue, setDateValue] = useState<string>('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {

      setDateValue(event.target.value);
    };
  return (
    <>
    <h2>Thời Gian: {dateValue}</h2>
    <input
        type="date"
        value={dateValue}
        onChange={handleDateChange}
      />
    </>
  )
}
