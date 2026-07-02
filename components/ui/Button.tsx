
function Button({
  children,
  type,
  outline = false,
  onClick,
  color = "primary",
  className = "",
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  outline?: boolean;
  full?: boolean;
  onClick?: () => void;
  color?: "primary" | "success" | "error";
  className?: string;
}) {
    
  return (
    <button
      onClick={onClick}
      className={`
        ${outline ? "btn-outline" : "btn"}
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
