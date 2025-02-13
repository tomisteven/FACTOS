import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import whatsApp from "./assets/whatsapp2.png";
import arriba from "./assets/arriba.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
      <Footer />
      <button
        className="fixed bottom-5 left-5 p-3 bg-green-500 text-white rounded-full"
        onClick={() => {
          window.open(
            "https://w.app/jpbrhd",
            "_blank"
          );
        }}
      >
        <img src={whatsApp} alt="" />
      </button>

      <button
        className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={arriba} alt="" />
      </button>
    </div>
  );
}

export default App;
