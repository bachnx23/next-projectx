import DefaultLayout from '@/components/layouts/DefaultLayout';
import { FC } from 'react';

interface Props {}

const Category: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <DefaultLayout title={'Category Page'} keywords='blog, dev blogs' />
        </>
    );
};
export default Category;