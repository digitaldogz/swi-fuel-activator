import { Button } from "@/components/ui/button";
import { ArrowRight, Fuel, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Frota de caminhões modernos em estrada" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Ative a Eficiência do Seu
              <span className="block bg-gradient-to-r from-energy to-action bg-clip-text text-transparent drop-shadow-lg">
                Combustível
              </span>
              com SWI Fuel Activator
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed drop-shadow-md">
              Reduza até 15% no consumo, diminua emissões e otimize motores sem alterar garantias – 
              <strong> comprovado por testes independentes</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="action" size="lg" className="text-lg px-8 py-4">
                Solicite um Teste Gratuito
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white hover:bg-white text-gray-600">
                Por Que Somos Diferentes
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Fuel className="w-12 h-12 text-energy mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">Economia de Combustível</h3>
                <p className="text-white/80 drop-shadow-sm text-lg">Até 15% de redução no consumo</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <TrendingUp className="w-12 h-12 text-energy mb-4" />
                <h3 className="font-semibold text-white mb-2 drop-shadow-md text-xl">Aumento de Performance</h3>
                <p className="text-white/80 drop-shadow-sm text-lg">Melhora significativa na potência do motor</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Shield className="w-12 h-12 text-energy mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">Redução de Emissões</h3>
                <p className="text-white/80 drop-shadow-sm text-lg">Combustão mais limpa e sustentável</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;