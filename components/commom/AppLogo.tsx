import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { APP_NAME } from './AppHead';
import AppNav from './AppNav';

interface Props {}

const AppLogo: FC<Props> = (props): JSX.Element => {
    return (
        <div className="hgroup-wrap">
            <div className="container">
                <section className="site-branding">
                <Link className="custom-logo-link" rel="Home" href={'/'}>
                    <Image src={'https://cdn.bachduongblog.com/unsafe/490x100/bachduongblog.com/uploads/files/1646356708_logo.png'} alt={APP_NAME} width={245} height={50} className="custom-logo" />
                </Link>
                </section>
                <AppNav />
            </div>
        </div>
    );
};
export default AppLogo;