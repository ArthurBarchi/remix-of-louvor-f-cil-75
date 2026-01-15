import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-8 px-4 bg-secondary border-t border-border">
      <div className="container max-w-lg mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-2">
          © 2026 Estúdio Gospel. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          Feito com <Heart className="w-3 h-3 text-red-500 fill-red-500" /> para abençoar igrejas
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
