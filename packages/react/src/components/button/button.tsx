import React, {
  FunctionComponent,
  MouseEvent,
  ReactNode,
  forwardRef
} from 'react';

type Tag = React.ElementType;
type RefType = React.Ref<HTMLButtonElement | HTMLAnchorElement>;

interface ButtonElementProps {
  /** Optional prop to specify the name of the Button */
  name?: string;

  /** Optional prop to specify the type of the Button */
  type?: 'button' | 'reset' | 'submit';

  /** Optional prop to specify the value of the Button */
  value?: string;
}

interface LinkElementProps {
  /** Optional prop to prompts a user to save the linked URL instead of navigating to it */
  download?: string;

  /** Optionally specify an href for your Button to become an <a> element */
  href?: string;

  /** Optionally specify the language of the linked URL */
  hrefLang?: string;

  /** Optional relationship of the linked URL */
  rel?: string;

  /** Optional prop to specify the tabIndex of the Button */
  tabIndex?: number;

  /** Optional prop to to display where the linked URL will show */
  target?: '_blank' | '_parent' | '_self' | '_top';
}

export interface ButtonProps extends LinkElementProps, ButtonElementProps {
  /** Specify the content of your Button */
  children?: ReactNode;

  /** Optional prop to specify the ID of the Button */
  id?: string;

  /** Optionally specify Button onClick function */
  onClick?: (e: MouseEvent<HTMLElement>) => void;

  /** Specify whether the Button is disables, or not */
  isDisabled?: boolean;

  /** Optional prop to specify the tabIndex of the Button */
  tabIndex?: number;

  /** Optional prop to specify the ID used for testing */
  testId?: string;
}

/**
 * Button component.
 *
 * @component
 * @example
 * const type = 'submit'
 * const tabIndex = 0
 * return (
 *   <Button type={type} tabIndex={tabIndex}>Submit</Button>
 * )
 */
const Button: FunctionComponent<ButtonProps> = forwardRef(function Button(
  {
    children,
    download,
    href,
    hrefLang,
    id,
    isDisabled = false,
    name,
    onClick,
    rel,
    tabIndex,
    target,
    testId,
    type = 'button',
    value,
    ...props
  },
  ref: RefType
) {
  const commonProps = {
    'data-testid': testId,
    id,
    onClick,
    ref: ref,
    tabIndex
  };

  const anchorProps = {
    ...commonProps,
    href: isDisabled ? undefined : href,
    target,
    rel
  }

  const buttonProps = {
    ...commonProps,
    disabled: isDisabled,
    name,
    type,
    value
  }

  const Component: Tag = href && !isDisabled ? 'a' : 'button';
  const componentProps = Component === 'button' ? buttonProps : anchorProps;

  return React.createElement(
    Component,
    {
      ...componentProps,
      ...props
    },
    children
  );
});

export default Button;
