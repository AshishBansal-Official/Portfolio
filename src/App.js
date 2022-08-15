import {
    Header,
    Skills,
    Projects,
    Footer,
    MobileAppProjects,
    MLProjects,
} from "./components";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Skills></Skills>
            <Projects></Projects>
            <MobileAppProjects></MobileAppProjects>
            <MLProjects></MLProjects>
            <Footer></Footer>
        </div>
    );
}

export default App;
