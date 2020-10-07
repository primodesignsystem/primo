import React, { FunctionComponent, ButtonHTMLAttributes, LinkHTMLAttributes, MouseEvent, ReactNode, forwardRef } from 'react'

export interface ButtonElementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional prop to specify the type of the Button */
  type?: 'button' | 'reset' | 'submit'
}

export interface LinkElementProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  /** Optional prop to prompts a user to save the linked URL instead of navigating to it */
  download?: string

  /** Optionally specify an href for your Button to become an <a> element */
  href?: string

  /** Optionally specify the language of the linked URL */
  hrefLang?: string

  /** Optional relationship of the linked URL */
  rel?: string

  /** Optional prop to specify the tabIndex of the Button */
  tabIndex?: number

  /** Optional prop to to display where the linked URL will show */
  target?: '_blank' | '_parent' | '_self' | '_top'
}

export interface ButtonProps extends LinkElementProps, ButtonElementProps {
  /** Specify the content of your Button */
  children?: ReactNode

  /** Optional prop to specify the ID of the Button */
  id?: string

  /** Optionally specify Button onClick function */
  onClick?: (e: MouseEvent<HTMLElement>) => void

  /** Specify whether the Button is disables, or not */
  disabled?: boolean

  /** Optional prop to specify the tabIndex of the Button */
  tabIndex?: number
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
      disabled = false,
      download,
      href,
      hrefLang,
      id,
      onClick,
      rel,
      tabIndex,
      target,
      type = 'button',
      ...props
    },
    ref
  ) {
    const commonAttrs = {
      id,
      onClick,
      ref,
      tabIndex
    }
    const Component = href && !disabled ? ('a' as any) : 'button'
    const attrs =
      Component === 'button'
        ? { disabled, type, ...commonAttrs }
        : { download, href, hrefLang, rel, target, ...commonAttrs }
  
    return <Component {...attrs} {...props}>{children}</Component>
  })
  
  export default Button
