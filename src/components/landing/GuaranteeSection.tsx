import { Shield, CreditCard, Cloud, Lock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: CreditCard,
      title: "Pagamento Seguro",
      description: "Processado pelo Mercado Pago, uma das plataformas mais seguras e confiáveis do Brasil. Seus dados financeiros são criptografados e protegidos.",
    },
    {
      icon: Cloud,
      title: "Armazenamento Seguro",
      description: "Todo o material fica hospedado no Google Drive, garantindo que seus arquivos estejam sempre disponíveis e protegidos.",
    },
    {
      icon: Lock,
      title: "Privacidade Garantida",
      description: "Seus dados pessoais são 100% protegidos e nunca serão compartilhados com terceiros.",
    },
    {
      icon: CheckCircle,
      title: "Satisfação Garantida",
      description: "Se dentro de 7 dias você não estiver satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicação.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-lg mx-auto">
        {/* Guarantee Badge */}
        <div className="bg-success/10 border border-success/20 rounded-2xl p-6 mb-8 text-center">
          <Shield className="w-12 h-12 mx-auto mb-3 text-success" />
          <h3 className="text-lg font-black text-foreground mb-1">
            GARANTIA DE 7 DIAS
          </h3>
          <p className="text-muted-foreground text-sm">
            Não gostou? Devolvemos seu dinheiro!
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground mb-1">
            SUA COMPRA ESTÁ
          </h2>
          <p className="text-2xl font-black text-gradient">
            100% PROTEGIDA
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="space-y-4 mb-8">
          {guarantees.map((item, index) => (
            <div 
              key={index}
              className="bg-secondary rounded-xl p-4 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a 
          href="#pricing" 
          className="btn-gradient w-full flex items-center justify-center text-lg"
        >
          COMPRAR AGORA
        </a>
      </div>
    </section>
  );
};

export default GuaranteeSection;
