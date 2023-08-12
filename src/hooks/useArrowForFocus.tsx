import { useCallback, useEffect } from "react";

export const useArrowForFocus = (className: string) => {
  const escapeListener = useCallback((event: KeyboardEvent) => {
    const currentFocus = document.querySelector<HTMLElement>(':focus');
    let focusElement: Element | null = null;

    if (!currentFocus) {
      return;
    }

    if (event.code === 'ArrowDown') {
      focusElement = currentFocus.nextElementSibling;
    }

    if (event.code === 'ArrowUp') {
      focusElement = currentFocus.previousElementSibling;
    }

    if (focusElement instanceof HTMLElement) {
      focusElement.focus();
    }

  }, []);

  useEffect(() => {
    const focusElement = document.querySelector('.' + className);
    if (focusElement instanceof HTMLElement) {
      focusElement.focus();
    }

    window.addEventListener('keyup', escapeListener);
    return () => window.removeEventListener('keyup', escapeListener);
  }, [escapeListener]);
}
