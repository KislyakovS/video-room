import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './container.module.css';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
    return (
        <div className={clsx(styles.container, className)}>{children}</div>
    )
};

export default Container;