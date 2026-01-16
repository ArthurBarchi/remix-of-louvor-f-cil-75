import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  variant?: "badge" | "full";
}

const CountdownTimer = ({ variant = "badge" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const months = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
      ];
      return `${now.getDate()} de ${months[now.getMonth()]}`;
    };

    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return { hours, minutes, seconds };
    };

    setCurrentDate(formatDate());
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setCurrentDate(formatDate());
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, "0");

  if (variant === "badge") {
    return (
      <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
        <Clock className="w-4 h-4" />
        <span>Promoção válida só hoje {currentDate}!</span>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-6">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Oferta por tempo limitado
        </span>
      </div>

      {/* Title */}
      <h3 className="text-center text-xl font-black text-foreground mb-2">
        Promoção válida apenas hoje
      </h3>

      {/* Subtitle */}
      <p className="text-center text-sm text-muted-foreground mb-4">
        {currentDate} • Termina à meia-noite
      </p>

      {/* Countdown Boxes */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="bg-amber-500 rounded-xl px-4 py-3 min-w-[70px] text-center">
          <div className="text-2xl font-black text-white">{pad(timeLeft.hours)}</div>
          <div className="text-xs text-white/80 uppercase font-medium">Horas</div>
        </div>
        <span className="text-2xl font-bold text-foreground">:</span>
        <div className="bg-amber-500 rounded-xl px-4 py-3 min-w-[70px] text-center">
          <div className="text-2xl font-black text-white">{pad(timeLeft.minutes)}</div>
          <div className="text-xs text-white/80 uppercase font-medium">Min</div>
        </div>
        <span className="text-2xl font-bold text-foreground">:</span>
        <div className="bg-amber-500 rounded-xl px-4 py-3 min-w-[70px] text-center">
          <div className="text-2xl font-black text-white">{pad(timeLeft.seconds)}</div>
          <div className="text-xs text-white/80 uppercase font-medium">Seg</div>
        </div>
      </div>

      {/* Urgency Text */}
      <p className="text-center text-xs text-muted-foreground">
        Após esse prazo, o preço volta ao normal
      </p>
    </div>
  );
};

export default CountdownTimer;
