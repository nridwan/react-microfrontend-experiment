import { useStorageData } from '@nridwan/sample-apps.components.storage';
import React, { useCallback } from 'react';

const Home: React.FC = () => {
  const login = useStorageData(useCallback((data) => data?.login, []));

  return (
    <div>
      Hello, {login?.username} / {login?.email}
    </div>
  );
};

export default Home;
