import { FC } from 'react';
import clsx from 'clsx';

import HeaderProps from './header.type';

import styles from './header.module.css';

const Header: FC<HeaderProps> = ({ className, leftSide, center, rightSide, ...props }) => {
    return (
        <header {...props} className={clsx(className, styles.header)}>
            <div className={styles.left}>{leftSide}</div>
            <div className={styles.center}>{center}</div>
            <div className={styles.right}>{rightSide}</div>
        </header>
    );
};

export default Header;
