import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {


  const {formState, onInputChange, onResetForm, username, email, password} = useForm( {
      username: '',
      email: '',
      password: ''
     });

    //  const {username, email, password} = formState

  // useEffect(() => {
  //   // console.log('useefect called')
  // }, []);

  // useEffect(() => {
  //   // console.log('useefect cFORMSATE')
  // }, [username]);

  // useEffect(() => {
  //   // console.log('useefect emailchaanged')
  // }, [email]);

  return (
    <>
      <h1> formulario Custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={ onResetForm } className='btn btn-primary mt-2' >Reset</button>

      
    </>
  )
}
