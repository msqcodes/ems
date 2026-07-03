const Header = () => {
  return (
    <header className="flex items-center justify-between rounded-xl bg-zinc-900 px-6 py-4 shadow-md">
      <div>
        <p className="text-sm text-zinc-400">Hello,</p>
        <h1 className="text-2xl font-semibold text-white">
          Sameer <span className="inline-block">👋</span>
        </h1>
      </div>

      <button className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-red-700 active:scale-95">
        Log Out
      </button>
    </header>
  );
};

export default Header;