import React, { ReactNode } from "react";
import Link from "next/link";
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils";


const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'hover:bg-blue-600/80 bg-primary text-primary-foreground',
        destructive:
          'hover:bg-destructive/90 bg-destructive text-destructive-foreground',
        outline:
          'border border-border bg-accent hover:bg-accent-foreground/80 hover:text-accent-foreground',
        secondary:
          'hover:bg-card bg-secondary text-secondary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-7 rounded-sm px-3 text-[12px]',
        md: 'h-8 rounded-sm px-4 text-[13px]',
        lg: 'h-12 rounded-sm px-8 text-[15px]',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface buttonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  btnName: string;
  icon?: ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, buttonTypes>(({
  btnName,
  icon,
  variant,
  className,
  size,
  ...rest
}, ref) => {
  return (
    <button ref={ref} {...rest} className={cn(buttonVariants({ variant, size, className }))}>
      <span className="">
        {btnName}
      </span>
      {icon && <span className="">{icon}</span>}
    </button>
  );
})

export default Button;
Button.displayName = 'Button';


export interface LinksTypes extends React.LinkHTMLAttributes<HTMLLinkElement>, VariantProps<typeof buttonVariants> {
  btnName: string;
  ButtonClick: () => void;
  icon?: ReactNode;
  href: string;
};

export const LinkBtn = React.forwardRef<HTMLLinkElement, LinksTypes>(({
  btnName,
  ButtonClick,
  icon,
  size,
  variant,
  className,
  href,
}: LinksTypes) => {
  return (
    <Link
      href={href}
      onClick={ButtonClick}
      className={cn(buttonVariants({ size, variant, className }))}
    >
      <span className="text-[18px] text-gray-600">{icon}</span>
      <span className="text-[14px] font-normal text-gray-500">
        {btnName}
      </span>
    </Link>
  );
})


LinkBtn.displayName = 'LinkBtn';



export interface InputFieldTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
}


export const InputField = React.forwardRef<HTMLInputElement, InputFieldTypes>(({ className, ...props }) => {

  return (
    <input {...props} className={cn(` rounded-sm border border-border bg-input focus:outline-none text-[13px] px-3 py-[5px] w-full ${className}`)} />
  )
})

InputField.displayName = 'InputField'

export interface labelContent extends React.LabelHTMLAttributes<HTMLLabelElement> {

}

export const LabelContent = React.forwardRef<HTMLLabelElement, labelContent>(({ className, ...props }, ref) => {
  return (
    <label ref={ref} {...props} className={cn(`text-[13px] font-normal text-card ${className}`)}></label>
  )
})

LabelContent.displayName = 'LabelContent' 