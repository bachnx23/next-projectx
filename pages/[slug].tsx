import PageSidebar from '@/components/commom/PageSidebar';
import PostItem from '@/components/commom/PostItem';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { postDetail, relatedPosts } from '@/samples/PostDetail';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const PostDetail: FC<Props> = (props): JSX.Element => {
  return (
    <>
        <DefaultLayout title={'Post Detail'} >
            <div id="primary" className="content-area custom-col-8">
                <main id="main" className="site-main">
                    <div className="detail-page-wrapper">
                        <PostItem post={postDetail} imgWidth={1280} imgHeight={853} showBackground={false} />
                        <nav className="navigation post-navigation" aria-label="Posts">
                            <h2 className="screen-reader-text">Post navigation</h2>
                            <div className="nav-links">
                                <div className="nav-previous">
                                    <a href="https://demo.theme404.com/blog-personal-plus/things-you-dont-know-about-me/" rel="prev">
                                        Things you don’t know about me
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="related-post-section">
                        <header className="entry-header heading">
                            <h2 className="entry-title"><span>RELATED POST</span></h2>
                        </header>
                        <div className="post-item-wrapper post-item-has-2">
                            {relatedPosts.map((post) => (
                                <>
                                    <div className="post ">
                                        <figure className="featured-image">
                                            <Image key={post.slug} src={post.image} height={300} width={360} alt={post.title} />
                                        </figure>
                                        <div className="post-content">
                                            <header className="entry-header">
                                                <div className="entry-meta">
                                                    {post.categories.map((cat) => (
                                                        <>
                                                            <span className="cat-links">
                                                                <Link href={`/category/${cat.slug}`} title={cat.title}>{cat.title}</Link>
                                                            </span>
                                                        </>
                                                    ))}
                                                    <span className="posted-on"> 
                                                        <Link href={post.slug} title={post.title} rel={'bookmark'}>{post.create_time}</Link>
                                                    </span>
                                                    <span className="byline"> by 
                                                        <span className="author vcard">
                                                            <Link href={`/author/${post.author.slug}`} title={post.author.name}>{post.author.name}</Link>
                                                        </span>
                                                    </span>
                                                </div>
                                                <h3 className="entry-title">
                                                    <a href="https://demo.theme404.com/blog-personal-plus/far-far-away-in-the-sea/">{post.title}</a>
                                                </h3>
                                            </header>
                                            <div className="entry-content">
                                                {postDetail.content}
                                                <div className="read-more">
                                                    <Link href={post.slug} title={post.title}>Continue Reading</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <PageSidebar />
        </DefaultLayout>
    </>
  );
};

export default PostDetail;