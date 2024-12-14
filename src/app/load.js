// components/Loading.js
export default function Load() {
  return (
    <div className="flex fixed z-[3000] bg-[var(--background)] h-screen w-full top-0 flex-col items-center justify-center text-center">
      <p className="text-2xl font-semibold">Loading, please wait...</p>
    </div>
  );
}
