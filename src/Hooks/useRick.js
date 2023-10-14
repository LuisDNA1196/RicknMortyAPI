import {useState, useEffect} from 'react'

const useRick = (url) => {

        const [anterior, setAnterior] = useState(null);
        const [siguiente, setSiguiente] = useState(null);
        const [ricks, setRicks] = useState ([]);
        const [loading, setLoading] = useState(true);
        
        useEffect (() => {
          setLoading(true);
          fetch(url).then((response) => response.json())
          .then((data) => {
                console.log(data);
                setRicks(data.results);
                setAnterior(data.previous);
                setSiguiente(data.next);
                setLoading(false);
                 })      
         }, [url])

        return{ ricks, loading, anterior, siguiente}
}

export default useRick