import {useEffect,useState} from 'react'
const useValidation = (value,validateFn) =>{

    const [error,setError] = useState('')

    useEffect(()=>{
        setError(validateFn(value))
    },[value,validateFn])

    return error
}

export default useValidation;