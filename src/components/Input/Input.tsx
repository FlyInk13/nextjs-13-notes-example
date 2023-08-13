"use client"

import React, { FC } from "react";
import styles from './Input.module.css';

interface InputProps extends React.ComponentPropsWithRef<"input"> {
}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={className + ' ' + styles.Input}
      {...props}
    />
  )
}
