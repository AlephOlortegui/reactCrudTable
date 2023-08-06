import Form from '../Utilities/Form'
import useFormFx from '../Custom/useFormFx'

const Create = () => {
  const {data, 
    handleChange, 
    handleSubmit} = useFormFx('http://localhost:8000/employee', 'POST', "/")

  return (
    <Form title="Create" data={data} handleChange={handleChange} handleSubmit={handleSubmit}/>
  )
}

export default Create