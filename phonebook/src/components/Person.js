import React, { useState } from 'react'

const Person = ({ person }) => {
  console.log(person)
  return (
    <>{person.name} {person.number}<br /></>
  )
}

export default Person