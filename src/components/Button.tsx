import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick: () => void;
}

const Button = ({ children, color = "info", onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
