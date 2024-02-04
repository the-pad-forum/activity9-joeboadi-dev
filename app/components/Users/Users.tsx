import React, { useState, useEffect, FC } from 'react';
// import styles from './Users.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    // Include other relevant fields
  };
  // Other user fields
}

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data as User[]));
  }, []);

  return (
    <div className="overflow-x-auto place-content-center mt-8">
      <table className="table">
        <thead>
          <tr className='text-base-content bg-base-200'>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            {/* Other headings */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className='hover'>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              {/* Other data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;