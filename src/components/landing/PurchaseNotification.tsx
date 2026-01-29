import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

const purchases = [
  { name: "Eduardo Cardoso", city: "Curitiba", state: "PR", package: "Pacote Completo" },
  { name: "Maria Silva", city: "São Paulo", state: "SP", package: "Pacote Básico" },
  { name: "João Santos", city: "Rio de Janeiro", state: "RJ", package: "Pacote Completo" },
  { name: "Ana Costa", city: "Belo Horizonte", state: "MG", package: "Pacote Completo" },
  { name: "Pedro Lima", city: "Salvador", state: "BA", package: "Pacote Básico" },
  { name: "Juliana Oliveira", city: "Brasília", state: "DF", package: "Pacote Completo" },
  { name: "Carlos Mendes", city: "Fortaleza", state: "CE", package: "Pacote Completo" },
  { name: "Fernanda Souza", city: "Recife", state: "PE", package: "Pacote Básico" },
];

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(purchases[0]);

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      // Dispatch custom event to update scarcity bar
      window.dispatchEvent(new CustomEvent('newPurchase'));

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then show every 8-15 seconds randomly
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 7000) + 8000;
      setTimeout(showNotification, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white rounded-xl shadow-xl border border-yellow-200 p-4 flex items-center gap-3 max-w-[320px]">
        {/* Yellow circle with shopping bag icon */}
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-5 h-5 text-white" />
        </div>

        {/* Purchase info */}
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 text-sm">
            {currentPurchase.name} de {currentPurchase.city}, {currentPurchase.state}
          </span>
          <span className="text-gray-600 text-xs">
            acabou de garantir o {currentPurchase.package}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;
