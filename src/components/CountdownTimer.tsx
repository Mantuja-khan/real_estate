import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  onExpire?: () => void;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onExpire, className = "" }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = null;

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else if (onExpire) {
        onExpire();
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  if (!timeLeft) return null;

  return (
    <div className={`flex items-center justify-center gap-2 py-1 ${className}`}>
      <span className="text-sm font-black uppercase tracking-[0.1em]">Registration Closes In:</span>
      <div className="flex gap-1.5 text-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white text-red-600 px-1 py-0 rounded-sm min-w-[28px] sm:min-w-[36px] text-sm sm:text-base font-black shadow-sm overflow-hidden flex items-center justify-center">
      <span key={value} className="animate-flip-digit inline-block">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-[7px] sm:text-[8px] mt-0.5 font-extrabold uppercase tracking-tighter opacity-90 leading-none">{label}</span>
  </div>
);

export default CountdownTimer;
