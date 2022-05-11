import { forwardRef } from 'react';
import clsx from 'clsx';

import { ButtonIconProps } from './types';
import { ICONS } from './constants';

import styles from './button-icon.module.css';

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(({ className, icon, ...props }, ref) => {
    const Icon = ICONS[icon];

    return (
        <button {...props} ref={ref} className={clsx(styles.button, className)}>
            <Icon />
        </button>
    )
});

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
