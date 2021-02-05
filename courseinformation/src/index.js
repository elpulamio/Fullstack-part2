import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
  return(
    <>
    {course.map(item => 
      <div key={item.id}> <Header course={item.name} /> 
        {item.parts.map(sub => 
        <p key={sub.id}> <Content parts={sub} /> </p> )}
        <Total parts={item} /> 
      </div>)}
    </>
  )
}

const Header = ({ course }) => {
  return (
    <h2>{course}</h2>
  )
}

const Total = ({ parts }) => {
  const total = parts.parts.reduce(function(sum, part) {
    return sum + part.exercises
  }, 0)
  return <strong>Total of {total} exercises</strong>
}

const Part = (props) => {
  return (
    <>{props.part.name} {props.part.exercises}</> 
  )
}

const Content = ({ parts }) => <Part part={parts} />

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={courses}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))