import { useStorageContext } from '@nridwan/sample-apps.components.storage';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const { setStorage } = useStorageContext();
  const [username, setUsername] = useState('');
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="text" name="password" placeholder="password" />
      <button
        type="button"
        disabled={!username}
        onClick={() =>
          setStorage({ login: { username, email: `${username}@email.com` } })
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
