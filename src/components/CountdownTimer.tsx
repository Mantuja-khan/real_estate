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
    <div className={`flex items-center gap-1 font-bold animate-blink uppercase tracking-wider ${className}`}>
      <span>Registration Ends In:</span>
      <div className="flex gap-0.5">
        <span>{timeLeft.days}d</span>
        <span>{timeLeft.hours}h</span>
        <span>{timeLeft.minutes}m</span>
        <span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
