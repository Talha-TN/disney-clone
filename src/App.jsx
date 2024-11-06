import "./App.css";
import Header from "./components/Header/Header";
import GlobalApi from "./services/GlobalApi";
function App() {
  return (
    <>
        <Header/>
        <GlobalApi/>
    </>
  );
}

export default App;
