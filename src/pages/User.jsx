import React from 'react';
import { Link } from 'react-router-dom';
function User({ usersData }) {
  return (
    <div>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>
            {' '}
            <Link to={`/users/${user.id}`}> {user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
