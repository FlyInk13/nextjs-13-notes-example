"use client"
import { FC } from "react";
import styles from './NoteIndexPage.module.css';
import Link from "next/link";
import { useArrowForFocus } from "@/hooks/useArrowForFocus";
import { PageWrap } from "@/components/PageWrap/PageWrap";
import { PageHeader } from "@/components/PageHeader/PageHeader";

type NoteIndexPageProps = {
  noteNames: string[],
}


export const NoteIndexPage: FC<NoteIndexPageProps> = ({ noteNames }) => {
  useArrowForFocus(styles.NoteLink);

  return (
    <PageWrap>
      <PageHeader
        left={<Link href="/">Notes</Link>}
        center={<h1 className={styles.NoteEditorHeaderTitle}>Notes</h1>}
        right={<Link href="/note/new">New note</Link>}
      />
      <div className={styles.NoteIndex}>
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
    </PageWrap>
  )
}
