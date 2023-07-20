import { useEffect, useRef } from "react";
import { ModalWrapper, ModalContent } from "./styled";
import { Icon } from '@iconify/react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen?: boolean) => void;
  children: React.ReactNode;
  width: string;
  height: string;
}

export const Modal = ({ isOpen, setIsOpen, children, width, height }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as HTMLElement)) {
        setIsOpen();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        setIsOpen();
      }
    };

    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  return isOpen ? (
    <ModalWrapper>
      <ModalContent ref={modalRef} width={width} height={height}>
        <Icon icon="ph:x" onClick={() => setIsOpen(false)} />
        {children}
      </ModalContent>
    </ModalWrapper>
  ) : null;
};
