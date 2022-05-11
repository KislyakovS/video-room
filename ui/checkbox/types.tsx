import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface CheckboxProps extends DefaultProps {
    type?: never;
}