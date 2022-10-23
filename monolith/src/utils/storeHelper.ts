export const createStorage = <T>(key: string, defaultValue: T) =>
  JSON.parse(localStorage.getItem(key)!) ?? defaultValue

export const setStorage = <T>(key: string, value: T) => localStorage[key] = JSON.stringify(value)

export const subscribeStorage = <T>(setter: (data: T) => any, key: string) => {
  const func = (e: StorageEvent) => {
    if (e.key === key && e.oldValue !== e.newValue) {
      setter(JSON.parse(e.newValue!))
    }
  }
  window.addEventListener('storage', func)
  return () => window.removeEventListener('storage', func)
}
