import Head from 'next/head';
import type { NextPage } from 'next';

import { Header, Container, FormCreateRoom } from 'components';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Video Room</title>
            </Head>
            <Container>
                <Header />
                <FormCreateRoom className='form-create-room' />
            </Container>
        </>
    )
}

export default Home;
