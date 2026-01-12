import { Star, Users, ThumbsUp, Award, MessageCircle } from "lucide-react";
import whatsappTestimonials from "@/assets/whatsapp-testimonials.png";

const TestimonialsSection = () => {
  const stats = [
    { icon: Users, value: "+5.000", label: "Ministérios Abençoados" },
    { icon: ThumbsUp, value: "97%", label: "De Satisfação" },
    { icon: Star, value: "4.9/5", label: "Avaliação Média" },
    { icon: MessageCircle, value: "+1.000", label: "Mensagens de Gratidão" },
  ];

  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground mb-1">
            VEJA O QUE ACHAM
          </h2>
          <p className="text-2xl font-black text-gradient">
            DOS PLAYBACKS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Depoimentos de Ministérios Transformados
          </p>
        </div>

        {/* WhatsApp Testimonials Image */}
        <div className="mb-8">
          <img 
            src={whatsappTestimonials} 
            alt="Depoimentos de clientes satisfeitos no WhatsApp" 
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Social Proof */}
        <div className="bg-card rounded-2xl p-6 shadow-sm mb-6">
          <p className="text-center text-foreground font-semibold mb-6">
            Junte-se a Milhares de Ministérios Satisfeitos!
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-secondary/50 rounded-xl"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Star Rating Display */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Avaliado por milhares de usuários
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
