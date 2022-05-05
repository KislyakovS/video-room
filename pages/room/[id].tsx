import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { FormSearch, Chat } from 'components';
import { Header, Logo, Container, OnlineCounter, Video } from 'ui';


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
                        <Video title="Crazy Frog - Axel F" autoPlay controls>
                            <source src="/crazy-frog-axel-f.mp4" type="video/mp4" />
                        </Video>
                        <ul className="next-video">
                            <li></li>
                            <li></li>
                        </ul>
                    </section>
                    <Chat />
                </main>
            </Container>
        </>
    )
}

export default Room;
