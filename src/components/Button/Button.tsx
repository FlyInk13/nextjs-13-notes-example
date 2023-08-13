"use client"

import React, { FC } from "react";
import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
}

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={className + ' ' + styles.Button}
      {...props}
    />
  )
}
