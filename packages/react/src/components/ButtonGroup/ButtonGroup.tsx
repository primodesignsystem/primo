import React, {
  FunctionComponent,
  ReactNode,
  forwardRef
} from 'react';

type RefType = React.RefObject<HTMLDivElement>;

export interface ButtonGroupProps {
  /** Specify the content of your ButtonGroup */
  children?: ReactNode;

  /** Optional prop to specify the ID of the ButtonGroup */
  id?: string;

  /** Optional prop to specify the ID used for testing */
  testId?: string;
}

/**
 * ButtonGroup component.
 *
 * @component
 * @example
 * return (
 *   <ButtonGroup />
 * )
 */
const ButtonGroup: FunctionComponent<ButtonGroupProps> = forwardRef(function ButtonGroup(
  {
    children,
    id,
    testId,
    ...props
  },
  ref: RefType
) {
  return (
    <div id={id} ref={ref} data-testid={testId} {...props}>
      {children}
    </div>
  );
});

export default ButtonGroup;
