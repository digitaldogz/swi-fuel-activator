import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  FileText,
  Users
} from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-energy/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Nossa equipe de especialistas está pronta para ajudar você a revolucionar 
              a eficiência da sua frota
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Demonstração</CardTitle>
                <CardDescription>
                  Solicite uma demonstração gratuita em sua empresa
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-energy/20 hover:border-energy/40 transition-colors">
              <CardHeader>
                <FileText className="w-12 h-12 text-energy mx-auto mb-4" />
                <CardTitle>Orçamento</CardTitle>
                <CardDescription>
                  Receba uma proposta personalizada para sua frota
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-action/20 hover:border-action/40 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-action mx-auto mb-4" />
                <CardTitle>Consultoria</CardTitle>
                <CardDescription>
                  Consultoria técnica especializada em combustíveis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Suporte</CardTitle>
                <CardDescription>
                  Suporte técnico para clientes existentes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Envie sua Mensagem
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-[0.9375rem] font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input id="nome" type="text" placeholder="Seu nome completo" required />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-[0.9375rem] font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input id="empresa" type="text" placeholder="Nome da empresa" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[0.9375rem] font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-[0.9375rem] font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input id="telefone" type="tel" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-[0.9375rem] font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <select 
                    id="assunto" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="demonstracao">Solicitar Demonstração</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="consultoria">Consultoria Técnica</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-[0.9375rem] font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    id="mensagem" 
                    placeholder="Conte-nos sobre sua necessidade..."
                    rows={5}
                    required
                  />
                </div>

                <Button variant="action" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                    <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">
                      Seg-Sex: 8h às 18h | Sáb: 8h às 12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-muted-foreground">contato@swifuelactivator.com</p>
                    <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">
                      Resposta em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. das Indústrias, 1234<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Atendimento Especializado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Nossa equipe técnica possui mais de 15 anos de experiência 
                    no mercado de combustíveis e está pronta para oferecer 
                    a melhor solução para sua empresa.
                  </p>
                  <Button variant="outline" className="border-white text-primary-foreground hover:bg-white hover:text-primary">
                    Agendar Reunião
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;