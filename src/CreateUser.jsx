import { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
console.log("Axios.defaults.baseURL =", axios.defaults.baseURL);
console.log("Requesting:", "http://localhost:5000/create");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/create', { name, email, age });
      console.log('User created:', res.data);
      alert('User created successfully!');
    } catch (err) {
      console.error('Server error:', err.response || err.message);
      alert('Error creating user!');
    }
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label>Name</label>
            <input type="text" className='form-control' placeholder='Enter Name'
              onChange={e => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input type="number" className='form-control' placeholder='Enter Age'
              onChange={e => setAge(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input type="email" className='form-control' placeholder='Enter Email'
              onChange={e => setEmail(e.target.value)} />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
