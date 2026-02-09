import { useEffect, useState } from "react";

export default function Timer() {
  const TOTAL_TIME = 70;
  const [time, setTime] = useState(TOTAL_TIME);

  useEffect(() => {
    if (time === 0) return;

    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const progress = (time / TOTAL_TIME) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="relative w-64 h-64 flex items-center justify-center rounded-full border-4 border-gray-700 shadow-2xl">
        
        {/* Progress Ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#22c55e ${progress}%, #1f2937 ${progress}%)`
          }}
        />

        {/* Inner Circle */}
        <div className="relative z-10 w-52 h-52 rounded-full bg-gray-900 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            Time Left
          </p>

          <h2
            className={`text-4xl font-bold mt-2 ${
              time <= 10 ? "text-red-500 animate-pulse" : "text-green-400"
            }`}
          >
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </h2>

          {time === 0 && (
            <p className="mt-2 text-red-400 text-sm font-semibold">
              Time’s up ⏰
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
