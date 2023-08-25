import { Metadata } from "next";
import { ServerNoteAPI } from "@/lib/server/ServerNoteAPI";
import { NoteEditorPage } from "./NoteEditorPage/NoteEditorPage";

type NoteIdProps = {
  params: { id: string }
}

export const revalidate = 0;
export const generateMetadata = async ({ params }: NoteIdProps): Promise<Metadata> =>{
  const id = decodeURIComponent(params.id);

  return {
    title: 'Note ' + id,
  }
}


const NoteEditor = async ({ params }: NoteIdProps) => {
  const noteId = decodeURIComponent(params.id);
  const serverNoteApi = ServerNoteAPI.create();
  const defaultValue = await serverNoteApi.getNote(noteId);

  return (
    <main>
      <NoteEditorPage
        noteId={noteId}
        value={defaultValue}
      />
    </main>
  )
}

export default NoteEditor;
