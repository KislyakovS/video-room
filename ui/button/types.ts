import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends DefaultProps { };