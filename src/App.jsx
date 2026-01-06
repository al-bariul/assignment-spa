import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigationBar/Navbar";
import TicketCards from "./components/ticket cards/TicketCards";
import TicketStatus from "./components/ticket status/TicketStatus";
import { useState } from "react";

const ticketData = async () => {
  const response = await fetch("/public/ticket.json");
  return response.json();
};

function App() {
  const [progress, setProgress] = useState(0);
  // console.log(progress);
  const progressIncrement = () => {
    setProgress(progress + 1);
  };

  const ticketPromise = ticketData();

  return (
    <>
      <Navbar></Navbar>
      <Banner progress={progress}></Banner>
      <div className="border-2 flex w-[1200px] mx-auto gap-x-16 mt-16">
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <TicketCards
            ticketPromise={ticketPromise}
            progressIncrement={progressIncrement}
          ></TicketCards>
        </Suspense>
        <TicketStatus></TicketStatus>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
