import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default interface CheckboxProps extends DefaultProps {
    type?: never;
    children: ReactNode;
}