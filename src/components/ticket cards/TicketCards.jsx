import React from "react";

const TicketCards = () => {
  return (
    <div className="bg-yellow-500 w-[1000px] h-[700px] mx-auto">
      <div className="title">
        <h1>Customer Tickets</h1>
      </div>
      <div>
        <div className="card w-96 bg-white card-xs shadow-sm">
          <div className="card-body">
            <div className="text-header flex justify-between items-center border-2">
              <h2 className="card-title">Xsmall Card</h2>
              <span className="border-2">Open</span>
            </div>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="flex justify-between">
              <div className="div flex border-2">
                <p className="mr-2">#1003</p>
                <p>HIGH PRIORITY</p>
              </div>
              <div className="div flex border-2">
                <p className="mr-2">John Smith</p>
                <p>1/15/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCards;
