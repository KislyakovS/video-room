import { FC } from 'react';
import clsx from 'clsx';

import styles from './not-found.module.css';

interface NotFoundProps {
    className?: string;
}

const NotFound: FC<NotFoundProps> = ({ className }) => {
    return (
        <section className={clsx(className, styles.wrapper)}>
            <span className={styles.code}>404</span>
            <h3 className={styles.title}>Not Found</h3>
            <span className={styles.legend}>Sorry, we were unable to find that page.</span>
        </section>
    )
};

export default NotFound;