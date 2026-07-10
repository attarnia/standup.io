function Button({
  children,
  type,
  outline = false,
  onClick,
  color = "primary",
  disabled = false,
  className = "",
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  outline?: boolean;
  full?: boolean;
  onClick?: () => void;
  color?: "primary" | "success" | "error";
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${outline ? "btn-outline btn hover:text-surface" : "btn"}
        ${color === "success" ? "btn-success" : ""}
        ${color === "error" ? "btn-error" : ""}
        ${className}
      `}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
