import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: 'strider',
    email: 'wallas@google.coom'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    console.log(target.name);
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('useefect called')
  }, []);

  useEffect(() => {
    // console.log('useefect cFORMSATE')
  }, [username]);

  useEffect(() => {
    // console.log('useefect emailchaanged')
  }, [email]);

  return (
    <>
      <h1> formulario simple</h1>
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

      {
      (username === 'strider2') && <Message />
       }
    </>
  )
}
