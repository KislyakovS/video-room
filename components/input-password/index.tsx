import { useState, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import Input from '../input';
import ButtonIcon from '../button-icon';

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
        <Input
            {...props}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            fullWidth={true}
            endAdornment={
                <ButtonIcon
                    type='button'
                    onClick={onClickShowPassword}
                    aria-label={showPassword ? 'Show password' : 'Hide password'}
                    icon={showPassword ? 'eye' : 'eyeClose'}
                />
            }
        />
    );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;