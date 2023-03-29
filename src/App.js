import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import JumbotronComponent from "./components/JumbotronComponent";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <JumbotronComponent></JumbotronComponent>

      <AllTheBooks></AllTheBooks>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
