import { useState, useCallback, useEffect } from 'react';

export const useLocalStorage = <T>(keyValue: string, initialState: T | undefined = undefined) => {
  const [state, setState] = useState<T | undefined>(initialState);

  useEffect(() => {
    const stringedState = JSON.stringify(initialState);
    localStorage.setItem(keyValue, stringedState);
    setState(initialState);
  }, []);

  const forceUpdate = useCallback(() => {
    const fromLocal = localStorage.getItem(keyValue);

    if (fromLocal) {
      const newValue = JSON.parse(fromLocal) as T;
      setState(newValue);
    }
  }, []);

  const setLocal = useCallback((newValue: T) => {
    const stringedState = JSON.stringify(newValue);

    localStorage.setItem(keyValue, stringedState);

    setState(newValue);
  }, []);

  return [state, setLocal, forceUpdate] as const;
};

export const useSessionStorage = <T>(keyValue: string, initialState: T | undefined = undefined) => {
  const [state, setState] = useState<T | undefined>(initialState);

  useEffect(() => {
    const stringedState = JSON.stringify(initialState);
    sessionStorage.setItem(keyValue, stringedState);
    setState(initialState);
  }, []);

  const forceUpdate = useCallback(() => {
    const fromLocal = sessionStorage.getItem(keyValue);

    if (fromLocal) {
      const newValue = JSON.parse(fromLocal) as T;
      setState(newValue);
    }
  }, []);

  const setLocal = useCallback((newValue: T) => {
    const stringedState = JSON.stringify(newValue);

    sessionStorage.setItem(keyValue, stringedState);

    setState(newValue);
  }, []);

  return [state, setLocal, forceUpdate] as const;
};
