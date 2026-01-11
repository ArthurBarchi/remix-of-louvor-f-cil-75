import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como recebo o acesso?",
      answer: "Após a confirmação do pagamento, você recebe automaticamente um e-mail com o link para acessar todos os materiais. O acesso é imediato e vitalício!",
    },
    {
      question: "Posso usar no celular e no computador?",
      answer: "Sim! Você pode baixar os playbacks em qualquer dispositivo - celular, computador, tablet. E depois transferir para pendrive ou CD para usar na igreja.",
    },
    {
      question: "Os playbacks são de boa qualidade?",
      answer: "Todos os playbacks foram selecionados e testados para garantir máxima qualidade sonora. São arquivos em MP3 de alta definição, prontos para uso profissional.",
    },
    {
      question: "Posso gravar em um CD ou em um Pendrive?",
      answer: "Sim! Após baixar os arquivos, você pode gravá-los em CDs, pendrives ou qualquer outro dispositivo de armazenamento para usar onde preferir.",
    },
    {
      question: "A compra é segura?",
      answer: "100% segura! Utilizamos o Mercado Pago, uma das plataformas de pagamento mais confiáveis do Brasil. Seus dados são criptografados e protegidos.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-secondary rounded-xl border-none px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground text-sm py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
