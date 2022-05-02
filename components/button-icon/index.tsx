import { forwardRef, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import SearchIcon from './assets/search.svg';
import EyeIcon from './assets/eye.svg';
import EyeCloseIcon from './assets/eye-close.svg';

const ICONS = Object.freeze({
    search: <SearchIcon />,
    eye: <EyeIcon />,
    eyeClose: <EyeCloseIcon />,
});

import styles from './button-icon.module.css';

type ButtonElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface ButtonIconProps extends ButtonElement {
    icon: keyof typeof ICONS,
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(({ className, icon, ...props }, ref) => {
    return (
        <button {...props} ref={ref} className={clsx(styles.button, className)}>
            {ICONS[icon]}
        </button>
    )
});

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
