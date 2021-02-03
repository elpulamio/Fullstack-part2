import React from 'react';
import ReactDOM from 'react-dom';


const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce(function(sum, part) {
    return sum + part.exercises
  }, 0)
  return <p>Number of exercises {total}</p>
}

const Part = (props) => {
  return (
    <>
      {props.part}
    </> 
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Addition',
        exercises: 4,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))