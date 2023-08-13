import { NoteEditor } from "@/SmartComponents/NoteEditor/NoteEditor";
import { getNote } from "@/ServerAction/ServerNoteAPI";
import { saveNote } from "@/ClientAction/ClientNoteApi";
import { Metadata } from "next";

type NoteIdProps = {
  params: { id: string }
}

export const generateMetadata = async ({ params }: NoteIdProps): Promise<Metadata> =>{
  const id = decodeURIComponent(params.id);

  return {
    title: 'Note ' + id,
  }
}


const NoteId = async ({ params }: NoteIdProps) => {
  const defaultValue = await getNote(decodeURIComponent(params.id));

  return (
    <main>
      <NoteEditor
        id={params.id}
        value={defaultValue}
        onChange={saveNote}
      />
    </main>
  )
}

export default NoteId;
