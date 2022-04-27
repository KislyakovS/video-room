import { useId, FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import Check from './check.svg';

import styles from './checkbox.module.css';

type CheckboxElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface CheckboxProps extends CheckboxElement {
    className?: string;
    label: string;
    type?: never;
}

const Checkbox: FC<CheckboxProps> = ({ className, label, ...props }) => {
    const id = useId();

    return (
        <>
            <input {...props} type="checkbox" className={styles.input} id={id} />
            <label className={clsx(styles.label, className)} htmlFor={id}>
                <span className={styles.checked}><Check /></span>
                <span>{label}</span>
            </label>
        </>
    )
};

export default Checkbox;
