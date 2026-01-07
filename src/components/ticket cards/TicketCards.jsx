import React from "react";

const TicketCards = ({
  TicketDataSet,
  progressIncrement,
  setStatus,
  notification,
}) => {
  return (
    <div className="bg-yellow-500 w-[1000px] h-auto mx-auto">
      <div className="title">
        <h1>Customer Tickets</h1>
      </div>
      <div className="grid grid-cols-2 gap-y-5">
        {TicketDataSet.map((tdata) => {
          const {
            title,
            description,
            customer,
            priority,
            status,
            createdAt,
            id,
          } = tdata;

          //   Status Logic
          const ticketStatus = status;
          const ticketStatusToLowerCase = ticketStatus.toLowerCase();

          //   Priority Logic
          const priorityStatus = priority;
          const priorityToLowerCase = priorityStatus.toLowerCase();

          const priorityColor = (p) => {
            if (p === "high") return "text-red-500";
            else if (p === "medium") return "text-amber-500";
            else return "text-green-500";
          };

          return (
            <div key={tdata.id}>
              <div
                onClick={() => {
                  progressIncrement();
                  notification();
                  setStatus((previousTitle) => [...previousTitle, title]);
                }}
                className="card w-96 bg-white card-xs shadow-sm"
              >
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
                      <p
                        className={`font-bold ${priorityColor(
                          priorityToLowerCase
                        )}`}
                      >
                        {priority}
                      </p>
                    </div>
                    <div className="div flex border-2">
                      <p className="mr-2">{customer}</p>
                      <p>{createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* {console.log(description)} */}
              {/* Components Ticket Status */}
              {/* <TicketStatus></TicketStatus>; */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketCards;
