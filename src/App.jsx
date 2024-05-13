import React from 'react'


function App() {
  const names=['brad','jhon','julia']
  const loggedIn=false
  return (
    <>
      <h1 className='text-5xl'>Hello World</h1>
      <p>names</p>
      <ul>
        {names.map((name,index)=>(
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello member</h1>:<h1>Hello guest</h1>}
    </>
  );
}

export default App
