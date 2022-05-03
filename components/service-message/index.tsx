import { FC } from 'react';
import clsx from 'clsx';

import styles from './service-message.module.css';

interface ServiceMessageProps {
    className?: string;
    accent?: string;
    text: string;
}

const ServiceMessage: FC<ServiceMessageProps> = ({ className, accent, text }) => {
    return <p className={clsx(styles.message, className)}>
        {accent && <span className={styles.accent}>{accent} </span>}
        {text}
    </p>;
};

export default ServiceMessage;