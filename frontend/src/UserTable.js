import React from 'react';
import * as reactHttp from './services/reactHttp';

export default function UserTable({ users, setUser, setSubmitted }) {
  const onDelete = (id) => {
    reactHttp.deleteUser(id);
    setSubmitted(true);
  };

  const onEdit = (id) => {
    reactHttp.getUser(id).then((data) => {
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
      });
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <button
                onClick={(e) => onEdit(user.id)}
                className="btn-floating btn-small waves-effect waves-light orange"
                type="submit"
                name="action"
              >
                <i className="material-icons">edit</i>
              </button>
            </td>
            <td>
              <button
                onClick={(e) => onDelete(user.id)}
                className="btn-floating btn-small waves-effect waves-light red"
                type="submit"
                name="action"
              >
                <i className="material-icons">delete</i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
