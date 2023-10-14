import { useEffect, useRef } from "react";

function useClickOutsideDetector<T extends HTMLElement>(
  ref: React.RefObject<T>,
  isOpen: boolean,
  onClose: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, ref]);

  return null;
}

export default useClickOutsideDetector;
