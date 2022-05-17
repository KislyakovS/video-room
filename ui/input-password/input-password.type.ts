import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default interface InputPasswordProps extends DefaultProps {
    error?: string;
    type?: never;
}
