import { forwardRef } from 'react';
import clsx from 'clsx';

import ButtonProps from './button.type';

import styles from './button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
    return (
        <button {...props} ref={ref} className={clsx(styles.button, className)}>
            {children}
        </button>
    )
});

Button.displayName = 'Button';

export default Button;
