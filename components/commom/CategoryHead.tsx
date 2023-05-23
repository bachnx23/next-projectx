import { FC } from 'react';

interface Props {}

const CategoryHead: FC<Props> = (props): JSX.Element => {
  return (
    <div className="page-title-wrap">
        <div className="container">
            <div role="navigation" aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                <ul className="trail-items">
                    <li className="trail-item trail-begin">
                        <a href="https://demo.theme404.com/blog-personal-plus" rel="home">
                            <span >Home</span>
                        </a>
                        <meta content="1" />
                    </li>
                    <li className="trail-item">
                        <a href="https://demo.theme404.com/blog-personal-plus/blog/">
                            <span>Blog</span>
                        </a>
                        <meta content="2" />
                    </li>
                    <li   
                        className="trail-item trail-end"><span >Stories</span>
                    </li>
                </ul>
            </div>
            <h2 className="page-title">Stories</h2>
        </div>
    </div>
  );
};

export default CategoryHead;