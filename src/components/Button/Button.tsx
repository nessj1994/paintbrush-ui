import React from 'react';
import './button.css';

export enum Variants {
  Primary = 'primary',
  Secondary = 'secondary'
}

type Props ={
  // Which button variant to use, I.E. 'primary' for a page's primary call to action etc
  variant?: Variants | undefined
  // What background color to use
  backgroundColor?: string;
  // How large should the button be?
  size?: 'small' | 'medium' | 'large';
  // Button contents
  label: string;
  // Optional click handler
  onClick?: () => void;
}

export type Variant =  Variants | undefined

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = Variants.Primary,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`, `rounded-xl`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
