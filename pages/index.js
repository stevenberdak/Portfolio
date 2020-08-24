import Head from 'next/head'

import Hero from '../components/hero'

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
            <Hero>Test</Hero>
        </div>
    )
}

export default Index