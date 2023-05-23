import { FC, ReactNode } from 'react';
import AppHead, { APP_NAME } from '../commom/AppHead';
import AppLogo from '../commom/AppLogo';
import LatestPost from '../commom/LatestPost';
import Link from 'next/link';
import CategoryHead from '../commom/CategoryHead';

interface Props {
    title: string;
    keywords?: string;
    description?: string;
    children?: ReactNode;
    latestPost?: string[];
    isHome?: boolean;
}

export const socials = [
    {
        title: 'Facebook',
        url: 'https://facebook.com/'
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/'
    },
    {
        title: 'Google Plus',
        url: 'https://plus.google.com/'
    },
    {
        title: 'Youtube',
        url: 'https://youtube.com/'
    },
    {
        title: 'Instagram',
        url: 'http://instagram.com/'
    },
    {
        title: 'Pinterest',
        url: 'http://pinterest.com/'
    },
]

const DefaultLayout: FC<Props> = ({
    title, 
    children,
    keywords, 
    description,
    isHome = false
}): JSX.Element => {
    return (
        <>
            <AppHead title={title} description={description} keywords={keywords} />
            <div id="page" className="hfeed site" style={{ ['transform:' as string]: 'none'}}>
                <header id="masthead" className="site-header site-default">
                    <AppLogo />
                    {isHome && (<LatestPost />)}
                    {!isHome && (<CategoryHead />)}
                </header>
                <div id="content" className="site-content">
                    <div className="container">
                        {children}
                    </div>
                </div>
                <footer id="colophon" className="site-footer">
                    <div className="widget-area">
                        <div className="container">
                            <aside className="widget">
                                <div className="contact-detail">
                                    <h3></h3>
                                    <div className="textwidget">
                                    </div>
                                </div>
                            </aside>
                            <div className="inline-social-icons social-links">
                                <div className="menu-social-menu-container">
                                    <ul id="menu-social-menu-2" className="menu">
                                        {socials.map((s) => (
                                             <li key={s.url} className="menu-item menu-item-type-custom menu-item-object-custom">
                                                <Link href={s.url}>{s.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-generator">
                        <div className="container">
                            <span className="copy-right">&nbsp;
                                Theme of <Link href={'/'} target={'_blank'} rel={'designer'}>{APP_NAME}</Link>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};
export default DefaultLayout;