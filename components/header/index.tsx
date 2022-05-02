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
            {leftSide}
            {center}
            {rightSide}
        </header>
    );
};

export default Header;
