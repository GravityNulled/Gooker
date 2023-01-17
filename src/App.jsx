import { useState } from "react";
import Announcment from "./Components/Announcment/Announcment";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
