"use client"
import { FC } from "react";
import styles from './NoteEditor.module.css';
import { saveNote } from "@/ClientAction/ClientNoteApi";
import { TextArea } from "@/BaseComponents/TextArea/TextArea";

type NoteEditorProps = {
  id: string,
  value: string,
  onChange: (id: string, value: string) => void
}

export const NoteEditor: FC<NoteEditorProps> = ({ id, value}) => {
  return (
    <div className={styles.NoteEditor}>
      <TextArea
        defaultValue={value}
        onChange={(newValue: string) => saveNote(id, newValue)}
      />
    </div>
  )
}
