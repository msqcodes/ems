const AllTask = () => {
  return (
    <div className="mt-5 rounded bg-[#1c1c1c] p-5">
      {/* Header */}
      <div className="bg-red-400mb-3 flex items-center justify-between rounded bg-red-400 px-4 py-2 text-white font-semibold">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-2/5">New Task</h2>
        <h3 className="w-1/5">Status</h3>
      </div>

      {/* Row 1 */}
      <div className="bg-yellow-400 mb-3 flex items-center justify-between rounded border border-red-400 px-4 py-2 text-white">
        <h2 className="w-1/5">Sarthak</h2>
        <h3 className="w-2/5">Make a UI Design</h3>
        <h5 className="w-1/5">Pending</h5>
      </div>

      {/* Row 2 */}
      <div className="bg-blue-400 mb-3 flex items-center justify-between rounded border border-red-400 px-4 py-2 text-white">
        <h2 className="w-1/5">Sameer</h2>
        <h3 className="w-2/5">Build Login Page</h3>
        <h5 className="w-1/5">Completed</h5>
      </div>

      {/* Row 3 */}
      <div className="bg-pink-400 mb-3 flex items-center justify-between rounded border border-red-400 px-4 py-2 text-white">
        <h2 className="w-1/5">Rahul</h2>
        <h3 className="w-2/5">Develop Dashboard</h3>
        <h5 className="w-1/5">In Progress</h5>
      </div>

      {/* Row 4 */}
      <div className="bg-green-400 mb-3 flex items-center justify-between rounded border border-red-400 px-4 py-2 text-white">
        <h2 className="w-1/5">Aman</h2>
        <h3 className="w-2/5">Fix Navbar</h3>
        <h5 className="w-1/5">Failed</h5>
      </div>

      {/* Row 5 */}
      <div className="bg-orange-300 flex items-center justify-between rounded border border-red-400 px-4 py-2 text-white">
        <h2 className="w-1/5">Priya</h2>
        <h3 className="w-2/5">API Integration</h3>
        <h5 className="w-1/5">Completed</h5>
      </div>
    </div>
  );
};

export default AllTask;