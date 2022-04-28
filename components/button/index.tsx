import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
    return (
        <button {...props} className={clsx(styles.button, className)}>
            {children}
        </button>
    )
};

export default Button;
