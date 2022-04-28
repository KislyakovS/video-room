import { useState, FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import Input from '../input';

import EyeIcon from './eye.svg';
import EyeCloseIcon from './eye-close.svg';

import styles from './input-password.module.css';

type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface InputPasswordProps extends InputElement {
    error?: string;
    type?: never;
}

const InputPassword: FC<InputPasswordProps> = ({ className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onClickShowPassword = () => {
        setShowPassword(show => !show);
    }

    return (
        <div className={clsx(styles.wrapper, className)}>
            <Input {...props} className={styles.input} type={showPassword ? 'text' : 'password'} />
            <button
                className={styles.button}
                onClick={onClickShowPassword}
                aria-label={showPassword ? 'Show password' : 'Hide password'}
            >
                {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
            </button>
        </div>
    );
};

export default InputPassword;