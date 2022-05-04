import { FC } from 'react';
import clsx from 'clsx';

import styles from './message.module.css';

export enum MessageType {
    my,
    other,
    service,
}

interface MessageProps {
    type: MessageType,
    name?: string;
    text: string;
    fullDate: string;
    time: string;
}

const Message: FC<MessageProps> = ({ type, name, text, fullDate, time }) => {
    if (type === MessageType.service) {
        return <p className={styles.serviceMessage}>
            {name && <span className={styles.name}>{name} </span>}
            {text}
        </p>
    }

    const messageClasses = clsx(styles.message, {
        [styles.my]: type === MessageType.my,
        [styles.other]: type === MessageType.other
    });

    return (
        <div className={messageClasses}>
            <div className={styles.bubble}>
                {name && <span className={styles.name}>{name}</span>}
                <p className={styles.text}>{text}</p>
                <time className={styles.time} dateTime={fullDate}>{time}</time>
            </div>
            <span className={styles.spacer} />
        </div>
    );
};

export default Message;