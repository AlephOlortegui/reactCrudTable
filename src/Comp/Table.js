const Table = () => {
  return (
    <>
      <div className="row justify-content-between align-items-center my-4">
          <div className="col-4">
              <h1 className="text-start pb-1">Table page</h1>
          </div>
      </div>
      <table className="table table-hover">
        <thead className='table-secondary'>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
           {/* some data from json-server */}
        </tbody>
      </table>
    </>
  )
}

export default Table