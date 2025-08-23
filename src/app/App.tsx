import './App.css'
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import NewNoteButton from "../components/new-note-button";

function App() {

    return (
        <section className={"appContainer"}>

            <Header />

            <section className={"bottomMainContainer"}>

                <SideMenu />

                <main className={"mainContainer"}>

                    <NewNoteButton />

                </main>

            </section>

        </section>
    )
}

export default App
