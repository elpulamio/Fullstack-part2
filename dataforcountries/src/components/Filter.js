import React, { useState } from 'react'

const Filter = ({ filterValue, filterOnChange }) => {
    return (
      <>Find countries: <input value={filterValue} onChange={filterOnChange} /><br /></>
    )
}

export default Filter