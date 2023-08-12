"use client"
import { FC } from "react";
import styles from './NoteListPage.module.css';
import Link from "next/link";
import { useArrowForFocus } from "@/hooks/useArrowForFocus";

type NoteListPageProps = {
  noteNames: string[],
}


export const NoteListPage: FC<NoteListPageProps> = ({ noteNames }) => {
  useArrowForFocus(styles.NoteLink);

  return (
    <main className={styles.PageWrap}>
      <div className={styles.NoteEditor}>
        <h1 className={styles.PageHeader}>Notes</h1>
        <Link
          href={"/note/new/"}
          autoFocus={true}
          className={styles.NoteLink}
        >
          Create new note
        </Link>
        {noteNames.map((noteName) => {
          return (
            <Link
              href={"/note/" + noteName}
              key={noteName}
              className={styles.NoteLink}
            >
              {noteName}
            </Link>
          );
        })}
      </div>
    </main>
  )
}
