import { useEffect, useState } from 'react'

const CountDown = ({targetDate}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="flex items-center gap-1 text-[10px] font-bold text-[#5539A8] py-1 px-[11px] rounded-full bg-[#F5F5F5]">
      <span>{days ? days : 0}d </span>
      <span>{hours ? hours : 0}h </span>
      <span>{minutes ? minutes : 0}m </span>
      <span>{seconds ? seconds : 0}s</span>
    </div>
  )
}

export default CountDown