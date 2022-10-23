import React, { useCallback } from "react";
import { useStorageData } from "../../../components/storage/StorageProvider";

const Home: React.FC = () => {
  const login = useStorageData(useCallback((data) => data?.login, []));

  return (
    <div>
      Hello, {login?.username} / {login?.email}
    </div>
  );
};

export default Home;
