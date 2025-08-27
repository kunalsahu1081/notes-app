import {useEffect} from "react";
import {$getRoot, ParagraphNode, $createParagraphNode} from "lexical";
import {$createMyNoteNode, MyNoteNode} from "../../../plugins/NoteNode.ts";
import {useLexicalComposerContext} from "lexical-react-editor";


const InitialiseNote = () => {


    const [editor] = useLexicalComposerContext();

    useEffect(() => {

        editor.update(() => {

            const root= $getRoot();

            const childrens = root.getChildren();

            const containsNoteNode = childrens.filter((node) => node instanceof MyNoteNode);

            const paragraphNodes = childrens.filter((node) => node instanceof ParagraphNode)

            paragraphNodes.forEach((node) => {
                node.remove();
            })

            if (!containsNoteNode.length) {
                const {node: noteNode} = $createMyNoteNode("background: #EAC42BFF; width: 300px; height: 360px")
                const paragraphNode = $createParagraphNode();
                noteNode.append(paragraphNode);
                root.append(noteNode);
            }

        })

    }, [editor])

    return <>
    </>

}

export default InitialiseNote;