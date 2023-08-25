// TODO: How mock useRouter

// import { fireEvent, render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom';
// import { NewNotePage } from "./NewNotePage";
// import { useEscape } from "@/hooks/useEscape";
//
// jest.mock('@/hooks/useEscape', () => ({
//   useEscape: jest.fn()
// }));
//
// describe('NewNotePage', () => {
//   it('test note list render', () => {
//     render(
//       <NewNotePage />
//     );
//
//     expect(screen.getByText('Create new note')).toBeInTheDocument();
//   })
//
//   it('test focus', () => {
//     render(
//       <NewNotePage />
//     );
//
//     const testValue = '123';
//
//     const input = screen.getByRole('input');
//     expect(input).toBeInTheDocument();
//   })
//
//   it('test focus', () => {
//     const { container } = render(
//       <NewNotePage />
//     );
//
//     const testValue = '../test';
//
//     const input = screen.getByRole('input');
//
//     fireEvent.change(input, { target: { value: testValue } })
//
//     expect(input).toHaveValue(testValue);
//     expect(container.querySelector('input:invalid')).toBeInTheDocument();
//   })
// })
