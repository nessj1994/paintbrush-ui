import React from 'react';
import {Datepicker as dp} from 'vanillajs-datepicker'

type Props ={
  // Which button variant to use, I.E. 'primary' for a page's primary call to action etc
  // What background color to use
  backgroundColor?: string;
  // How large should the button be?
  size?: 'small' | 'medium' | 'large';
  // Button contents
  label: string;

  component: React.ReactNode;
  // Optional click handler
  onClick?: () => void;
}


/**
 * Primary UI component for user interaction
 */
export const Datepicker = ({
  size = 'medium',
  backgroundColor,
  component,
  label="Date",
  ...props
}: Props) => {
  // const datepicker = new dp(component, {})

      // options here

  return (<div>

    {component}
  </div>
    )

}



