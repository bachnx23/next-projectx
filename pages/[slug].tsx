import DefaultLayout from '@/components/layouts/DefaultLayout';
import { FC } from 'react';

interface Props {}

const PostDetail: FC<Props> = (props): JSX.Element => {
  return (
    <>
        <DefaultLayout title={'Post Detail'} />
    </>
  );
};

export default PostDetail;