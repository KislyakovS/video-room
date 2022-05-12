import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { FormSearch, Chat, NextVideos } from 'components';
import { Header, Logo, Container, OnlineCounter, Video, Aside } from 'ui';

import 'swiper/css/bundle';

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
                        <Video className="mb-20" title="Crazy Frog - Axel F" controls>
                            <source src="/crazy-frog-axel-f.mp4" type="video/mp4" />
                        </Video>
                        <NextVideos />
                    </section>
                    <Aside sticky>
                        <Chat />
                    </Aside>
                </main>
            </Container>
        </>
    )
}

export default Room;
