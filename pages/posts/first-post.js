import Link from 'next/link'
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return <Layout>
    <Head>
      <title>FirstPost</title>
    </Head>
    <h1>My First Post</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
  </Layout>
}

export default FirstPost;