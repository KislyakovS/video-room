import { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';
import clsx from 'clsx';

import Input from '../input';
import ButtonIcon from '../button-icon';

import styles from './form-search.module.css';

type FormSearchProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const FormSearch: FC<FormSearchProps> = ({ className, ...props }) => {
    return <form {...props} className={clsx(styles.form, className)}>
        <Input className={styles.input} type='search' placeholder='Search...' />
        <ButtonIcon className={styles.button} type='submit' icon='search' aria-label='Search' />
    </form>
};

export default FormSearch;