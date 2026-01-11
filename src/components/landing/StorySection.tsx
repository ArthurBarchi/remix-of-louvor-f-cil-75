import { Heart, Target, Users, Sparkles } from "lucide-react";

const StorySection = () => {
  const painPoints = [
    "CDs que custavam R$ 15,00 por apenas poucos hinos.",
    "Playbacks do Youtube que falhavam na hora do culto.",
    "Horas perdidas procurando os hinos certos para louvar.",
    "Louvores importantes deixando de ser cantados por falta de material.",
  ];

  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground mb-1">
            POR QUE CRIAMOS
          </h2>
          <p className="text-2xl font-black text-gradient">
            ESTE PROJETO?
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Uma história de fé, família e dedicação ao louvor
          </p>
        </div>

        {/* Story Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-card rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-bold text-foreground">
                Uma Missão Que Nasceu em Casa
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desde pequeno, eu via a mesma luta: minha mãe louvava na igreja, mas sempre enfrentava a dificuldade de encontrar playbacks de qualidade.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">
                A Dor Que Nos Motivou
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Minha mãe sempre me pedia ajuda. Mas o que mais me doía era ver o quanto ela gastava em CD's.
            </p>
            <ul className="space-y-2">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-card rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-bold text-foreground">
                A Solução Que Construímos Juntos
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Foi quando tive uma visão: e se pudéssemos reunir milhares de playbacks de alta qualidade em um só lugar? Então juntei uma equipe apaixonada por adoração e trabalhamos por meses construindo o Estúdio Gospel, organizando e testando cada arquivo para garantir máxima qualidade.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-card rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="font-bold text-foreground">
                Por Que Apenas R$ 37,90?
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Muitos me perguntam por que é tão barato. A resposta é simples. Esse valor simbólico cobre nossos custos e nos permite continuar ajudando. Nossa missão não é lucrar. É facilitar o louvor em milhares de igrejas pelo Brasil.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-8 text-center">
          <p className="text-foreground font-medium italic mb-6">
            "Este projeto foi feito pensando em você, que enfrenta a mesma dificuldade."
          </p>
          
          <a 
            href="#pricing" 
            className="btn-gradient inline-flex items-center justify-center text-lg px-8"
          >
            QUERO FAZER PARTE ❤️
          </a>
          
          <p className="text-muted-foreground text-sm mt-4">
            Que Deus abençoe seu ministério! 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
