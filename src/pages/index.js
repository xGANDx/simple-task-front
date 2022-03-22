import Head from 'next/head'
import Tasks from '../modules/Tasks'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tasks</title>
        <meta name="description" content="Generated by Gand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Tasks />
      </main>

    </div>
  )
}