import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import cursorIcon from "../src/images/cursor.png";

function App() {
  return (
    <div>
      <main>
        <Cursor image={cursorIcon} />
        <Navbar />
        <Search />
        <Intro />
      </main>
    </div>
  );
}

export default App;
