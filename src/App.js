import Footer from "./Components/Navigation/Footer";
import Header from "./Components/Navigation/Header";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  return (
    <>
      <div className="text-white scroll-smooth min-h-screen max-w-screen bg-gradient-to-b from-[#141b29] to-[#0c111b] ">
        <Header />
        <HomeContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
