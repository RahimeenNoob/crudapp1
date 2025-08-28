import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])

 useEffect(() => {
  axios.get("http://localhost:5000/")
    .then(result => {
      console.log("API response:", result.data);  // 👀 check this in console
      setUsers(result.data);
    })
    .catch(err => console.log(err));
}, []);
const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/deleteUser/`+id)
    .then(res => {
      console.log("✅ Deleted:", res.data);
      window.location.reload();
    })
    .catch(err => console.log(err));
};

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success mb-2'>+ Add</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
     <tbody>
  {Array.isArray(users) && users.map((user, index) => (
    <tr key={index}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>
        <Link to={`/update/${user._id}`} className="btn btn-success me-2">Update</Link>
        <button className="btn btn-danger"
        onClick={ ()=> handleDelete(user._id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  )
}

export default Users
