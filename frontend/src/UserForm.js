import React from 'react';
import { useInput } from './hooks/input.hook';
import * as reactHttp from './services/reactHttp';

export default function UserForm({ user, setUser, setSubmitted }) {
  let id = user.id;
  const name = useInput(user.name);
  const email = useInput(user.email);
  const password = useInput(user.password);

  console.log(name, user.name);

  const clearUser = (e) => {
    setUser({
      id: null,
      name: '',
      email: '',
      password: '',
    });
    name.clear();
    email.clear();
    password.clear();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (id !== null) {
      reactHttp.updateUser(id, name.value, email.value, password.value);
    } else {
      reactHttp.createUser(name.value, email.value, password.value);
    }
    console.log('setting state...');
    setSubmitted(true);
    clearUser();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="input-field col s12">
        <i className="material-icons prefix">person</i>
        <input
          type="text"
          id="autocomplete-input-0"
          className="autocomplete"
          {...name.bind}
        />
        <label
          htmlFor="autocomplete-input-0"
          className={name.value !== '' ? 'active' : ''}
        >
          Name
        </label>
      </div>
      <div className="input-field col s12">
        <i className="material-icons prefix">email</i>
        <input
          type="email"
          id="autocomplete-input-1"
          className="autocomplete"
          {...email.bind}
        />
        <label
          htmlFor="autocomplete-input-1"
          className={email.value !== '' ? 'active' : ''}
        >
          Email
        </label>
      </div>
      <div className="input-field col s12">
        <i className="material-icons prefix">vpn_key</i>
        <input
          type="password"
          id="autocomplete-input-2"
          className="autocomplete"
          {...password.bind}
        />
        <label
          htmlFor="autocomplete-input-2"
          className={password.value !== '' ? 'active' : ''}
        >
          Password
        </label>
      </div>
      {id !== null ? (
        <button
          onClick={(e) => clearUser(e)}
          className="btn-floating btn-small waves-effect waves-light left blue"
          name="action"
        >
          <i className="material-icons">add</i>
        </button>
      ) : (
        ''
      )}
      <button
        className="btn-floating btn-small waves-effect waves-light right"
        type="submit"
        name="action"
      >
        <i className="material-icons right">send</i>
      </button>
    </form>
  );
}
