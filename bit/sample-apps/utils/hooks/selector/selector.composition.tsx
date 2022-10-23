import React from 'react';
import { selector } from './selector';

export const Basicselector = () => {
  const { count, increment } = selector();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
