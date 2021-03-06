import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { ICONS } from '../icon/constants';

type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default interface ButtonIconProps extends DefaultProps {
    icon: keyof typeof ICONS,
    'aria-label': string,
}