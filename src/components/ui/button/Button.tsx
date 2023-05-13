import clsx from "clsx";
import { cva, type VariantProps } from "cva";
import React from "react";

const buttonStyle = cva("rounded-3xl px-6 py-4 text-hs-v", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-red",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const myClassName = clsx(buttonStyle({ variant }), props.className);
  return <button {...props} className={myClassName} />;
};

export default Button;
