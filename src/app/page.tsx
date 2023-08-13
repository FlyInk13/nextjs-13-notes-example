import { getNoteNames } from "@/ServerAction/ServerNoteAPI";
import { Metadata } from "next";
import { NoteListPage } from "@/SmartComponents/NoteListPage/NoteListPage";

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Notes',
  description: '',
}

export default async function Home() {
  const noteNames = await getNoteNames();

  return (
    <main>
      <NoteListPage
        noteNames={noteNames}
      />
    </main>
  )
}
