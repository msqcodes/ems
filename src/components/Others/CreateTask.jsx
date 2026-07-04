import Header from "../Others/Header";;

const CreateTask = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-900 p-10">
      <Header />

      <div className="mt-10 rounded-xl bg-zinc-800 p-8">
        <form className="grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-5">
            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-300">
                Task Title
              </h3>
              <input
                type="text"
                placeholder="Make a UI Design"
                className="w-full rounded-lg border border-zinc-600 bg-transparent px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-300">
                Date
              </h3>
              <input
                type="date"
                className="w-full rounded-lg border border-zinc-600 bg-transparent px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-300">
                Assign To
              </h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full rounded-lg border border-zinc-600 bg-transparent px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-300">
                Category
              </h3>
              <input
                type="text"
                placeholder="Design, Development, Testing..."
                className="w-full rounded-lg border border-zinc-600 bg-transparent px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h3 className="mb-2 text-sm font-medium text-zinc-300">
                Description
              </h3>

              <textarea
                rows="10"
                placeholder="Enter task description..."
                className="w-full resize-none rounded-lg border border-zinc-600 bg-transparent p-4 text-white outline-none placeholder:text-zinc-500 focus:border-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-lg bg-emerald-600 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;