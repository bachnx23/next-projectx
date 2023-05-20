import Head from 'next/head';
import { FC } from 'react';

interface Props {
    title: string;
    description?: string;
    keywords?: string;
}

export const APP_NAME = 'Devzone Blogs'

const AppHead: FC<Props> = ({
    title,
    description,
    keywords
}): JSX.Element => {
    return (
    <Head>
        <title>{title ? title + " | " + APP_NAME : APP_NAME}</title>
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
    </Head>
    );
};
export default AppHead;
