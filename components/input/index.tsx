import { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './input.module.css';

type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface InputProps extends InputElement {
    error?: string;
}

const Input: FC<InputProps> = ({ className, error = '', ...props }) => {
    const hasError = error.trim() !== '';
    const inputClasses = clsx(styles.input, {
        [styles.error]: hasError,
    });

    return (
        <div className={className}>
            <input className={inputClasses} {...props} />
            {hasError && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default Input;