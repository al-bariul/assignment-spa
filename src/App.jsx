import { Suspense, use } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigationBar/Navbar";
import TicketCards from "./components/ticket cards/TicketCards";
import TicketStatus from "./components/ticket status/TicketStatus";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ticketData = async () => {
  const res = await fetch("./ticket.json");
  return res.json();
};

const ticketPromise = ticketData();

function App() {
  const TicketDataSet = use(ticketPromise);

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  const progressIncrement = () => {
    setProgress(progress + 1);
  };

  const progressDecrement = () => {
    setProgress(progress - 1);
  };

  const handleComplete = (titleToMove) => {
    const remainingTasks = status.filter((item) => item !== titleToMove);
    setStatus(remainingTasks);

    setResolved([...resolved, titleToMove]);
  };

  const notification = () => {
    toast.success("In Progress!");
  };

  return (
    <>
      <Navbar></Navbar>

      <Banner resolved={resolved.length} progress={progress}></Banner>

      <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16">
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <TicketCards
            progressIncrement={progressIncrement}
            TicketDataSet={TicketDataSet}
            setStatus={setStatus}
            notification={notification}
          ></TicketCards>
        </Suspense>

        <TicketStatus
          handleComplete={handleComplete}
          resolved={resolved}
          status={status}
          progressDecrement={progressDecrement}
          notification={notification}
        ></TicketStatus>
      </div>

      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
