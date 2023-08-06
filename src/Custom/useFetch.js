import { useState, useEffect } from 'react';

const useFetch = (uri) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async (uri) => { 
    try {
      let res = await fetch(uri)
      console.log(res)
      if(!res.ok){
        throw Error('could not fetch the data for that resource')
      } //throw break the try block
      let data = await res.json()
      setData(data);
      setIsPending(false);
      setError(false);
    } catch (error) {
      console.log(error)
      setIsPending(false)
      setError(true)
    }
   }

  useEffect(() => {
    fetchData(uri);

    return () => {
      console.log('return fetch')
    }
  }, [uri])
  
  return {
    data, isPending, error
  }
}

export default useFetch