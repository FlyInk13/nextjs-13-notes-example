"use client"
import { FC, FormEventHandler, useState } from "react";
import styles from './NewNotePage.module.css';
import { useRouter } from "next/navigation";
import { useEscape } from "@/hooks/useEscape";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { ClientNoteApi } from "@/lib/client/ClientNoteApi";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { NoteEditorTextarea } from "@/components/NoteEditorTextarea/NoteEditorTextarea";
import { PageWrap } from "@/components/PageWrap/PageWrap";

type NewNotePageProps = {
}

export const NewNotePage: FC<NewNotePageProps> = () => {
  const clientNoteApi = ClientNoteApi.create();
  const [noteId, setNoteId] = useState<string>('');
  const [noteValue, setNoteValue] = useState<string>('');
  const router = useRouter()
  const onSubmit: FormEventHandler = (event) => {
    clientNoteApi.saveNote(noteId, noteValue).then(() => {
      router.push('/note/' + noteId);
    });

    event.preventDefault();
    return false;
  }

  useEscape();

  return (
    <PageWrap>
      <PageHeader
        left={<Link href="/" className={styles.NoteEditorHeaderLink}>Notes</Link>}
        center={
          <Input
            autoFocus={true}
            defaultValue={noteId}
            onChange={(e) => setNoteId(e.target.value)}
            placeholder="Note name"
            className={styles.NoteIdInput}
            pattern="[A-Za-zА-Яа-яЁё\d\s_\-.]+"
          />
        }
        right={
          <Button
            disabled={!/^[A-Za-zА-яЁё\d\s_\-.]+/.test(noteId)}
            className={styles.NoteCreateButton}
            onClick={onSubmit}
          >
            Create note
          </Button>
        }
      />
      <NoteEditorTextarea
        defaultValue={noteValue}
        onChange={(event) => setNoteValue(event.currentTarget.value)}
      />
    </PageWrap>
  );
}
