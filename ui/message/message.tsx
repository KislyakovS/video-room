import { FC } from 'react';
import clsx from 'clsx';

import MessageProps, { MessageType } from './message.type';

import styles from './message.module.css';

const Message: FC<MessageProps> = ({ className, type, name, text, fullDate, time, ...props }) => {
    if (type === MessageType.service) {
        return <div {...props} className={clsx(className, styles.serviceMessage)}>
            {name && <span className={styles.name}>{name} </span>}
            {text}
        </div>
    }

    const hasTime = fullDate && time;
    const messageClasses = clsx(className, styles.message, {
        [styles.my]: type === MessageType.my,
        [styles.other]: type === MessageType.other
    });

    return (
        <div {...props} className={messageClasses}>
            <div className={styles.bubble}>
                {name && <span className={styles.name}>{name}</span>}
                <p className={styles.text}>{text}</p>
                {hasTime && <time className={styles.time} dateTime={fullDate}>{time}</time>}
            </div>
            <span className={styles.spacer} />
        </div>
    );
};

export default Message;