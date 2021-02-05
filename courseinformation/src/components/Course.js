import React from 'react';

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

export default Course