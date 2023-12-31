import useFetch from "../Custom/useFetch"
import Spinner from "../Utilities/Spinner"
import NotFound from "../Utilities/NotFound"
import { Link, useNavigate, useParams } from "react-router-dom"

const Detail = () => {
  const {id} = useParams()
  const {data: user, isPending, error} = useFetch(`http://localhost:8000/employee/${id}`)

  //After deleting I want to redirect
  const navigateTo = useNavigate()

  const handleDelete = () => { 
    fetch(`http://localhost:8000/employee/${id}`, {method: 'DELETE'})
    .then(() => {console.log('deleted!'); navigateTo('/');})
  }


  return (
    <>
    {isPending ? (<Spinner />) : error ? (<NotFound />) : (
      <div className="card">
        <div className="card-header text-start">Contact Details</div>
        <div className="card-body">
            <p className="card-text">The Employee name is : <b>{user.username}</b></p>
            <p className="card-text">Email is : {user.email}</p>
            <p className="card-text">Phone is : {user.phone}</p>
            <button className="btn btn-danger me-3" onClick={handleDelete}><i className="bi bi-trash-fill"></i></button>
            <Link to={`/edit/${user.id}`} className="btn btn-info ms-3"><i className="bi bi-pencil-fill"></i></Link>
        </div>
      </div>
    )}
    </>
  )
}

export default Detail