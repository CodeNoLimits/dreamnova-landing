'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { ReactNode } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-display font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        outline:
          'border border-gold bg-transparent text-gold hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/30',
        filled:
          'bg-gradient-to-r from-gold to-gold/80 text-sacred-black hover:shadow-lg hover:shadow-gold/50 active:scale-95',
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
);

interface SacredButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export function SacredButton({
  variant,
  size,
  children,
  className,
  href,
  onClick,
  ...props
}: SacredButtonProps) {
  const buttonClass = buttonVariants({ variant, size, className });

  // Render as Link if href is provided
  if (href) {
    return (
      <Link href={href}>
        <a className={buttonClass} onClick={onClick}>
          {children}
        </a>
      </Link>
    );
  }

  // Render as regular button
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
