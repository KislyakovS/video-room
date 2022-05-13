import { FC } from 'react';
import clsx from 'clsx';

import { NotFoundProps } from './types';

import styles from './not-found.module.css';

const NotFound: FC<NotFoundProps> = ({ className, ...props }) => {
    return (
        <section {...props} className={clsx(className, styles.wrapper)}>
            <span className={styles.code}>404</span>
            <h3 className={styles.title}>Not Found</h3>
            <span>Sorry, we were unable to find that page.</span>
        </section>
    )
};

export default NotFound;