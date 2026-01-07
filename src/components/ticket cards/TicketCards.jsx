import React from "react";

const TicketCards = ({
  TicketDataSet,
  progressIncrement,
  setStatus,
  notification,
}) => {
  return (
    <div className="w-full h-auto">
      <div className="title">
        <h1 className="text-3xl mb-4 text-[#34485A]">Customer Tickets</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  <div className="text-header flex justify-between items-center ">
                    <h2 className="card-title">{title}</h2>
                    <span
                      className={` ${
                        ticketStatusToLowerCase === "open"
                          ? "text-[#0B5E06] rounded-2xl bg-[#B9F8CF] px-3 py-1 font-bold"
                          : "text-amber-500 bg-[#FFF9B7] font-bold px-3 py-1 rounded-2xl"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <p className="text-[#627382]">{description}</p>
                  <div className="flex justify-between">
                    <div className="div flex ">
                      <p className="mr-2">#{id}</p>
                      <p
                        className={`font-bold uppercase ${priorityColor(
                          priorityToLowerCase
                        )}`}
                      >
                        {priority}
                      </p>
                    </div>
                    <div className="div flex ">
                      <p className="mr-2">{customer}</p>
                      <p>
                        <i class="fa-regular fa-calendar"></i> {createdAt}
                      </p>
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
