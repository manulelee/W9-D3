import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import JumbotronComponent from "./components/JumbotronComponent";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <span className="sticky-top">
        <MyNavbar></MyNavbar>
      </span>
      <JumbotronComponent></JumbotronComponent>

      <AllTheBooks></AllTheBooks>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
