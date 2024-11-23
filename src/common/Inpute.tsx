import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          {...props}
          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-1 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${className}`}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
