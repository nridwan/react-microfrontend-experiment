import React from 'react';
import { storage } from './storage';

export function ReturnsCorrectValue() {
  return <div>{storage()}</div>;
}
