import logo from "./logo.svg";
import "./App.css";
import GenerateBlog from "./Components/GenerateBlog";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GenerateBlog />
    </div>
  );
}

export default App;
