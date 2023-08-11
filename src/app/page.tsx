import styles from './page.module.css'
import Link from "next/link";
import { getNoteNames } from "@/ServerAction/ServerNoteAPI";

export default async function Home() {
  const noteNames = await getNoteNames();
  return (
    <main className={styles.PageWrap}>
      <h1 className={styles.PageHeader}>Notes</h1>
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
