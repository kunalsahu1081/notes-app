import {useEffect} from "react";
import {$getRoot} from "lexical";
import {$createMyNoteNode, MyNoteNode} from "../../../plugins/NoteNode.ts";
import {useLexicalComposerContext} from "lexical-react-editor";


const InitialiseNote = () => {


    const [editor] = useLexicalComposerContext();

    useEffect(() => {

        editor.update(() => {

            const root= $getRoot();

            const childrens = root.getChildren();

            const containsNoteNode = childrens.filter((node) => node instanceof MyNoteNode)

            if (!containsNoteNode.length) {
                const {node: noteNode} = $createMyNoteNode("background: #EAC42BFF; width: 300px; height: 360px")
                root.append(noteNode);
            }

        })

    }, [editor])

    return <>
    </>

}

export default InitialiseNote;