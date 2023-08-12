"use client"
import { FC, FormEventHandler, useState } from "react";
import styles from './NewNotePage.module.css';
import { useRouter } from "next/navigation";
import { useEscape } from "@/hooks/useEscape";
import { Input } from "@/BaseComponents/Input/Input";
import { Button } from "@/BaseComponents/Button/Button";

type NewNotePageProps = {
}

export const NewNotePage: FC<NewNotePageProps> = () => {
  const [value, setValue] = useState<string>('');
  const router = useRouter()
  const onSubmit: FormEventHandler = (event) => {
    router.push('/note/' + value);
    event.preventDefault();
    return false;
  }

  useEscape();

  return (
    <div className={styles.NewNotePage}>
      <form className={styles.NewNoteModal} onSubmit={onSubmit}>
        <h1 className={styles.NewNoteHeader}>
          Create new note
        </h1>
        <Input
          autoFocus={true}
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Note name"
          pattern="[A-Za-zА-Яа-яЁё\d\s_\-]+"
        />
        <Button className={styles.NewNoteCreateButton}>
          Create note
        </Button>
      </form>
    </div>
  )
}
