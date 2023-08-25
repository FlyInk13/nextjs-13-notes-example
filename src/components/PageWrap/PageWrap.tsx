"use client"

import React, { FC } from "react";
import styles from './PageWrap.module.css';

interface PageWrapProps extends React.ComponentPropsWithRef<"div"> {
}

export const PageWrap: FC<PageWrapProps> = ({ className, ...props }) => {
  return (
    <div
      className={className + ' ' + styles.PageWrap}
      {...props}
    />
  )
}
