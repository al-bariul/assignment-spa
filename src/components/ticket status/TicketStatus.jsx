import React from "react";

const TicketStatus = () => {
  return (
    <div className="bg-purple-400 w-[350px] h-auto">
      <div className="task-status">
        <p>Task Status</p>
        <p>Select a ticket to add to task status</p>
      </div>
      <div className="resolved-task">
        <p>Resolved Task</p>
        <p>No resolved task yet</p>
      </div>
    </div>
  );
};

export default TicketStatus;
