import { FC } from 'react';

import FormSendMessage from '../form-send-message';
import { Message, MessageType } from 'ui';

import styles from './chat.module.css';

const chats = [
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'Hello, my friends',
        fullDate: new Date(),
        time: '7:10',
    },
    {
        id: Math.random(),
        type: MessageType.my,
        text: 'Hello!',
        fullDate: new Date(),
        time: '7:11',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Boris Y.',
        text: 'Hi',
        fullDate: new Date(),
        time: '7:15',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'How are you doing?',
        fullDate: new Date(),
        time: '7:30',
    },
    {
        id: Math.random(),
        type: MessageType.my,
        text: 'Nature is simple and does not indulge in unnecessary reasons.',
        fullDate: new Date(),
        time: '7:31',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Boris Y.',
        text: 'Mine are great. How are you?',
        fullDate: new Date(),
        time: '7:34',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'Perfectly 😀',
        fullDate: new Date(),
        time: '7:37',
    },
    {
        id: Math.random(),
        type: MessageType.my,
        text: 'Nature is simple and does not indulge in unnecessary reasons.',
        fullDate: new Date(),
        time: '7:31',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'Perfectly 😀',
        fullDate: new Date(),
        time: '7:37',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Boris Y.',
        text: 'Mine are great. How are you?',
        fullDate: new Date(),
        time: '7:34',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'Perfectly 😀',
        fullDate: new Date(),
        time: '7:37',
    },
    {
        id: Math.random(),
        type: MessageType.my,
        text: 'Nature is simple and does not indulge in unnecessary reasons.',
        fullDate: new Date(),
        time: '7:31',
    },
    {
        id: Math.random(),
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'Perfectly 😀',
        fullDate: new Date(),
        time: '7:37',
    },
    {
        id: Math.random(),
        type: MessageType.service,
        name: 'Boris Y.',
        text: 'left the room.',
        fullDate: new Date(),
        time: '7:30',
    }
];

const Chat: FC = () => {
    return <section className={styles.wrapper}>
        <ol className={styles.messages}>
            {chats.map(message => (
                <li key={message.id}>
                    <Message
                        type={message.type}
                        name={message.name}
                        text={message.text}
                        fullDate={message.fullDate.toString()}
                        time={message.time}
                    />
                </li>
            ))}
        </ol>
        <FormSendMessage className={styles.sendMessage} />
    </section>
};

export default Chat;