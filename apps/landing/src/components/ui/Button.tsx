import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'primary-lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const variants = {
      primary: 'btn-primary',
      'primary-lg': 'btn-primary-lg',
      ghost: 'btn-ghost',
      outline: 'btn-outline',
    };

    return (
      <button
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
