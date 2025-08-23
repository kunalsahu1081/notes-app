import {FunctionComponent, memo, useEffect, useState} from "react";
import styles from './index.module.scss';
import {MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";


const SideMenu = () => {

    const [icon_color, set_icon_color] = useState('black');
    const [is_expanded, set_is_expanded] = useState(false);

    useEffect(() => {
        set_icon_color(document.documentElement.style.getPropertyValue('--primary-text-color'))
    }, [location.pathname]);

    return <>

        <section className={`${styles.navigationSection} ${is_expanded ? styles.navigationExpanded : ''}`}>

            {!is_expanded ? <MdOutlineKeyboardDoubleArrowRight
                    size={40}
                    onClick={() => set_is_expanded(true)}
                    className={styles.navigationRight}
                    color={icon_color}
                /> :
                <MdOutlineKeyboardDoubleArrowLeft
                    size={40}
                    onClick={() => set_is_expanded(false)}
                    className={styles.navigationLeft}
                    color={icon_color}
                />
            }


            <nav role={'navigation'} aria-label={"Main navigation"} className={`${styles.navigationContainer} `}>

                <ul>

                    <li><a className={styles.selected} href={'/'}>New Note</a></li>

                    <li><a href={'/all-notes'}>Recent</a></li>

                    <li><a href={'/all-notes'}>All Notes</a></li>

                    <li><a href={'/collection'}>Collection</a></li>

                </ul>

            </nav>

        </section>

    </>
}

export default memo(SideMenu as FunctionComponent)