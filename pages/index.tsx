import Head from 'next/head'
import Link from 'next/link'

function IndexPage() {
  return (
    <>
      <Head>
        <title>@gon250</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid place-items-center my-6">
        <div className="flex">
          <img
            className="rounded-lg shadow-xl mx-12"
            width={300}
            height={300}
            src="/me.jpg"
            alt="personal_photo"
          />
          <div className="mx-12">
            <h3 className="font-courier text-3xl">Hey, I’m Gonzalo</h3>
            <p className="mt-8 text-gray-600 leading-6">
              I’m a full stack software developer, creative and ambitious. This
              website is a compilation of the things I have learned/shared over
              the years and in what I like to spend my free time.
            </p>
            <p className="mt-4 text-gray-600 leading-6">
              I have a{' '}
              <Link href="https://github.com/gon250">
                <span className="text-pink-400">GitHub</span>
              </Link>{' '}
              account where you can follow what I'm doing. Or you can contact me
              by{' '}
              <Link href="https://twitter.com/gon250">
                <span className="text-pink-400">Twitter</span>
              </Link>
              . Or both.
            </p>
            <p className="mt-4 text-gray-600 leading-6">
              You can read my posts or contact me.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
