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
    <div className="w-full lg:w-[350px] h-auto">
      <div className="task-status">
        <p className="text-2xl font-bold text-[#34485A]">Task Status</p>

        {!hasStatus ? (
          <p className="text-[#627382]">
            Select a ticket to add to Task Status
          </p>
        ) : (
          <div>
            {status.map((title, index) => (
              <div key={index} className="bg-white px-2 py-3 rounded-xl mb-2">
                <p className="font-bold">{title}</p>
                <p
                  className="bg-green-600 text-center text-white mt-3 py-1 rounded-xl"
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
        <p className="text-2xl font-bold text-[#34485A]">Resolved Task</p>
        {resolved.length === 0 ? (
          <p className="text-[#627382]">No resolved tasks yet</p>
        ) : (
          <div>
            {resolved.map((title, index) => (
              <div
                key={index}
                className="bg-green-200 px-2 py-3 rounded-xl mb-2"
              >
                <p className="font-bold">{title}</p>
                <p className="mt-2 text-green-700 font-bold">✔ Completed</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketStatus;
