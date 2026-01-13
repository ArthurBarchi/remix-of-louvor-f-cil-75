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
          <div className="bg-background rounded-2xl p-6 border-2 border-success">
            <div className="text-center mb-6">
              <h3 className="text-xl font-black text-foreground">
                Pacote Básico
              </h3>
              <p className="text-base text-destructive line-through font-semibold mt-2">
                R$ 79,00
              </p>
              <p className="text-4xl font-black text-success mt-1">
                R$ 10,00
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Pagamento único
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                1.500 Playbacks Gospel
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Check className="w-5 h-5 text-success flex-shrink-0" />
                Acesso imediato após o pagamento
              </li>
            </ul>

            <a 
              href="https://www.ggcheckout.com/checkout/v3/uda9p5CSRKXTcAwHsLvQ" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 text-center font-bold text-white bg-success rounded-full hover:bg-success/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              QUERO AGORA – R$ 10,00
            </a>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Pagamento 100% protegido
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

            <div className="text-center mb-6 pt-2">
              <h3 className="text-xl font-black text-foreground">
                Pacote Completo
              </h3>
              <p className="text-base text-destructive line-through font-semibold mt-2">
                R$ 137,90
              </p>
              <p className="text-4xl font-black text-success mt-1">
                R$ 27,00
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Pagamento único
              </p>
            </div>

            {/* Tudo do Pacote Básico */}
            <div className="bg-success/10 border border-success/30 rounded-xl py-3 px-4 mb-4">
              <p className="text-center text-success font-bold text-sm">
                TUDO DO PACOTE BÁSICO +
              </p>
            </div>

            {/* Bônus Cards */}
            <div className="space-y-3 mb-6">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-primary">BÔNUS 1</p>
                    <p className="text-sm font-semibold text-foreground">Ebook "A Voz do Louvor"</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-primary">BÔNUS 2</p>
                    <p className="text-sm font-semibold text-foreground">Multitracks Gospel</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-primary">BÔNUS 3</p>
                    <p className="text-sm font-semibold text-foreground">5.000 Partituras Gospel</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-primary">BÔNUS 4</p>
                    <p className="text-sm font-semibold text-foreground">Músicas de Fundo para Oração</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.ggcheckout.com/checkout/v3/tkVEmLZIcs4BlAmdERb3" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 text-center font-bold text-white bg-success rounded-full hover:bg-success/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              QUERO AGORA – R$ 27,00
            </a>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Pagamento 100% protegido
            </p>
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
