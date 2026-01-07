import { Suspense, use } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigationBar/Navbar";
import TicketCards from "./components/ticket cards/TicketCards";
import TicketStatus from "./components/ticket status/TicketStatus";
import { useState } from "react";

const ticketData = async () => {
  const res = await fetch("/public/ticket.json");
  return res.json();
};

const ticketPromise = ticketData();

function App() {
  const TicketDataSet = use(ticketPromise);

  const [progress, setProgress] = useState(0);
  const progressIncrement = () => {
    setProgress(progress + 1);
  };

  const [status, setStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleComplete = (titleToMove) => {
    const remainingTasks = status.filter((item) => item !== titleToMove);
    setStatus(remainingTasks);

    setResolved([...resolved, titleToMove]);
  };

  return (
    <>
      <Navbar></Navbar>

      <Banner progress={progress}></Banner>

      <div className="border-2 flex w-[1200px] mx-auto gap-x-16 mt-16">
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <TicketCards
            progressIncrement={progressIncrement}
            TicketDataSet={TicketDataSet}
            setStatus={setStatus}
          ></TicketCards>
        </Suspense>

        <TicketStatus
          handleComplete={handleComplete}
          resolved={resolved}
          status={status}
        ></TicketStatus>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
