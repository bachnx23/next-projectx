import { FC, ReactNode } from 'react';
import AppHead, { APP_NAME } from '../commom/AppHead';
import AppNav from '../commom/AppNav';
import AppLogo from '../commom/AppLogo';
import LatestPost from '../commom/LatestPost';

interface Props {
    title: string;
    keywords?: string;
    description?: string;
    children?: ReactNode;
    latestPost?: string[];
}

const DefaultLayout: FC<Props> = ({
    title, 
    children,
    keywords, 
    description,
}): JSX.Element => {
    return (
        <>
            <AppHead title={title} description={description} keywords={keywords} />
            <div id="page" className="hfeed site">
                <header id="masthead" className="site-header site-default">
                    <AppLogo />
                    <AppNav />
                    <LatestPost />
                </header>
                {children}
            </div>
        </>
    );
};
export default DefaultLayout;