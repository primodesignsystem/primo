import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = () => <Button>Click me!</Button>;

export const Default = Template.bind({});
Default.args = {
    label: 'Button',
};

