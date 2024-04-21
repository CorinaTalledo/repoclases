import React from 'react'

function Card({nombre, apellido, edad, ciudad}) {
  return (
    <>
        <h1>{nombre} {apellido}</h1>
        <h1>{edad}</h1>
        <h1>{ciudad}</h1>
    </>
  )
}

export default Card