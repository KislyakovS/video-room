import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { ICONS } from './constants';

type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonIconProps extends DefaultProps {
    icon: keyof typeof ICONS,
    'aria-label': string,
}