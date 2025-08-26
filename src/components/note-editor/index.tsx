import {FunctionComponent, memo} from "react";
import {Editor} from "lexical-react-editor";
import styles from './index.module.scss'
import InitialiseNote from "./sections/initialiseNote.tsx";
import {MyNoteNode} from "../../plugins/NoteNode.ts";
import Toolbar from "../toolbar";


const NoteEditor = () => {


    return <>

        <Editor
            theme={{
                editorClassName: styles.mainEditorContext,
                placeholderClassName: styles.editorPlaceholder,
                toolbarButton: styles.buttonClassname,
            }}
            nodes={[MyNoteNode]}
        >

            <Toolbar />

            <InitialiseNote/>


        </Editor>


    </>


}

export default memo(NoteEditor as FunctionComponent);