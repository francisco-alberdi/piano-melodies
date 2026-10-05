import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "default" | "cta" | "ghost";
}

export default function Button({
  children,
  onClick,
  type = "button",
  className,
  disabled = false,
  variant = "default",
}: ButtonProps) {
  const variantClass =
    variant === "cta"
      ? styles.cta
      : variant === "ghost"
        ? styles.ghost
        : styles.button;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClass} ${className || ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
