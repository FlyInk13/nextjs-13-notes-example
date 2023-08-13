import { Metadata } from "next";
import { ServerNoteAPI } from "@/lib/server/ServerNoteAPI";
import { NoteIndexPage } from "./NoteIndexPage/NoteIndexPage";

export const revalidate = 0;
export const metadata: Metadata = {
  title: 'Notes',
  description: '',
}

const NoteIndex = async () => {
  const serverNoteApi = ServerNoteAPI.create();
  const noteNames = await serverNoteApi.getNoteNames();

  return (
    <main>
      <NoteIndexPage
        noteNames={noteNames}
      />
    </main>
  )
}

export default NoteIndex;
