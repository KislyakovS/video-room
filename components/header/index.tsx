import { FC } from 'react';

import Logo from '../logo';

import styles from './header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
};

export default Header;
