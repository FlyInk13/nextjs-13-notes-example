import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { NoteIndexPage } from "@/app/NoteIndexPage/NoteIndexPage";

describe('NoteIndexPage', () => {
  it('test note list render', () => {
    render(
      <NoteIndexPage
        noteNames={['note 1', 'note 2']}
      />
    )

    expect(screen.getByText('Create new note')).toBeInTheDocument();
    expect(screen.getByText('note 1')).toBeInTheDocument();
    expect(screen.getByText('note 2')).toBeInTheDocument();
  })

  it('test focus', () => {
    render(
      <NoteIndexPage
        noteNames={['note 1', 'note 2']}
      />
    )

    expect(screen.getByText('Create new note')).toHaveFocus();

    const keyDownArrowDownEvent = new KeyboardEvent('keyup', { code: 'ArrowDown' });
    global.dispatchEvent(keyDownArrowDownEvent);

    expect(screen.getByText('note 1')).toHaveFocus();
  })
})
