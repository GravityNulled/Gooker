import { useState } from "react";
import New from "./Components/Arrivals/New";
import FlashDeals from "./Components/FlashDeals/FlashDeals";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import TopCat from "./Components/TopCategory/TopCat";
import Discount from "./Components/Discount/Discount";
import Shops from "./Components/Shops/Shops";
import Banner from "./Components/Banner/Banner";
import Cta from "./Components/cta/Cta";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
      <FlashDeals />
      <TopCat />
      <New />
      <Discount />
      <Shops />
      <Banner />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
