import React, { useState } from 'react'
import Person from './Person'
import Filter from './Filter'
import PersonForm from './PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', 
      id: 1,
      number: '050 1234-567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState(false)
  const [ nameFilter, setNewFilter ] = useState('')

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
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNoteChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleNoteChangeNr = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNoteChangeFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={nameFilter} filterOnChange={handleNoteChangeFilter} />
      <h2>add a new</h2>
      <PersonForm filterOnSubmit={addPerson} filterValue={newName} filterOnChange={handleNoteChangeName} filterValue2={newNumber} filterOnChange2={handleNoteChangeNr} />
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