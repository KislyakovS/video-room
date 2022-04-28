import { useId, FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import CheckIcon from './check.svg';

import styles from './checkbox.module.css';

type CheckboxElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface CheckboxProps extends CheckboxElement {
    className?: string;
    type?: never;
}

const Checkbox: FC<CheckboxProps> = ({ className, children, ...props }) => {
    const id = useId();

    return (
        <>
            <input {...props} type="checkbox" className={styles.input} id={id} />
            <label className={clsx(styles.label, className)} htmlFor={id}>
                <span className={styles.checked}><CheckIcon /></span>
                <span>{children}</span>
            </label>
        </>
    )
};

export default Checkbox;
