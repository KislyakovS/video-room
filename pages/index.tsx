import Head from 'next/head';
import type { NextPage } from 'next';

import { FormCreateRoom } from 'components';
import { Header, Logo, Container } from 'ui';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Video Room</title>
            </Head>
            <Container>
                <Header leftSide={<Logo />} />
                <main>
                    <FormCreateRoom className='center' />
                </main>
            </Container>
        </>
    )
}

export default Home;
