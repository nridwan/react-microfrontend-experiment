/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useSelectorContext } from "../../utils/hooks/selector-hook";
import {
  createStorage,
  setStorage,
  subscribeStorage,
} from "../../utils/storeHelper";

export interface StorageContextModel {
  key: string;
  useStorageData: <R>(
    listener: (data: any | undefined) => R | undefined
  ) => R | undefined;
  setStorage: (data: React.SetStateAction<any>) => void;
}

const StorageContext = createContext<StorageContextModel>({
  key: "",
  useStorageData: (() => null) as any,
  setStorage: () => {},
});

interface StorageProviderProps extends PropsWithChildren {
  storageKey: string;
}

export const StorageProvider: React.FC<StorageProviderProps> = ({
  children,
  storageKey,
}) => {
  const [, useStorageData, setStorage] = useSelectorContext<any>(
    createStorage(storageKey, {})
  );

  const value: StorageContextModel = useMemo(
    () => ({
      key: storageKey,
      useStorageData,
      setStorage,
    }),
    [storageKey, useStorageData, setStorage]
  );
  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
};

export function useStorageContext() {
  return useContext(StorageContext);
}

export function useStorageData<R>(
  listener: (data: any | undefined) => R | undefined
) {
  return useContext(StorageContext).useStorageData(listener);
}

export const LocalStorageListener: React.FC = () => {
  const {
    key,
    useStorageData: hookStorage,
    setStorage: setData,
  } = useStorageContext();
  const data = hookStorage(useCallback((data) => data, []));
  useEffect(() => {
    setStorage(key, data);
  }, [data]);

  useEffect(() => {
    return subscribeStorage(setData, key);
  }, [setData]);
  return null;
};
