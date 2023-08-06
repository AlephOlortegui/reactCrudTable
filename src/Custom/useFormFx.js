import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFormFx = (uri, mthd, thisPage) => {
  const navigateTo = useNavigate();
  const [data, setData] = useState({
    username:'',
    email:'',
    phone:''
  })

  const handleChange = (e) => { 
    const {name,value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    const body = {username: data.username, email: data.email, phone: data.phone}

    //Sending the data to json-server
    fetch(uri,{
            method: mthd,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then(() => {
            console.log('handle Submit')
            navigateTo(thisPage)
        })
  }

  return {
    data, setData,
    handleChange,
    handleSubmit
  }
}

export default useFormFx