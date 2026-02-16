import { Heart, Target, Users, Sparkles } from "lucide-react";

const StorySection = () => {
  const painPoints = [
    "CDs que custavam R$ 15,00 por apenas poucos hinos.",
    "Playbacks do Youtube que falhavam na hora do culto.",
    "Horas perdidas procurando os hinos certos para louvar.",
    "Louvores importantes deixando de ser cantados por falta de material.",
  ];

  const storyCards = [
    {
      icon: Heart,
      iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
      iconColor: "text-white",
      title: "Uma Missão Que Nasceu em Casa",
      content: "Desde pequeno, eu via a mesma luta: minha mãe louvava na igreja, mas sempre enfrentava a dificuldade de encontrar playbacks de qualidade.",
      hasList: false,
    },
    {
      icon: Target,
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      iconColor: "text-white",
      title: "A Dor Que Nos Motivou",
      intro: "Minha mãe sempre me pedia ajuda. Mas o que mais me doía era ver o quanto ela gastava em CD's.",
      hasList: true,
    },
    {
      icon: Users,
      iconBg: "bg-gradient-to-br from-sky-400 to-blue-500",
      iconColor: "text-white",
      title: "A Solução Que Construímos Juntos",
      content: "Foi quando tive uma visão: e se pudéssemos reunir milhares de playbacks de alta qualidade em um só lugar? Então juntei uma equipe apaixonada por adoração e trabalhamos por meses construindo o Estúdio Gospel, organizando e testando cada arquivo para garantir máxima qualidade.",
      hasList: false,
    },
    {
      icon: Sparkles,
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white",
      title: "Por Que Apenas R$ 10,00?",
      content: "Muitos me perguntam por que é tão barato. A resposta é simples. Esse valor simbólico cobre nossos custos e nos permite continuar ajudando. Nossa missão não é lucrar. É facilitar o louvor em milhares de igrejas pelo Brasil.",
      hasList: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary via-secondary to-background">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-black text-foreground mb-1">
            POR QUE CRIAMOS
          </h2>
          <p className="text-2xl font-black text-gradient">
            ESTE PROJETO?
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto">
            Uma história de fé, família e dedicação ao louvor
          </p>
        </div>

        {/* Story Cards */}
        <div className="space-y-5">
          {storyCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shadow-md`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground leading-tight">
                  {card.title}
                </h3>
              </div>
              
              {card.hasList ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {card.intro}
                  </p>
                  <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                    {painPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">{point}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 mb-6 border border-primary/20">
            <p className="text-foreground font-semibold italic text-lg leading-relaxed">
              "Este projeto foi feito pensando em você, que enfrenta a mesma dificuldade."
            </p>
          </div>
          
          <a 
            href="#pricing" 
            className="btn-gradient inline-flex items-center justify-center text-lg px-10 shadow-gold"
          >
            QUERO FAZER PARTE ❤️
          </a>
          
          <p className="text-muted-foreground text-sm mt-5">
            Que Deus abençoe seu ministério! 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
