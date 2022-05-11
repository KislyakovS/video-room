import { useReducer, forwardRef } from 'react';

import { InputPasswordProps } from './types';

import Input from '../input';
import ButtonIcon from '../button-icon';

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(({ className, ...props }, ref) => {
    const [showPassword, toggleShowPassword] = useReducer((state) => !state, false);

    return (
        <Input
            {...props}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            fullWidth={true}
            endAdornment={
                <ButtonIcon
                    type='button'
                    onClick={toggleShowPassword}
                    aria-label={showPassword ? 'Show password' : 'Hide password'}
                    icon={showPassword ? 'eye' : 'eyeClose'}
                />
            }
        />
    );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;