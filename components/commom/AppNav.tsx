import { FC } from 'react';

interface Props {}

const AppNav: FC<Props> = (props): JSX.Element => {
    return (
        <div id="navbar" className="navbar">
            <nav id="site-navigation" className="navigation main-navigation">
                <div className="thumb-icon">
                    <a href="https://demo.theme404.com/blog-personal-plus/#" target="_self"><i
                            className="fa fa-thumbs-o-up"></i></a>
                    <div className="block-social-icons social-links">
                        <ul id="menu-social-menu" className="menu">
                            <li id="menu-item-119"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-119">
                                <a href="https://facebook.com/">Facebook</a></li>
                            <li id="menu-item-73"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-73">
                                <a href="https://twitter.com/">Twitter</a></li>
                            <li id="menu-item-71"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-71">
                                <a href="https://plus.google.com/">Google Plus</a></li>
                            <li id="menu-item-70"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-70">
                                <a href="https://youtube.com/">Youtube</a></li>
                            <li id="menu-item-72"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-72">
                                <a href="http://instagram.com/">instagram</a></li>
                            <li id="menu-item-74"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-74">
                                <a href="http://pinterest.com/">pinterest</a></li>
                        </ul>
                    </div>
                </div>

                <div className="menu-content-wrapper">
                    <div className="menu-top-menu-container" style={{ ["display"]: "block" }}>
                        <ul>
                            <li id="menu-item-58"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-25 current_page_item menu-item-58">
                                <a href="https://demo.theme404.com/blog-personal-plus/"
                                    aria-current="page">Home</a></li>
                            <li id="menu-item-57"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                                <a href="https://demo.theme404.com/blog-personal-plus/blog/">Blog</a></li>
                            <li id="menu-item-112"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-112">
                                <a
                                    href="https://demo.theme404.com/blog-personal-plus/category/travel/">Travel</a>
                            </li>
                            <li id="menu-item-63"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-63">
                                <a
                                    href="https://demo.theme404.com/blog-personal-plus/category/nature/">Nature</a>
                            </li>
                            <li id="menu-item-61"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-61">
                                <a
                                    href="https://demo.theme404.com/blog-personal-plus/category/life/">Sidebar</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-55"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
                                        <a
                                            href="https://demo.theme404.com/blog-personal-plus/left-sidebar/">Left
                                            Sidebar</a></li>
                                    <li id="menu-item-54"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
                                        <a
                                            href="https://demo.theme404.com/blog-personal-plus/right-sidebar/">Right
                                            Sidebar</a></li>
                                    <li id="menu-item-56"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
                                        <a href="https://demo.theme404.com/blog-personal-plus/47-2/">Full
                                            Width</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-113"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
                                <a href="https://demo.theme404.com/blog-personal-plus/contact/">Contact</a>
                            </li>
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