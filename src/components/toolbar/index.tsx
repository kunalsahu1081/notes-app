import {FunctionComponent, memo} from "react";
import styles from './index.module.scss'
import {Bold, Italic, StrikeThrough, Underline} from "lexical-react-editor";

const Toolbar = () => {


    return <>

        <div className={styles.toolbarContainer}>


            <Bold />

            <Italic />

            <Underline />

            <StrikeThrough />


        </div>


    </>

}

export default memo(Toolbar as FunctionComponent)