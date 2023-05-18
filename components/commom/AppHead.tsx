/* eslint-disable @next/next/no-title-in-document-head */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/document';
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
    return (<Head>
        <title>{title ? title + " | " + APP_NAME : APP_NAME}</title>
        <meta content={description} name="description" />
    </Head>);
};
export default AppHead;