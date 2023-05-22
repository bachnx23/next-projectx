import { navItems } from '@/samples/NavItems';
import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { socials } from '../layouts/DefaultLayout';

interface Props {}

const navCommonClasses="menu-item menu-item-type-post_type menu-item-object-page"

const AppNav: FC<Props> = (props): JSX.Element => {
    return (
        <div id="navbar" className="navbar">
            <nav id="site-navigation" className="navigation main-navigation">
                <div className="thumb-icon">
                    <a href="https://demo.theme404.com/blog-personal-plus/#" target="_self"><i
                            className="fa fa-thumbs-o-up"></i></a>
                    <div className="block-social-icons social-links">
                        <ul id="menu-social-menu" className="menu">
                            {socials.map((social, index) => (
                                <li key={index} id={ "menu-item-" + (index + 1) }
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-119">
                                    <Link key={index} href={social.url} title={social.title}>{social.title}</Link>    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="menu-content-wrapper">
                    <div className="menu-top-menu-container" style={{ ["display"]: "block" }}>
                        <ul>
                            {navItems.map((nav, index) => (
                                <>
                                    <li id={'menu-item-' + (index+1)}
                                        className={classNames(navCommonClasses, nav.childs ? 'menu-item-has-children' : '')}>
                                        <Link key={index} href={nav.url} >{nav.title}</Link>
                                    {nav.childs && (
                                        <ul className="sub-menu">
                                            {nav.childs.map((child, cIdx) => (
                                                    <li key={cIdx} id={'menu-item-' + (cIdx+1)}
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <Link key={cIdx} href={child.url} >{child.title}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )}
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>

            <div className="search-icon">
                <a href="javascript:void(0)" title="Search">
                    <i className="fa fa-search"></i>
                </a>
            </div>

        </div>
    );
};
export default AppNav;