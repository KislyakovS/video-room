import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import Icon from '../icon';

import CheckboxProps from './checkbox.type';

import styles from './checkbox.module.css';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, children, ...props }, ref) => {
    const id = useId();

    return (
        <>
            <input {...props} ref={ref} type="checkbox" className={styles.input} id={id} />
            <label className={clsx(styles.label, className)} htmlFor={id}>
                <span className={styles.checked}><Icon type="checked" /></span>
                <span>{children}</span>
            </label>
        </>
    )
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
