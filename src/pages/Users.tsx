import React, { useState, useEffect } from 'react';
import { getUsers } from '../api/api';
import UserCard from '../components/UserCard';
import User from '../models/User';

function Users() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(function() {
    setTimeout(function() {
      getUsers().then(data => setUsers(data))
    }, 300);
  }, []);

  return (
    <main className="container pt-6 py-4">
      <div className="card">
        <div className="card-body">
          <h1 className="display-4">Users</h1>
          {users === null
            ? 'Loading...'
            : users.map(user => <UserCard id={user.id} username={user.username} display_name={user.display_name} />)}
        </div>
      </div>
    </main>
  );
}

export default Users;
