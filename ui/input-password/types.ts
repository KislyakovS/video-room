import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface InputPasswordProps extends DefaultProps {
    error?: string;
    type?: never;
}
