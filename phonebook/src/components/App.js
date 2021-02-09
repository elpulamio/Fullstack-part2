import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', 
      id: 1,
      number: '050 1234-567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNoteChangeName} /><br />
          number: <input value={newNumber} onChange={handleNoteChangeNr} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => 
          <Person key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App