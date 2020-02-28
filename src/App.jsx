import React, { useState } from 'react';

export const UserDisplay = ({ name, address, age }) => {
  const [user, setUser] = useState({
    name: 'myname',
    age: 10,
    address: '0000 onestreet'
  });

  return (
    <>
      <div>
        <div class='label'>Name:</div>
        <div>{user.name}</div>
      </div>
      <div>
        <div class='label'>Address:</div>
        <div>{user.address}</div>
      </div>
      <div>
        <div class='label'>Age:</div>
        <div>{user.age}</div>
      </div>
      <button onClick={() => setUser({ name: 'name changed' })}>
        Click me
      </button>
    </>
  );
};
