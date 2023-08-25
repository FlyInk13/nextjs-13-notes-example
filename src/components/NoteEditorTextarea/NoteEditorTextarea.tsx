"use client"

import React, { FC } from "react";
import styles from './NoteEditorTextarea.module.css';

interface NoteEditorTextareaProps extends React.ComponentPropsWithRef<"textarea"> {
}

export const NoteEditorTextarea: FC<NoteEditorTextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={className + ' ' + styles.NoteEditorTextarea}
      {...props}
    />
  )
}
