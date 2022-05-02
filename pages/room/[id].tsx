import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { Header, Logo, Container } from 'components';

const Room: NextPage = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Room - {router.query.id}</title>
            </Head>
            <Container>
                <Header leftSide={<Logo href='/' />} />
                <main>
                </main>
            </Container>
        </>
    )
}

export default Room;
