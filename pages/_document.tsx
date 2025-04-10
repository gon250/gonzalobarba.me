import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          src="https://umami.mardeleva.synology.me/script.js"
          data-website-id="2f85967f-f2b6-4762-922a-2e7aacaa7daa"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
