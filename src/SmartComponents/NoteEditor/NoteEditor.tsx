"use client"
import { FC, useEffect, useRef } from "react";
import styles from './NoteEditor.module.css';
import { saveNote } from "@/ClientAction/ClientNoteApi";
import { TextArea } from "@/BaseComponents/TextArea/TextArea";
import { useEscape } from "@/hooks/useEscape";

type NoteEditorProps = {
  id: string,
  value: string,
  onChange: (id: string, value: string) => void
}

export const NoteEditor: FC<NoteEditorProps> = ({ id, value}) => {
  useEscape();

  return (
    <div className={styles.NoteEditor}>
      <TextArea
        defaultValue={value}
        autoFocus={true}
        onChange={(event) => saveNote(id, event.currentTarget.value)}
      />
    </div>
  )
}
