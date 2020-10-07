// src/__tests__/integration/Button.spec.tsx

import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import Button from '../../components/Button'

let documentBody: RenderResult;

describe('<Button />', () => {
  beforeEach(() => {
    documentBody = render(<Button>Click me!</Button>);
  });
  it(': shows "Click me!" text', () => {
    expect(documentBody.getByText('Click me!')).toBeInTheDocument();
  });

  it(': matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
