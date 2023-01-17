import { useState } from "react";
import FlashDeals from "./Components/FlashDeals/FlashDeals";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
      <FlashDeals />
    </div>
  );
}

export default App;
