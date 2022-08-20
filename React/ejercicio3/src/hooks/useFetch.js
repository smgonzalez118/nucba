import React, { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        fetch(url)
        .then((response) => response.json())
        .then((datas) => {
            setData(datas)
            setError(null)
            setLoading(false)
            console.log(datas)
        })
        .catch( () => {
            setError(true)
            setLoading(false)
        }
        )
    }
    )

    return (
    {
        data,
        error,
        loading
    })
}

export default useFetch