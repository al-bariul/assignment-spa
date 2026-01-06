import React, { use } from "react";
// import { useState } from "react";

const TicketCards = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);
  console.log(ticketData);
  //   const [color, setColor] = useState(true);
  return (
    <div className="bg-yellow-500 w-[1000px] h-auto mx-auto">
      <div className="title">
        <h1>Customer Tickets</h1>
      </div>
      <div className="grid grid-cols-2 gap-y-5">
        {ticketData.map((tdata) => {
          const {
            title,
            description,
            customer,
            priority,
            status,
            createdAt,
            id,
          } = tdata;

          const ticketStatus = status;
          //   console.log(ticketStatus);
          //   console.log(toUpperCase(status));
          const ticketStatusToLowerCase = ticketStatus.toLowerCase();
          return (
            <div>
              <div className="card w-96 bg-white card-xs shadow-sm">
                <div className="card-body">
                  <div className="text-header flex justify-between items-center border-2">
                    <h2 className="card-title">{title}</h2>
                    <span
                      className={`border-2 ${
                        ticketStatusToLowerCase === "open"
                          ? "text-[#0B5E06] bg-[#B9F8CF] px-3 py-0.5 font-bold"
                          : "text-amber-500"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <p>{description}</p>
                  <div className="flex justify-between">
                    <div className="div flex border-2">
                      <p className="mr-2">#{id}</p>
                      <p>{priority}</p>
                    </div>
                    <div className="div flex border-2">
                      <p className="mr-2">{customer}</p>
                      <p>{createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketCards;
