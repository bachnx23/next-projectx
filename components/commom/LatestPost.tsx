import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const featuredPost = [
    {
        title: 'New Beauty Products to Upgrade Your May',
        slug: 'new-beauty-products-to-upgrade-your-may',
        url: 'https://demo.theme404.com/blog-personal-plus/new-beauty-products-to-upgrade-your-may/',
        image: 'https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/08/photographer-407068_1280-380x570.jpg',
        create_time: 'August 14, 2018',
        categories: [
            {
                title: 'Stories',
                url: 'https://demo.theme404.com/blog-personal-plus/category/stories/'
            }
        ] 
    },
    {
        title: "Things you don't know about me",
        slug: 'things-you-dont-know-about-me',
        url: 'https://demo.theme404.com/blog-personal-plus/things-you-dont-know-about-me/',
        image: 'https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/girl-2618562-380x570.jpg',
        create_time: 'July 17, 2018',
        categories: [
            {
                title: 'Life',
                url: 'https://demo.theme404.com/blog-personal-plus/category/life/'
            },
            {
                title: 'Moments',
                url: 'https://demo.theme404.com/blog-personal-plus/category/moments/'
            },
        ] 
    },
    {
        title: "Cheerful Loving Couple Bakers",
        slug: 'cheerful-loving-couple-bakers/',
        url: 'https://demo.theme404.com/blog-personal-plus/cheerful-loving-couple-bakers/',
        image: 'https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/girl-2931287-380x570.jpg',
        create_time: 'July 16, 2018',
        categories: [
            {
                title: 'Moments',
                url: 'https://demo.theme404.com/blog-personal-plus/category/moments/'
            },
        ] 
    },
]

const LatestPost: FC<Props> = (props): JSX.Element => {
    return (
        <section id="blog_personal_plus_featured-2" className="featured-post">
                <div className="container">
                    <div className="box-width">
                        {featuredPost.map((post) => (
                            <article className="post" key={post.slug} >
                                <figure className="featured-image">
                                    <Image src={post.image} alt={post.title} width={380} height={570} 
                                        className="attachment-blog-personal-featured size-blog-personal-featured wp-post-image"
                                    />
                                </figure>
                                <div className="post-content">
                                    <header className="entry-header">
                                        <div className="entry-meta">
                                            <span className="cat-links"> 
                                                {post.categories.map((cate) => (
                                                    <Link key={cate.url} href={cate.url} rel='category tag'>
                                                        {cate.title}
                                                    </Link>
                                                ))}
                                            </span>
                                            <span className="posted-on"> 
                                                <Link href={post.url} rel='bookmark'>
                                                    <time className="entry-date published">{post.create_time}</time>
                                                </Link>
                                            </span>
                                        </div>
                                        <h3 className="entry-title"> 
                                            <Link href={post.url}>
                                                {post.title}
                                            </Link> 
                                        </h3>
                                    </header>
                                </div>
                            </article>
                        ))
                        }
                    </div>
                </div>
            </section>
    );
};
export default LatestPost;