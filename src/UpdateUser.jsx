import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

useEffect(() => {
  axios.get(`http://localhost:5000/getUser/${id}`)
    .then(res => {
      setName(res.data.name);
      setEmail(res.data.email);
      setAge(res.data.age);
    })
    .catch(err => console.log(err));
}, [id]);

const handleSubmit = (e) => {
  e.preventDefault();
  axios.put(`http://localhost:5000/update/${id}`, { name, email, age })
    .then(res => {
      console.log("✅ Updated:", res.data);
      navigate('/');
    })
    .catch(err => console.log(err));
};


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label>Name</label>
            <input type="text" className='form-control'
              value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input type="text" className='form-control'
              value={age} onChange={e => setAge(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input type="text" className='form-control'
              value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <button type="submit" className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
