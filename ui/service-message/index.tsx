import { FC } from 'react';
import clsx from 'clsx';

import styles from './service-message.module.css';

interface ServiceMessageProps {
    className?: string;
    accentText?: string;
    text: string;
}

const ServiceMessage: FC<ServiceMessageProps> = ({ className, accentText, text }) => {
    return <p className={clsx(styles.message, className)}>
        {accentText && <span className={styles.accent}>{accentText} </span>}
        {text}
    </p>;
};

export default ServiceMessage;