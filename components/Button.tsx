import { cn } from "@sglara/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnClassName?: string;
}

export default function Button({ children, btnClassName, ...props }: ButtonProps) {
  return (
    <button
      className={cn(`p-4 relative hover:text-black group overflow-hidden shadow-[0_0_20px_15px_#02DBB233,inset_0_0_20px_20px_#02DBB233] cursor-pointer border-4 border-[#02DBB2] text-2xl transition-all`, props.className)}
    >
      <span className={cn(`z-10`, btnClassName)}>
      {children}
      </span>
      <span
          className="absolute bg-[#02DBB2] rounded-full w-0 h-0 transition-all duration-600 ease-out z-0
                   group-hover:w-[250%] group-hover:h-[150%]
                   transform -translate-y-1/2 translate-x-10"
          style={{top: "50%", right: "1.25rem"}}
      ></span>
    </button>
  );
}
