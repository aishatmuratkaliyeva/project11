import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
query {
  users {
    id
    name
    email
  }
}

`;

/*function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; 

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;*/

