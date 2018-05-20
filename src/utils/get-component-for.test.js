import React from 'react';
import { getComponentFor } from './get-component-for';
import Films from '../components/Films';

describe('getComponentFor', () => {
  it('should return a component mapped to the component name', () => {
    const received = getComponentFor('films');
    expect(received).toBe(Films);
  });

  it('should return null if a mapped component is not found', () => {
    const received = getComponentFor('foo');
    expect(received).toBe(null);
  });
});
