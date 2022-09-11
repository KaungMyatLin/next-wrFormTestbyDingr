import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible"/>
                    <meta name="news_keywords" content="Google Meta Tag, World Cup, Brazil 2014, Spain vs Netherlands, soccer, football"></meta>
                </Head>
                <body>
                    <div id="overlays" />
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument