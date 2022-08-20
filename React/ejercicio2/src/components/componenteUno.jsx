import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const ComponenteUno = (props) => {

    const [stateYear, setStateYear] = useState(props.currentYear)

    const handleNext = () => {
        setStateYear(stateYear + 1)
    }

    const handlePrev = () => {
        setStateYear(stateYear - 1)
    }

    const configYear = (e) => {
        let entry = parseInt(e.target.value)
        setStateYear(entry)
    }


    return (
        <>
            <span>El año es: {stateYear}</span>
            <button onClick={handleNext}> Pasar al siguiente año </button>
            <button onClick={handlePrev}> Ir al año anterior </button>
            <input type="number" name="enter" id="enter" onChange={configYear} />
        </>
  )
}

ComponenteUno.propTypes = {
    currentYear: PropTypes.number.isRequired
}


export default ComponenteUno