import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Award, Shield } from "lucide-react";
const Footer = () => {
  const handleFooterNavClick = () => {
    // Scroll to top when navigating from footer
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/uploads/22b02be1-de67-4b06-b5da-c5085b6181a3.png"
              alt="SWI Symbol"
              className="w-12 h-12 rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">SWI Fuel Activator</span>
              <span className="text-base text-primary-foreground/80">Eficiência e Evolução</span>
            </div>
          </div>
          <p className="text-lg text-primary-foreground/80 mb-6 max-w-md">
            Líder em tecnologia de ativação de combustíveis, oferecendo soluções
            inovadoras para maximizar eficiência e sustentabilidade.
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-energy" />
              <span className="text-lg text-primary-foreground/80">+55 (21) 3736-3848</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-energy" />
              <span className="text-lg text-primary-foreground/80">sales@swifuelactivator.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-energy" />
              <span className="text-lg text-primary-foreground/80">Rio de Janeiro

                Praia Botafogo 228, andar 16
                22250-145</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><Link to="/produto" onClick={handleFooterNavClick} className="text-lg text-primary-foreground/80 hover:text-white transition-colors">Produto</Link></li>
            <li><Link to="/beneficios" onClick={handleFooterNavClick} className="text-lg text-primary-foreground/80 hover:text-white transition-colors">Benefícios</Link></li>
            <li><Link to="/funcionamento" onClick={handleFooterNavClick} className="text-lg text-primary-foreground/80 hover:text-white transition-colors">Funcionamento</Link></li>
            <li><Link to="/cool-flame" onClick={handleFooterNavClick} className="text-lg text-primary-foreground/80 hover:text-white transition-colors">Cool Flame</Link></li>

            <li><Link to="/contato" onClick={handleFooterNavClick} className="text-lg text-primary-foreground/80 hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Certificações</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
              <Award className="w-8 h-8 text-energy" />
              <div>
                <div className="font-semibold text-lg">ASG Analytik-Service AG</div>
                <div className="text-base text-primary-foreground/80">Comprovação Científica</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
              <Shield className="w-8 h-8 text-energy" />
              <div>
                <div className="font-semibold text-lg">EN590</div>
                <div className="text-base text-primary-foreground/80">Padrão Europeu</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-primary-foreground/80 text-base">
          © 2024 SWI Fuel Activator. Todos os direitos reservados.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacidade" onClick={handleFooterNavClick} className="text-primary-foreground/80 hover:text-white text-base transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/termos" onClick={handleFooterNavClick} className="text-primary-foreground/80 hover:text-white text-base transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;