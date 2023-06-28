import { useCountdown } from '../../hooks/useCountDown';

const CountDownTimer = ({targetDate}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <p className="flex items-center gap-1 text-[10px] font-bold text-[#5539A8] py-1 px-[11px] rounded-full bg-[#F5F5F5]">Date Expires!</p>;
  } else {
    return (
      <p className="flex items-center gap-1 text-[10px] font-bold text-[#5539A8] py-1 px-[11px] rounded-full bg-[#F5F5F5]">
        {days}d {hours}h {minutes}m {seconds}s
      </p>
    );
  }
}

export default CountDownTimer