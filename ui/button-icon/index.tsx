import { forwardRef } from 'react';
import clsx from 'clsx';

import Icon from '../icon';

import { ButtonIconProps } from './types';

import styles from './button-icon.module.css';

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(({ className, icon, ...props }, ref) => {
    return (
        <button {...props} ref={ref} className={clsx(styles.button, className)}>
            <Icon type={icon} />
        </button>
    )
});

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
