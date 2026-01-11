import { Check, Star, Zap, Lock, Shield, Gift } from "lucide-react";
import { useEffect, useState } from "react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 35,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="section-dark py-12 px-4">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-white mb-1">
            TRANSFORME SUA
          </h2>
          <p className="text-2xl font-black text-primary">
            ADORAÇÃO AGORA!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-6">
          {/* Basic Package */}
          <div className="card-elevated p-6">
            <div className="text-center mb-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                PACOTE BÁSICO
              </p>
              <h3 className="text-lg font-black text-foreground">
                1.500 Playbacks
              </h3>
            </div>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-success" />
                1.500 Playbacks Gospel
              </li>
            </ul>

            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground line-through">
                De R$ 54,90 por apenas:
              </p>
              <p className="text-4xl font-black text-foreground">
                R$ 10,00
              </p>
              <span className="inline-block bg-success/10 text-success text-xs font-bold px-3 py-1 rounded-full">
                82% DE DESCONTO
              </span>
            </div>

            <a 
              href="#" 
              className="block w-full py-3 px-6 text-center font-bold rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              QUERO ESSE
            </a>
            
            <p className="text-xs text-center text-muted-foreground mt-3">
              ✓ Acesso imediato após a compra
            </p>
          </div>

          {/* Complete Package */}
          <div className="card-featured p-6 relative">
            {/* Featured Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="badge-featured flex items-center gap-1">
                <Star className="w-3 h-3" /> MAIS VENDIDO
              </span>
            </div>

            <div className="text-center mb-4 pt-2">
              <p className="text-xs font-bold text-primary uppercase tracking-wider">
                PACOTE COMPLETO
              </p>
              <h3 className="text-lg font-black text-foreground">
                2.500 Playbacks
              </h3>
            </div>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-success" />
                2.500 Playbacks Gospel
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                Ebook "A Voz do Louvor"
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                Multitracks Gospel
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                5.000 Partituras Gospel
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                Músicas de Fundo para Oração
              </li>
            </ul>

            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground line-through">
                De R$ 137,90 por apenas:
              </p>
              <p className="text-5xl font-black text-gradient">
                R$ 27,00
              </p>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mt-2">
                ECONOMIZE R$ 110,90 (80% OFF)
              </span>
            </div>

            <a 
              href="#" 
              className="btn-gradient w-full flex items-center justify-center text-base"
            >
              QUERO PACOTE COMPLETO
            </a>
            
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3" /> Acesso imediato
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" /> 100% seguro
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" /> 7 dias garantia
              </span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm mb-3">Desconto acaba em:</p>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-2xl font-black text-white">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="text-2xl font-black text-white">:</span>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-2xl font-black text-white">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="text-2xl font-black text-white">:</span>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-2xl font-black text-white">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 flex items-center justify-center gap-4 opacity-60">
          <img src="https://logospng.org/download/visa/logo-visa-1024.png" alt="Visa" className="h-6 object-contain invert" />
          <img src="https://logospng.org/download/mastercard/logo-mastercard-1024.png" alt="Mastercard" className="h-8 object-contain" />
          <img src="https://logospng.org/download/pix/logo-pix-icone-1024.png" alt="Pix" className="h-6 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
