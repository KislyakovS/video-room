import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default interface ButtonProps extends DefaultProps {
    children: ReactNode,
};