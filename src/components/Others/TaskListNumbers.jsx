const TaskListNumbers = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl bg-red-400 px-6 py-5">
        <h2 className="text-3xl font-bold text-white">0</h2>
        <h3 className="mt-1 text-lg font-medium text-white">New Task</h3>
      </div>

      <div className="rounded-xl bg-yellow-400 px-6 py-5">
        <h2 className="text-3xl font-bold text-white">0</h2>
        <h3 className="mt-1 text-lg font-medium text-white">Active Task</h3>
      </div>

      <div className="rounded-xl bg-blue-400 px-6 py-5">
        <h2 className="text-3xl font-bold text-white">0</h2>
        <h3 className="mt-1 text-lg font-medium text-white">Completed</h3>
      </div>

      <div className="rounded-xl bg-green-400 px-6 py-5">
        <h2 className="text-3xl font-bold text-white">0</h2>
        <h3 className="mt-1 text-lg font-medium text-white">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;