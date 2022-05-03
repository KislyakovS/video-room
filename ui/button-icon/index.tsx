import { forwardRef, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import SearchIcon from './assets/search.svg';
import EyeIcon from './assets/eye.svg';
import EyeCloseIcon from './assets/eye-close.svg';
import PlaneIcon from './assets/plane.svg';

const ICONS = Object.freeze({
    eyeClose: <EyeCloseIcon />,
    eye: <EyeIcon />,
    plane: <PlaneIcon />,
    search: <SearchIcon />,

});

import styles from './button-icon.module.css';

type DefaultAttributesType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface ButtonIconProps extends DefaultAttributesType {
    icon: keyof typeof ICONS,
    'aria-label': string,
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
