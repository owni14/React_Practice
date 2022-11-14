import React, { useState, useEffect } from 'react';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log('id:: ', id);
    console.log('pw:: ', pw);
  };

  return (
    <div>
      <p>Login page</p>
      <input
        type='text'
        name='id'
        placeholder='Input your id'
        value={id}
        onChange={({ target: { value } }) => setId(value)}
      />
      <br />
      <input
        type='password'
        name='pw'
        placeholder='Input your password'
        value={pw}
        onChange={({ target: { value } }) => setPw(value)}
      />
      <br />
      <button onClick={onClickHandler}>Sumbit</button>
    </div>
  );
}

export default Login;
