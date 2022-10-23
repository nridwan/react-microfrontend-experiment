import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useStorageContext } from '@nridwan/sample-apps.components.storage';

const Navi: React.FC = () => {
  const { useStorageData, setStorage: setData } = useStorageContext();
  const login = useStorageData(useCallback((data) => !!data.login, []));

  if (!login) return null;

  return (
    <div>
      <div>
        <Link style={{ padding: 4 }} to="/home">
          Home
        </Link>
        <Link style={{ padding: 4 }} to="/gallery">
          Gallery
        </Link>
        <span
          style={{ padding: 4, cursor: 'pointer' }}
          onClick={() => {
            setData({});
          }}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default Navi;
