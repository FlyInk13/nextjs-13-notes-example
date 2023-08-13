"use client"
import { FC } from "react";
import styles from './NoteEditorPage.module.css';
import { useEscape } from "@/hooks/useEscape";
import { TextArea } from "@/components/TextArea/TextArea";
import { ClientNoteApi } from "@/lib/client/ClientNoteApi";

type NoteEditorPageProps = {
  noteId: string,
  value: string,
}

export const NoteEditorPage: FC<NoteEditorPageProps> = ({ noteId, value}) => {
  const clientNoteApi = ClientNoteApi.create();

  useEscape();

  return (
    <div className={styles.NoteEditor}>
      <TextArea
        defaultValue={value}
        autoFocus={true}
        onChange={(event) => clientNoteApi.saveNote(noteId, event.currentTarget.value)}
      />
    </div>
  )
}
