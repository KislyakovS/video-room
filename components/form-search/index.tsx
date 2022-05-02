import { FC } from 'react';

import Input from '../input';
import ButtonIcon from '../button-icon';

import styles from './form-search.module.css';

const FormSearch: FC = () => {
    return <form className={styles.form}>
        <Input className={styles.input} type='search' placeholder='Search...' />
        <ButtonIcon className={styles.button} type='submit' icon='search' aria-label='Search' />
    </form>
};

export default FormSearch;