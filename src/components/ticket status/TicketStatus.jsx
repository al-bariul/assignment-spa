const TicketStatus = ({
  status,
  resolved,
  handleComplete,
  progressDecrement,
  notification,
}) => {
  const hasStatus = status.length > 0;
  // console.log(resolved);

  return (
    <div className="bg-purple-400 w-[350px] h-auto">
      <div className="task-status">
        <p className="text-2xl font-bold">Task Status</p>

        {!hasStatus ? (
          <p>Select a ticket to add to Task Status</p>
        ) : (
          <div>
            {status.map((title, index) => (
              <div key={index}>
                <p>{title}</p>
                <p
                  onClick={() => {
                    handleComplete(title);
                    progressDecrement();
                    notification();
                  }}
                >
                  Completed
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="resolved-task mt-7">
        <p className="text-2xl font-bold">Resolved Task</p>
        {resolved.length === 0 ? (
          <p>No resolved task yet</p>
        ) : (
          <div>
            {resolved.map((title, index) => (
              <div key={index}>{title} (resolved)</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketStatus;
