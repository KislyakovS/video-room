import { forwardRef, DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';

import styles from './input.module.css';

type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface InputProps extends InputElement {
    fullWidth?: boolean;
    endAdornment?: ReactElement;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, endAdornment, fullWidth = false, error = '', ...props }, ref) => {
    const hasError = error.trim() !== '';
    const inputClasses = clsx(styles.input, {
        [styles.error]: hasError,
        [styles.indentRight]: endAdornment,
        [styles.fullWidth]: fullWidth
    });

    return (
        <div className={clsx(styles.wrapper, className)}>
            <input {...props} className={inputClasses} ref={ref} />
            {endAdornment && <div className={styles.endAdornment}>{endAdornment}</div>}
            {hasError && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;