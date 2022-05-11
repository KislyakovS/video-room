import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface InputProps extends DefaultProps {
    fullWidth?: boolean;
    endAdornment?: ReactElement;
    error?: string;
}