import PageSidebar from '@/components/commom/PageSidebar';
import PostItem from '@/components/commom/PostItem';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { categoryPost } from '@/samples/CategoryPosts';
import { FC } from 'react';

interface Props {}

const Category: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <DefaultLayout title={'Category Page'} keywords='blog, dev blogs'>
                <div id="primary" className="content-area custom-col-8">
                    <main id="main" className="site-main">
                        <div className="post-item-wrapper post-flexible">
                            {categoryPost.map((post) => (
                                <PostItem key={post.slug} post={post} imgWidth={1280} imgHeight={853} showBackground={false}/>
                            ))}
                        </div>
                    </main>
                </div>
                <PageSidebar />
            </DefaultLayout>
        </>
    );
};
export default Category;