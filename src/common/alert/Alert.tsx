import { useEffect, useRef } from "react";
import { AlertWrapper, AlertContent } from "./styled";
import { Icon } from '@iconify/react';


interface AlertProps {
  isOpenAlert: boolean;
  onClose: () => void;
  children: React.ReactNode;
  color?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
}

export const Alert = ({ isOpenAlert, onClose, children, width, height, color }: AlertProps) => {
  const AlertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (AlertRef.current && !AlertRef.current.contains(e.target as HTMLElement)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return isOpenAlert ? (
    <AlertWrapper>
      <AlertContent ref={AlertRef} color={color ?? "red"} width={width ?? "auto"} height={height ?? "auto"}>
        <Icon icon="ph:x" onClick={onClose} />
        {children}
      </AlertContent>
    </AlertWrapper>
  ) : null;
};
