import Image from 'next/image'
import { Inter } from 'next/font/google'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { NextPage } from 'next'
import Link from 'next/link'
import { APP_NAME } from '@/components/commom/AppHead'

const inter = Inter({ subsets: ['latin'] })

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <DefaultLayout title={'Home Page'} keywords='blog, dev blogs'>
      <header id="masthead" className="site-header site-default">
        <div className="hgroup-wrap">
            <div className="container">
                <section className="site-branding">
                  <Link className="custom-logo-link" rel="Home" href={'/'}>
                    <Image src={'/images/logo.png'} alt={APP_NAME} width={245} height={50} className="custom-logo" />
                  </Link>
                </section>
            </div>
        </div>
    </header>
    </DefaultLayout>
  )
}

export default Home
