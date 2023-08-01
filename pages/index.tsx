import Image from 'next/image'
import { GetServerSideProps, NextPage } from 'next'
import { Post } from '@/types/Type'
import { Inter } from 'next/font/google'
import { latestPosts } from '@/samples/LatestPost'
import { postSliders } from '@/samples/PostSliders'
import PostItem from '@/components/commom/PostItem'
import DefaultLayout from '@/components/layouts/DefaultLayout'
// const $ = require("jquery");
// if (typeof window !== "undefined") {
//    window.$ = window.jQuery = require("jquery");
// }
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import { postMoments } from '@/samples/Moments'
import httpRequest from '@/types/HttpRequest'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {ssr: false})

const inter = Inter({ subsets: ['latin'] })

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <DefaultLayout title={'Home Page'} keywords='blog, dev blogs' isHome={true}>
      <div className="row" style={{ ['transform' as string]: 'none'}} >
        <div id="primary" className="content-area custom-col-8"
            style={{ 
              ['position' as string ]: 'relative',
              ['overflow' as string]: 'visible',
              ['box-sizing' as string]: 'border-box',
              ['min-height' as string]: '1px'
            }}
            >
            <div className="theiaStickySidebar" 
              style={{
                ['padding-top' as string]: '0px',
                ['padding-bottom' as string]: '1px',
                ['position' as string]: 'static',
                ['transform' as string]: 'none'
              }}
              >
                <main id="main" className="site-main">
                    <section id="blog_personal_latest-2" className="post-blog-section flexible-post">
                        { latestPosts.map((post, index) => (
                            <PostItem key={index} idx={index + 1} post={post} imgWidth={363} imgHeight={470} showBackground={index == 0}/>
                        ))}
                    </section>
                    <section id="blog_personal_promo_slider-2" className="unique-post-section">
                        <OwlCarousel 
                            className="owl-carousel owl-theme owl-slider-demo unique-post-slider owl-loaded owl-drag"
                            items={1}
                            loop={true}
                            autoPlay={true}
                            smartSpeed={900}
                            animateOut={'fadeOut'}
                            autoplayTimeout={5000}
                            >
                            {postSliders.map((post, index) => (
                                <PostItem key={index} post={post} imgWidth={752} imgHeight={450} showBackground={false}/>
                            ))}
                        </OwlCarousel>
                    </section>
                    <section id="blog_personal_two_column-2" className="post-blog-section">
                        <header className="entry-header heading">
                            <h2 className="entry-title">Moments</h2>
                        </header>
                        <div className="row">
                            {postMoments.map((post, index) => (
                                <div key={index} className={classNames("custom-col-6", `post-wrapper-${index}`)}>
                                    <PostItem key={index} idx={index} post={post} imgWidth={360} imgHeight={251} type={2} isShowContent={index == 0} showBackground={false} />                                        
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
        <div id="secondary" className="widget-area custom-col-4"
              style={{ 
                ['position' as string ]: 'relative',
                ['overflow' as string]: 'visible',
                ['box-sizing' as string]: 'border-box',
                ['min-height' as string]: '1px'
              }}
              >
              <div className="theiaStickySidebar"
                  style={{
                    ['padding-top' as string]: '0px',
                    ['padding-bottom' as string]: '1px',
                    ['position' as string]: 'static',
                    ['transform' as string]: 'none'
                  }}
                  >
                  <aside id="blog_personal_promo_slider-3" className="widget unique-post-section">
                        <OwlCarousel 
                            className="owl-carousel owl-theme owl-slider-demo unique-post-slider owl-loaded owl-drag"
                            items={1}
                            loop={true}
                            autoPlay={true}
                            smartSpeed={900}
                            animateOut={'fadeOut'}
                            >
                            {postSliders.map((post, index) => (
                                <PostItem key={index} post={post} imgWidth={752} imgHeight={450} showBackground={false}/>
                            ))}
                        </OwlCarousel>
                  </aside>
              </div>
          </div>
      </div>
    </DefaultLayout>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps<any> = 
async () => {
  const result = await httpRequest.get('/users')
  
  return {
    props: {

    }
  }
}