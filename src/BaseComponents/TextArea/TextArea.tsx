"use client"

import { FC } from "react";
import styles from './TextArea.module.css';

export const TextArea: FC<any> = ({ defaultValue, onChange }) => {
  return (
    <textarea
      className={styles.TextArea}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
