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
            <AppHead title={''} description={description} keywords={keywords} />
            {children}
        </>
    );
};
export default DefaultLayout;