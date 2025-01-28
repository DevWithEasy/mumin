import { useState, useEffect } from "react";

const SalahLeftTime = () => {
  const targetTime = new Date();
  targetTime.setHours(12, 4, 0); // Set the target time to 12:04

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

  function convertToBengaliNumber(num) {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .padStart(2, "0") // Ensure two digits
      .split("")
      .map((digit) => bengaliDigits[parseInt(digit, 10)])
      .join("");
  }

  const { hours, minutes, seconds, progress } = timeLeft;

  // Calculate SVG Circle properties
  const radius = 70; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
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
          strokeWidth="5"
        />
        {/* SVG Circle for the blue countdown */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Countdown Time */}
      <div className="text-center">
        <p className="">
          {convertToBengaliNumber(hours)}:{convertToBengaliNumber(minutes)}:
          {convertToBengaliNumber(seconds)}
        </p>
      </div>
    </div>
  );
};

export default SalahLeftTime;
