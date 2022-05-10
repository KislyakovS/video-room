import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import notFound from './not-found.png';

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
            <Image src={notFound} alt='Sorry, we were unable to find that page.' />
        </section>
    )
};

export default NotFound;