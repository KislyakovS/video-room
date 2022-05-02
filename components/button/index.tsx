import { forwardRef, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
    return (
        <button {...props} ref={ref} className={clsx(styles.button, className)}>
            {children}
        </button>
    )
});

Button.displayName = 'Button';

export default Button;
