import React from 'react';

import { render, cleanup, screen } from "@testing-library/react";
import ButtonGroup from '.';

describe('<ButtonGroup />', () => {
  afterEach(cleanup);

  const defaultProps = {
    testId: 'buttonGroup'
  };

  test(": matches snapshot", () => {
    const { container } = render(<ButtonGroup {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  test(": renders", () => {
    render(<ButtonGroup {...defaultProps}>Click me</ButtonGroup>);
    const buttonGroup = screen.getByTestId('buttonGroup');

    expect(buttonGroup).toBeInTheDocument();
  });
});
