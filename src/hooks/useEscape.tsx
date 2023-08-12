import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export const useEscape = () => {
  const router = useRouter();
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      router.replace('/');
    }
  }, [router]);

  useEffect(() => {
    window.addEventListener('keyup', escapeListener);
    return () => window.removeEventListener('keyup', escapeListener);
  }, [escapeListener]);

}
