import { Gift, BookOpen, Music, FileText, Volume2 } from "lucide-react";
import bonusEbook from "@/assets/bonus-ebook.png";
import CountdownTimer from "./CountdownTimer";

const SpecialOfferSection = () => {
  const bonuses = [
    {
      icon: BookOpen,
      title: "Ebook: A Voz do Louvor",
      description: "O Guia Prático Para Cantar Melhor na Igreja",
    },
    {
      icon: Music,
      title: "Multitracks Gospel",
      description: "Arquivos com instrumentos separados para ensaiar como um profissional.",
    },
    {
      icon: FileText,
      title: "5.000 Partituras Gospel",
      description: "Uma biblioteca digital para músicos e ministérios.",
    },
    {
      icon: Volume2,
      title: "Músicas de Fundo para Oração",
      description: "Instrumentais gospel perfeitos para momentos de oração e pregação.",
    },
  ];

  return (
    <section className="section-dark py-12 px-4">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
            OFERTA ESPECIAL
          </p>
          <h2 className="text-2xl font-black text-white">
            SOMENTE HOJE:
          </h2>
        </div>

        {/* Full Countdown Timer */}
        <CountdownTimer variant="full" />

        {/* Main Offer Card */}
        <div className="card-elevated p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-xl font-black text-foreground">Plano Completo</span>
          </div>
          <p className="text-center text-lg font-bold text-primary mb-4">
            +4 BÔNUS EXCLUSIVOS
          </p>
          
          {/* Ebook Image */}
          <div className="flex justify-center mb-6">
          <img 
            src={bonusEbook} 
            alt="Pacote de Bônus - Playbacks Gospel" 
            className="w-full max-w-xs h-auto drop-shadow-lg"
          />
          </div>

          {/* Bonuses List */}
          <div className="space-y-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{bonus.title}</h4>
                  <p className="text-xs text-muted-foreground">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a 
          href="#pricing" 
          className="btn-gradient w-full flex items-center justify-center text-lg animate-stretch"
        >
          🔥 QUERO AGORA! 🔥
        </a>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
