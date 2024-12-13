// components/Loading.js
export default function Loading() {
  return (
    <div className="flex fixed z-[3000] bg-[var(--background)] h-screen flex-col items-center justify-center text-center">
      <p className="text-2xl font-semibold">Loading, please wait...</p>
    </div>
  );
}
