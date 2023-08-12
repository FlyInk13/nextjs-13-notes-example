"use client"
import { FC, useState } from "react";
import styles from './NewNotePage.module.css';
import { useRouter } from "next/navigation";
import { useEscape } from "@/hooks/useEscape";

type NewNotePageProps = {
}

export const NewNotePage: FC<NewNotePageProps> = () => {
  const [value, setValue] = useState<string>('');
  const router = useRouter()

  useEscape();

  return (
    <div className={styles.NewNotePage}>
      <div className={styles.NewNoteModal}>
        <h1>Create new note</h1>
        <input
          autoFocus={true}
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Note name"
          pattern="/^[а-яa-z\d_ ]+$/"
        />
        <button onClick={() => router.push('/note/' + value)}>
          Create note
        </button>
      </div>
    </div>
  )
}
