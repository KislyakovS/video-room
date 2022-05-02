import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './header.module.css';

interface HeaderProps {
    className?: string;
    leftSide?: ReactNode,
    center?: ReactNode,
    rightSide?: ReactNode,
}

const Header: FC<HeaderProps> = ({ className, leftSide, center, rightSide }) => {
    return (
        <header className={clsx(className, styles.header)}>
            <div>{leftSide}</div>
            <div>{center}</div>
            <div>{rightSide}</div>
        </header>
    );
};

export default Header;
