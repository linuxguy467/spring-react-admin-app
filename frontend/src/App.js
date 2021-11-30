import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import UserForm from './UserForm';
import UserTable from './UserTable';
import * as reactHttp from './services/reactHttp';

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        reactHttp.getUsers().then((data) => {
          setUsers(data);
          setSubmitted(false);
        });
      }, 1000);
    }
  }, [submitted]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s6">
            <UserForm
              user={user}
              setUser={setUser}
              setSubmitted={setSubmitted}
            />
          </div>
          <div className="col s6">
            <UserTable
              users={users}
              setUser={setUser}
              setSubmitted={setSubmitted}
            />
          </div>
        </div>
      </div>
    </>
  );
}
