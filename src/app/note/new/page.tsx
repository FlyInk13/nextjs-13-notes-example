import { Metadata } from "next";
import { NewNotePage } from "@/SmartComponents/NewNotePage/NewNotePage";

type NewNoteProps = {
  params: {}
}

export const metadata: Metadata = {
  title: 'Create new note',
  description: '',
}


const NewNote = async ({ params }: NewNoteProps) => {
  return (
    <main>
      <NewNotePage />
    </main>
  )
}

export default NewNote;
