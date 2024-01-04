import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps })
{
  return (
    <div className="font-body">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
