import { Metadata } from "next";
import { NewNotePage } from "./NewNotePage/NewNotePage";

type NewNoteProps = {
  params: {}
}

export const metadata: Metadata = {
  title: 'New note',
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
