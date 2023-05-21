import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { APP_NAME } from './AppHead';

interface Props {}

const AppLogo: FC<Props> = (props): JSX.Element => {
    return (
        <div className="hgroup-wrap">
            <div className="container">
                <section className="site-branding">
                <Link className="custom-logo-link" rel="Home" href={'/'}>
                    <Image src={'/images/logo.png'} alt={APP_NAME} width={245} height={50} className="custom-logo" />
                </Link>
                </section>
            </div>
        </div>
    );
};
export default AppLogo;