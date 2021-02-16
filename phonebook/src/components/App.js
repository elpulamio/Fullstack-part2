import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './Person'
import Filter from './Filter'
import PersonForm from './PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState(false)
  const [ nameFilter, setNewFilter ] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  const namesToShow = showAll
    ? persons
    : persons.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()))
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }
  
    if (persons.map(item => item.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handlePersonChangeNr = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePersonChangeFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={nameFilter} filterOnChange={handlePersonChangeFilter} />
      <h2>add a new</h2>
      <PersonForm filterOnSubmit={addPerson} filterValue={newName} filterOnChange={handlePersonChangeName} filterValue2={newNumber} filterOnChange2={handlePersonChangeNr} />
      <h2>Numbers</h2>
      <div>
        {namesToShow.map(person => 
          <Person key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App