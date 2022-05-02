import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { Header, Logo, Container, FormSearch, FormSendMessage, OnlineCounter } from 'components';

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
                        <FormSendMessage />
                    </section>
                </main>
            </Container>
        </>
    )
}

export default Room;
