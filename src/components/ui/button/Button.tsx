import clsx from "clsx";
import { cva, type VariantProps } from "cva";
import React from "react";
import { type IconType } from "react-icons";
import { FaPlus } from "react-icons/fa";
import If from "../if/If";

const buttonStyle = cva(
  "rounded-3xl text-hs transition-all p-2 px-6 h-12 flex justify-center items-center gap-1",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-light",
        danger: "bg-red text-white hover:bg-red-light",
        button3:
          "bg-[#F9FAFE] text-text-dark hover:bg-regular-dark hover:text-text-light dark:bg-[#DFE3FA] dark:hover:bg-white",
        button4:
          "bg-[#373B53] text-regular-light hover:text-text-light dark:bg-text dark:hover:bg-regular-dark dark:hover:text-text-light",
        button6: "bg-[#F9FAFE] text-text-dark hover:bg-[#DFE3FA]",
      },
      isPrimaryIcon: {
        true: "pl-2 gap-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      isPrimaryIcon: false,
    },
  },
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  type?: "button" | "submit" | "reset";
  StartIcon?: IconType;
  EndIcon?: IconType;
}

const withIconContainer = (element: React.ReactNode, className = "") => (
  <div className={`flex items-center justify-center ${className}`}>
    {element}
  </div>
);

const Button: React.FC<ButtonProps> = ({
  EndIcon,
  StartIcon,
  variant,
  children,
  isPrimaryIcon,
  type = "button",
  ...props
}) => {
  const buttonClassName = clsx(
    buttonStyle({ variant, isPrimaryIcon }),
    props.className,
  );

  return (
    <button {...props} type={type} className={buttonClassName}>
      {StartIcon && !isPrimaryIcon && withIconContainer(<StartIcon />)}
      <If condition={isPrimaryIcon}>
        {withIconContainer(
          <FaPlus />,
          "w-8 h-full rounded-full bg-white text-primary",
        )}
      </If>
      <span>{children}</span>
      {EndIcon && withIconContainer(<EndIcon />)}
    </button>
  );
};

export default Button;
