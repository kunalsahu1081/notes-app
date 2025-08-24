import './App.css'
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import NewNoteButton from "../components/new-note-button";
import {Editor, Toolbar} from "lexical-react-editor";
import {MyNoteNode} from "../plugins/NoteNode.ts";
import 'lexical-react-editor/styles/lexical-react-editor-e9xST51w.css';

function App() {

    return (
        <section className={"appContainer"}>

            <Header />

            <section className={"bottomMainContainer"}>

                <SideMenu />

                <main className={"mainContainer"}>

                    <NewNoteButton />
                    
                    <Editor nodes={[MyNoteNode]} >

                        <Toolbar>

                        </Toolbar>

                    </Editor>


                </main>

            </section>

        </section>
    )
}

export default App
