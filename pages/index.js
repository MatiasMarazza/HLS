import Head from 'next/head'
import VideoPlayer from '../components/video-player'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js & HLS.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <VideoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />

      <style jsx>{`
        .container {
          max-height: 100vh;
          width:100%;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
