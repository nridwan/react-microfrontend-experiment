export const createStorage = <T>(key: string, defaultValue: T) =>
  JSON.parse(localStorage.getItem(key)!) ?? defaultValue;

export const setStorage = <T>(key: string, value: T) => {
  const oldValue = localStorage[key];
  localStorage[key] = JSON.stringify(value);
  window.dispatchEvent(
    new StorageEvent("local-storage", {
      key,
      oldValue,
      newValue: localStorage[key],
    } as any)
  );
};

export const subscribeStorage = <T>(setter: (data: T) => any, key: string) => {
  const func = (e: StorageEvent) => {
    if (e.key === key && e.oldValue !== e.newValue) {
      setter(JSON.parse(e.newValue!));
    }
  };
  window.addEventListener("local-storage", func);
  window.addEventListener("storage", func);
  return () => {
    window.removeEventListener("local-storage", func);
    window.removeEventListener("storage", func);
  };
};
