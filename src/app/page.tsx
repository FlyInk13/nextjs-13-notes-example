import styles from './page.module.css'
import Link from "next/link";
import { getNoteNames } from "@/ServerAction/ServerNoteAPI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Notes',
  description: '',
}

export default async function Home() {
  const noteNames = await getNoteNames();

  return (
    <main className={styles.PageWrap}>
      <h1 className={styles.PageHeader}>Notes</h1>
      <Link
        href={"/note/new/"}
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
    </main>
  )
}
