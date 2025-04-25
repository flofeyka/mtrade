import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={`p-4 shadow-[0_0_20px_15px_#02DBB233,inset_0_0_20px_20px_#02DBB233] cursor-pointer border-4 border-[#02DBB2] text-2xl transition-all ${props.className}`}
    >
      {children}
    </button>
  );
}
