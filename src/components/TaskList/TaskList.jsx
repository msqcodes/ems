const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="mt-10 flex h-[55%] items-center justify-start gap-5 overflow-x-auto"
    >
      {/* Card 1 */}
      <div className="h-full w-[300px] flex-shrink-0 rounded-xl bg-red-400 p-5">
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-red-600 px-3 py-1 text-sm text-white">
            High
          </h3>

          <h4 className="text-sm text-white">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-white">
          Make a YouTube Video
        </h2>

        <p className="mt-3 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ullam libero natus, molestiae officiis vitae.
        </p>
      </div>

      {/* Card 2 */}
      <div className="h-full w-[300px] flex-shrink-0 rounded-xl bg-blue-400 p-5">
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-blue-600 px-3 py-1 text-sm text-white">
            Medium
          </h3>

          <h4 className="text-sm text-white">18 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-white">
          Design Dashboard
        </h2>

        <p className="mt-3 text-sm text-white">
          Create a responsive employee dashboard using React and Tailwind CSS.
        </p>
      </div>

      {/* Card 3 */}
      <div className="h-full w-[300px] flex-shrink-0 rounded-xl bg-green-400 p-5">
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-green-600 px-3 py-1 text-sm text-white">
            Low
          </h3>

          <h4 className="text-sm text-white">15 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-white">
          Update Documentation
        </h2>

        <p className="mt-3 text-sm text-white">
          Complete the project documentation and deployment guide.
        </p>
      </div>

      {/* Card 4 */}
      <div className="h-full w-[300px] flex-shrink-0 rounded-xl bg-yellow-400 p-5">
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-yellow-600 px-3 py-1 text-sm text-white">
            Review
          </h3>

          <h4 className="text-sm text-white">12 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-white">
          Code Review
        </h2>

        <p className="mt-3 text-sm text-white">
          Review pull requests and provide feedback to the development team.
        </p>
      </div>
    </div>
  );
};

export default TaskList;