import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { Header, Logo, Container, FormSearch, FormSendMessage, OnlineCounter, Message, MessageType, ServiceMessage } from 'components';

const chats = [
    {
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'Hello, my friends',
        fullDate: new Date(),
        time: '7:10',
    },
    {
        type: MessageType.my,
        text: 'Hello!',
        fullDate: new Date(),
        time: '7:11',
    },
    {
        type: MessageType.other,
        name: 'Boris Y.',
        text: 'Hi',
        fullDate: new Date(),
        time: '7:15',
    },
    {
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'How are you doing?',
        fullDate: new Date(),
        time: '7:30',
    },
    {
        type: MessageType.my,
        text: 'Nature is simple and does not indulge in unnecessary reasons.',
        fullDate: new Date(),
        time: '7:11',
    },
    {
        type: MessageType.other,
        name: 'Boris Y.',
        text: 'Mine are great. How are you?',
        fullDate: new Date(),
        time: '7:31',
    },
    {
        type: MessageType.other,
        name: 'Isaac N.',
        text: 'Perfectly 😀',
        fullDate: new Date(),
        time: '7:30',
    },
]

const Room: NextPage = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Room - {router.query.id}</title>
            </Head>
            <Container>
                <Header
                    leftSide={<Logo href='/' />}
                    center={<FormSearch className='w-100' />}
                    rightSide={<OnlineCounter count={10} />}
                />
                <main className="room-main">
                    <section>
                        <div className="video"></div>
                        <ul className="next-video">
                            <li></li>
                            <li></li>
                        </ul>
                    </section>
                    <section className="chat">
                        Chat
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {chats.map((message, i) => <Message
                                key={i}
                                type={message.type}
                                name={message.name}
                                text={message.text}
                                fullDate={message.fullDate.toString()}
                                time={message.time}
                            />)}
                            <ServiceMessage
                                accent='Boris Y.'
                                text='left the room.'
                            />
                        </div>
                        <FormSendMessage />
                    </section>
                </main>
            </Container>
        </>
    )
}

export default Room;
