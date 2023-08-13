"use client"

import React, { FC } from "react";
import styles from './TextArea.module.css';

interface TextAreaProps extends React.ComponentPropsWithRef<"textarea"> {
}

export const TextArea: FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={className + ' ' + styles.TextArea}
      {...props}
    />
  )
}
