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
                                <PostItem post={post} imgWidth={1280} imgHeight={853} showBackground={false}/>
                            ))}
                        </div>
                    </main>
                </div>
                <div id="secondary" className="widget-area custom-col-4">
						<aside id="search-2" className="widget widget_search">
							<form role="search" method="get" className="search-form"
								action="https://demo.theme404.com/blog-personal-plus/">
								<label>
									<span className="screen-reader-text">Search for:</span>
									<input type="search" className="search-field" placeholder="Search &hellip;" value=""
										name="s" />
								</label>
								<input type="submit" className="search-submit" value="Search" />
							</form>
						</aside>
						<aside id="media_gallery-2" className="widget widget_media_gallery">
							<h2 className="widget-title">Photo Of The Day</h2>
							<div id='gallery-1' className="gallery galleryid-15 gallery-columns-3 gallery-size-thumbnail">
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/how-to-pack-for-vacation/holiday-2880261/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/holiday-2880261-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/traveller-visiting-ice-cave-with-amazing-eye-catching-scenes/winter-1127201/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/winter-1127201-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/how-travel-saved-my-life/white-2565766/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/white-2565766-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/beauty-of-nature/technology-792180/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/technology-792180-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/traveller-visiting-ice-cave-with-amazing-eye-catching-scenes/living-room-2155376-2/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/living-room-2155376-1-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/fashion-model-shoot/goat-2216868/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/goat-2216868-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/cheerful-loving-couple-bakers/girl-2931287/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/girl-2931287-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a href='https://demo.theme404.com/blog-personal-plus/adult-1867889-2/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/adult-1867889-1-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
								<figure className="gallery-item">
									<div className="gallery-icon landscape">
										<a
											href='https://demo.theme404.com/blog-personal-plus/far-far-away-in-the-sea/notebook-3397136_1920-1/'><img
												width="150" height="150"
												src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/notebook-3397136_1920-1-150x150.jpg"
												className="attachment-thumbnail size-thumbnail" alt="" decoding="async"
												loading="lazy"
												
												sizes="(max-width: 150px) 100vw, 150px" /></a>
									</div>
								</figure>
							</div>
						</aside>
						<aside id="recent-posts-2" className="widget widget_recent_entries">
							<h2 className="widget-title">Recent Posts</h2>
							<ul>
								<li>
									<a
										href="https://demo.theme404.com/blog-personal-plus/new-beauty-products-to-upgrade-your-may/">New
										Beauty Products to Upgrade Your May</a>
									<span className="post-date">August 14, 2018</span>
								</li>
								<li>
									<a
										href="https://demo.theme404.com/blog-personal-plus/things-you-dont-know-about-me/">Things
										you don’t know about me</a>
									<span className="post-date">July 17, 2018</span>
								</li>
								<li>
									<a
										href="https://demo.theme404.com/blog-personal-plus/cheerful-loving-couple-bakers/">Cheerful
										Loving Couple Bakers</a>
									<span className="post-date">July 16, 2018</span>
								</li>
								<li>
									<a href="https://demo.theme404.com/blog-personal-plus/alone-in-the-city/">Alone in
										the City</a>
									<span className="post-date">July 16, 2018</span>
								</li>
								<li>
									<a href="https://demo.theme404.com/blog-personal-plus/daily-reading-lists/">Daily
										Reading Lists</a>
									<span className="post-date">June 16, 2018</span>
								</li>
							</ul>

						</aside>
						<aside id="categories-2" className="widget widget_categories">
							<h2 className="widget-title">Categories</h2>
							<ul>
								<li className="cat-item cat-item-4"><a
										href="https://demo.theme404.com/blog-personal-plus/category/life/">Life</a>
								</li>
								<li className="cat-item cat-item-3"><a
										href="https://demo.theme404.com/blog-personal-plus/category/moments/">Moments</a>
								</li>
								<li className="cat-item cat-item-6"><a
										href="https://demo.theme404.com/blog-personal-plus/category/nature/">Nature</a>
								</li>
								<li className="cat-item cat-item-5 current-cat"><a aria-current="page"
										href="https://demo.theme404.com/blog-personal-plus/category/stories/">Stories</a>
								</li>
								<li className="cat-item cat-item-7"><a
										href="https://demo.theme404.com/blog-personal-plus/category/travel/">Travel</a>
								</li>
							</ul>

						</aside>
						<aside id="media_image-2" className="widget widget_media_image">
							<h2 className="widget-title">Google Adsense</h2><img width="360" height="400"
								src="https://demo.theme404.com/blog-personal-plus/wp-content/uploads/2018/05/ads2.jpg"
								className="image wp-image-84  attachment-full size-full" alt="" decoding="async"
								loading="lazy" 
								style={{
                                    ['max-width' as string]: '100%',
                                    ['height' as string]: 'auto'
                                }}
								sizes="(max-width: 360px) 100vw, 360px" />
						</aside>
						<aside id="recent-posts-3" className="widget widget_recent_entries">
							<h2 className="widget-title">Recent Buzz</h2>
							<ul>
								<li>
									<a
										href="https://demo.theme404.com/blog-personal-plus/new-beauty-products-to-upgrade-your-may/">New
										Beauty Products to Upgrade Your May</a>
								</li>
								<li>
									<a
										href="https://demo.theme404.com/blog-personal-plus/things-you-dont-know-about-me/">Things
										you don’t know about me</a>
								</li>
								<li>
									<a
										href="https://demo.theme404.com/blog-personal-plus/cheerful-loving-couple-bakers/">Cheerful
										Loving Couple Bakers</a>
								</li>
								<li>
									<a href="https://demo.theme404.com/blog-personal-plus/alone-in-the-city/">Alone in
										the City</a>
								</li>
								<li>
									<a href="https://demo.theme404.com/blog-personal-plus/daily-reading-lists/">Daily
										Reading Lists</a>
								</li>
							</ul>

						</aside>
					</div>
            </DefaultLayout>
        </>
    );
};
export default Category;