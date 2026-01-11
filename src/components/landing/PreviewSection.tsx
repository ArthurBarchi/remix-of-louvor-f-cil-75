import { Download, Usb, Church, Music, Disc, Users } from "lucide-react";
import mockupDevices from "@/assets/mockup-devices.png";

const PreviewSection = () => {
  const stats = [
    { icon: Users, value: "+100", label: "Cantores" },
    { icon: Disc, value: "+500", label: "Álbuns" },
    { icon: Music, value: "+1.500", label: "Hinos" },
  ];

  const steps = [
    { icon: Download, label: "Baixe Instantaneamente" },
    { icon: Usb, label: "Copie pro pendrive" },
    { icon: Church, label: "Use na Igreja" },
  ];

  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground mb-1">
            VEJA O QUE VOCÊ
          </h2>
          <p className="text-2xl font-black text-gradient">
            RECEBE NA PRÁTICA
          </p>
        </div>

        {/* Mockup Image */}
        <div className="mb-8">
          <img 
            src={mockupDevices} 
            alt="Playbacks em múltiplos dispositivos" 
            className="w-full rounded-xl"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-4 text-center shadow-sm"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between gap-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-medium text-foreground">{step.label}</p>
              {index < steps.length - 1 && (
                <div className="absolute translate-x-12">
                  {/* Arrow would go here but we'll keep it simple */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
