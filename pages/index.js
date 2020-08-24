import Head from 'next/head'

import Hero from '../components/hero'
import Layout from '../components/layout'

function Index() {
    return (
        <div>
            <Head>
                <title>Steven Berdak - Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                { /* Bootstrap CDN Link */ }
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                />
            </Head>
            <Layout>
                <Hero>Test</Hero>
            </Layout>
        </div>
    )
}

export default Index