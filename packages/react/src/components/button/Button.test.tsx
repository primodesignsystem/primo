import React from 'react';

import { render, cleanup, screen } from "@testing-library/react";
import Button from '.';

describe('<Button />', () => {
  afterEach(cleanup);

  const defaultProps = {
    testId: 'button',
    href: undefined
  };

  test(": matches snapshot", () => {
    const { container } = render(<Button {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  test(": matches snapshot as anchor", () => {
    const props = {
      ...defaultProps,
      href: '#'
    }
    const { container } = render(<Button {...props} />);

    expect(container).toMatchSnapshot();
  });

  test(": renders", () => {
    render(<Button {...defaultProps}>Click me</Button>);
    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(screen.queryByText("Click me")).toBeTruthy();
  });

  test(": renders as anchor", () => {
    const props = {
      ...defaultProps,
      href: '#'
    }
    const { rerender } = render(<Button {...defaultProps}>Click me</Button>);

    expect(screen.getByTestId('button')).not.toHaveAttribute('href');

    // Change props
    rerender(<Button {...props} />);

    expect(screen.getByTestId('button')).toHaveAttribute('href');
  });
});
