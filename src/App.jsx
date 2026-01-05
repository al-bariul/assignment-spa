import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigationBar/Navbar";
import TicketCards from "./components/ticket cards/TicketCards";
import TicketStatus from "./components/ticket status/TicketStatus";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="border-2 flex w-[1200px] mx-auto gap-x-16 mt-16">
        <TicketCards></TicketCards>
        <TicketStatus></TicketStatus>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
