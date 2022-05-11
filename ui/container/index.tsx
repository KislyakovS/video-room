import { FC } from 'react';
import clsx from 'clsx';

import { ContainerProps } from './types';

import styles from './container.module.css';

const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
    return (
        <div {...props} className={clsx(styles.container, className)}>{children}</div>
    )
};

export default Container;