import {useRef} from 'react'
import uniqid from 'uniqid'

const useUniqIds =  count =>{
    const id = useRef([...new Array(count)].map(()=> uniqid()))
    return id.current
}

export default useUniqIds