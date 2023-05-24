import { Post } from '@/types/Type';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
    post: Post;
    idx?: any;
    type?: number;
    imgWidth: number;
    imgHeight: number;
    isShowContent?: boolean;
    showBackground?: boolean;
}

const PostItem: FC<Props> = ({ idx, post, imgWidth, imgHeight, type = 1, isShowContent = false, showBackground = true }): JSX.Element => {
  return (
    <article className={classNames("post", idx % 2 == 0 ? '' : 'opp')}>
            {post.image && (
                <figure className="featured-image">
                    <Image key={post.slug} src={post.image} width={imgWidth} height={imgHeight} 
                    className="attachment-blog-personal-latest size-blog-personal-latest wp-post-image"
                    alt={post.title} />
                </figure>
            )}
            <div className="post-content">
                {(type == 2 && idx > 0) && (<div className="count-post">{idx}</div>)}
                <header className="entry-header">
                    <div className="entry-meta">
                        <span className="cat-links"> 
                            {post.categories.map((c) => (
                                <Link key={c.slug} href={`/category/${c.slug}`} rel={'category tag'} >{ c.title }</Link>
                            ))}
                        </span>
                        {post.create_time && (
                            <span className="posted-on"> 
                                <Link key={post.slug} href={post.slug} title={post.title}>
                                    <time className="entry-date published updated">{post.create_time}</time>
                                </Link>
                            </span>
                        )}

                        <span className="byline"> by 
                            <span className="author vcard">
                                <Link key={post.author.slug} href={`/author/${post.author.slug}`} title={'Posted by ' + post.author.name}>{post.author.name}</Link>
                            </span>
                        </span>
                    </div>
                    <h3 className="entry-title">
                        <Link key={post.slug} href={post.slug} title={post.title}>{ post.title }</Link>
                    </h3>
                </header>
                {(type == 1 || isShowContent) && (
                    <div className="entry-content">
                        {post.content}
                        <div className="read-more">
                            <Link key={post.slug} href={post.slug} title={post.title}>CONTINUE READING</Link>
                        </div>
                    </div>
                )}
            </div>
            {(showBackground) && (<div className="post-bg"></div>)}
        </article>
  );
};

export default PostItem;