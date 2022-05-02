import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './input.module.css';

type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface InputProps extends InputElement {
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error = '', ...props }, ref) => {
    const hasError = error.trim() !== '';
    const inputClasses = clsx(styles.input, {
        [styles.error]: hasError,
    });

    return (
        <div className={className}>
            <input {...props} className={inputClasses} ref={ref} />
            {hasError && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;