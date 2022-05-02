import Head from 'next/head';
import type { NextPage } from 'next';

import { Header, Logo, Container, FormCreateRoom } from 'components';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Video Room</title>
            </Head>
            <Container>
                <Header leftSide={<Logo />} />
                <main>
                    <FormCreateRoom className='form-create-room' />
                </main>
            </Container>
        </>
    )
}

export default Home;
