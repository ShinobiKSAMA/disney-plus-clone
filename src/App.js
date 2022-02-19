import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Navigation/Footer";
import Header from "./Components/Navigation/Header";
import HomeContainer from "./Containers/HomeContainer";
import DetailsContainer from "./Containers/DetailsContainer";

function App() {
  return (
    <>
      <div className="text-white scroll-smooth min-h-screen max-w-screen bg-gradient-to-b from-[#141b29] to-[#0c111b] ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/details/:id" element={<DetailsContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
