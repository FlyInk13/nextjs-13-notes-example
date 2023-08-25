"use client"

import React, { FC, ReactNode } from "react";
import styles from './PageHeader.module.css';

interface PageHeaderProps extends React.ComponentPropsWithRef<"div"> {
  left: ReactNode,
  center: ReactNode,
  right: ReactNode,
}

export const PageHeader: FC<PageHeaderProps> = ({ className, left, center, right,...props }) => {
  return (
    <div className={className + ' ' + styles.PageHeader}>
      {left}
      {center}
      {right}
    </div>
  )
}
