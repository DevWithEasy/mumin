import React, { useState, useEffect } from "react";

export default function Salah() {
  const targetTime = new Date();
  targetTime.setHours(12, 10, 0); // Set the target time to 2:10

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, progress: 0 };
    }

    const totalTime = targetTime - new Date().setHours(0, 0, 0, 0); // Total time from start of the day to target
    const progress = (difference / totalTime) * 100; // Calculate progress percentage

    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      progress,
    };
  }

  const { hours, minutes, seconds, progress } = timeLeft;

  // Calculate SVG Circle properties
  const radius = 70; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* SVG Circle for the full gray background */}
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 160 160"
      >
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#d1d5db" // Tailwind gray-300
          strokeWidth="10"
        />
        {/* SVG Circle for the blue countdown */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#3b82f6" // Tailwind blue-500
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Countdown Time */}
      <div className="text-center">
        <p className="text-lg font-semibold">Time Left</p>
        <p className="text-xl font-bold">
          {hours}h {minutes}m {seconds}s
        </p>
      </div>
    </div>
  </div>
  )
}
