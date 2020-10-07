import React from 'react';

import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  test(': renders', () => {
    render(<Button>Click me!</Button>);
    expect(screen.getByText(/Click me!/i)).toBeInTheDocument()
  });
});
