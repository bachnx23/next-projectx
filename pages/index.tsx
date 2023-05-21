import { Inter } from 'next/font/google'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <DefaultLayout title={'Home Page'} keywords='blog, dev blogs' />
  )
}

export default Home
