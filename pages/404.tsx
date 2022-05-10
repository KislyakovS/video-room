import Head from 'next/head';
import type { NextPage } from 'next';

import { Header, Logo, Container, NotFound } from 'ui';

const Custom404: NextPage = () => {
    return (
        <>
            <Head>
                <title>404 - Not Found</title>
            </Head>
            <Container>
                <Header leftSide={<Logo href='/' />} />
                <main>
                    <NotFound className='h-100' />
                </main>
            </Container>
        </>
    )
};

export default Custom404;
