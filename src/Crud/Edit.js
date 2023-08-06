import React from 'react'
import { useParams } from 'react-router-dom';
import useFormFx from '../Custom/useFormFx';
import useFetch from '../Custom/useFetch';
import Spinner from '../Utilities/Spinner';
import NotFound from '../Utilities/NotFound';
import Form from '../Utilities/Form';

const Edit = () => {
  const {id} = useParams();

  const {data : user, setData,
    handleChange,
    handleSubmit} = useFormFx(`http://localhost:8000/employee/${id}`,'PUT',-1)

  const {isPending, error} = useFetch(`http://localhost:8000/employee/${id}`,setData)

  return (
    <>
      {isPending ? (<Spinner />) : 
        error ? (<NotFound />) :
        (<Form title="Edit" data={user} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}/>)
      }
    </>
  )
}

export default Edit