import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { cn } from "@bem-react/classname";
import "./Modal.css";

const block = cn("Modal");

interface PropsModal {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
  size?: "medium" | "large";
  className?: string;
}

export const Modal: FC<PropsModal> = ({
  isVisible,
  children,
  onClose,
  className,
  size = "medium",
}) => {
  // Убираем скролл на основной странице
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "inherit";
  }, [isVisible]);
  useEffect(() => {
    // Привязка закрития к Escape
    const cb = (e: KeyboardEvent) =>
      e.key === "Escape" && isVisible && onClose();
    document.addEventListener("keydown", cb);
    return () => document.removeEventListener("keydown", cb);
  }, [onClose, isVisible]);
  if (!isVisible) return null;
  return ReactDOM.createPortal(
    <div className={block("", [className])}>
      <div className={block("Shadow")} onClick={onClose} />
      <div className={block("Content", { size: size })}>{children}</div>
    </div>,
    document.body
  );
};
