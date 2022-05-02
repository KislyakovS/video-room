import { useState, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import Input from '../input';
import ButtonIcon from '../button-icon';

import styles from './input-password.module.css';

type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface InputPasswordProps extends InputElement {
    error?: string;
    type?: never;
}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const onClickShowPassword = () => {
        setShowPassword(show => !show);
    }

    return (
        <div className={clsx(styles.wrapper, className)}>
            <Input {...props} ref={ref} className={styles.input} type={showPassword ? 'text' : 'password'} />
            <ButtonIcon
                type='button'
                className={styles.button}
                onClick={onClickShowPassword}
                aria-label={showPassword ? 'Show password' : 'Hide password'}
                icon={showPassword ? 'eyeClose' : 'eye'}
            />
        </div>
    );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;