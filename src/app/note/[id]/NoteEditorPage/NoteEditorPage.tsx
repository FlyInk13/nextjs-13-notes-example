"use client"
import { FC } from "react";
import styles from './NoteEditorPage.module.css';
import { useEscape } from "@/hooks/useEscape";
import { ClientNoteApi } from "@/lib/client/ClientNoteApi";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { NoteEditorTextarea } from "@/components/NoteEditorTextarea/NoteEditorTextarea";
import { PageWrap } from "@/components/PageWrap/PageWrap";

type NoteEditorPageProps = {
  noteId: string,
  value: string,
}

export const NoteEditorPage: FC<NoteEditorPageProps> = ({ noteId, value}) => {
  const clientNoteApi = ClientNoteApi.create();

  useEscape();

  return (
    <PageWrap>
      <PageHeader
        left={<Link href="/">Notes</Link>}
        center={<h1>{noteId}</h1>}
        right={<Link href="/note/new">New note</Link>}
      />
      <NoteEditorTextarea
        defaultValue={value}
        autoFocus={true}
        onChange={(event) => clientNoteApi.saveNote(noteId, event.currentTarget.value)}
      />
    </PageWrap>
  );
}
