import { FC, ReactNode } from 'react';
import AppHead from '../commom/AppHead';

interface Props {
    title: string;
    keywords?: string;
    description?: string;
    children?: ReactNode;
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
                {children}
            </div>
        </>
    );
};
export default DefaultLayout;