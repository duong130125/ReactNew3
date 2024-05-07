import React from 'react'

export default function B1() {
    const renderClick = ()=> {
        console.log("Clicked");
    }
  return (
    <>
    <button onClick={renderClick}>Click me</button>
    </>
  )
}
