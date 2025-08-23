import {FunctionComponent, memo, useEffect, useState} from "react";
import {IoMdAdd} from "react-icons/io";
import styles from './index.module.scss'

const NewNoteButton = () => {

    const [icon_color, set_icon_color] = useState('black');

    useEffect(() => {
        set_icon_color(getComputedStyle(document.documentElement).getPropertyValue('--p2-text-color'))
    }, []);

    return <>

        <div role={'button'} className={styles.btnAddNew}>

            <IoMdAdd size={40} color={icon_color}/>

        </div>

    </>


}

export default memo(NewNoteButton as FunctionComponent)