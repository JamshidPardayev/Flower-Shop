import React, { useState } from 'react'
import { useCrudStore } from '../../../store/useCrudeStore';

const AddUser = () => {
    
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const {users, userAdd} = useCrudStore();

  const addUser = (e) => {
    e.preventDefoult();
    userAdd({name, surname});
  }

  console.log(users);
  return (
    <div className='max-w-[1200px] mx-auto '>
      <form action="" onSubmit={addUser}>
          <label htmlFor="">
            <span>Ism</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border'/>
          </label>
          <label htmlFor="">
            <span>Familiya</span>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className='border'/>
          </label>
          <button className='bg-red-500'>Yuborish</button>
        </form>
    </div>
  )
}

export default AddUser
