import { Html, Head, Main, NextScript } from 'next/document'
 //in file vase ine ke betoonim rahat tar head va title va ... ro baraye tamame safahat biarim!
export default function Document() {
  return (
    <Html lang='fa'>
      <Head >
        <meta name='viewport'   content="width=device-width, initial-scale=1"/>
          {/* <title>salam</title> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}