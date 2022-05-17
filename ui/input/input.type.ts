import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default interface InputProps extends DefaultProps {
    fullWidth?: boolean;
    endAdornment?: ReactElement;
    error?: string;
}