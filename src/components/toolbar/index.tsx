import {FunctionComponent, memo} from "react";
import styles from './index.module.scss'
import {Bold, Italic, StrikeThrough, Underline, FontPicker, FontSize, HighlightText, TextColor, AddChecklist, AddUnorderedList} from "lexical-react-editor";

const Toolbar = () => {


    return <>

        <div className={styles.toolbarContainer}>


            <Bold />

            <Italic />

            <Underline />

            <StrikeThrough />

            <FontPicker pickerWidth={'160px'} />

            <FontSize />

            <HighlightText pickerStyle={{position: 'fixed', top: '60px'}} />

            <TextColor pickerStyle={{position: 'fixed', top: '60px'}} />

            <AddChecklist />

            <AddUnorderedList />

        </div>


    </>

}

export default memo(Toolbar as FunctionComponent)