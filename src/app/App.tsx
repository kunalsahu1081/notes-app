import './App.css'
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import NewNoteButton from "../components/new-note-button";
import 'lexical-react-editor/styles/lexical-react-editor-e9xST51w.css';
import NoteEditor from "../components/note-editor";

function App() {

    return (
        <section className={"appContainer"}>

            <Header />

            <section className={"bottomMainContainer"}>

                <SideMenu />

                <main className={"mainContainer"}>

                    <NewNoteButton />
                    
                    <NoteEditor />

                </main>

            </section>

        </section>
    )
}

export default App
