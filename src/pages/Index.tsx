import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Leaf, Shield, CheckCircle, ArrowRight, Star, Quote, Car, Truck, Construction, Ship, Train, Factory, Zap, Sparkles, Award } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="fixed-parallax-section">
      {/* Por Que Somos Diferentes */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 md:text-5xl">
                Por Que Somos Diferentes?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-2xl">Ativador, Não Aditivo</h3>
                    <p className="text-muted-foreground text-lg">
                      Tecnologia exclusiva que ativa moléculas sem alterar composição química
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-2xl">Testes Independentes</h3>
                    <p className="text-lg text-muted-foreground">
                      Validado por laboratórios ASG e certificado EN590
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-2xl">Garantias Preservadas</h3>
                    <p className="text-lg text-muted-foreground">
                      Não invalida garantias de fábrica dos motores
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="default" size="lg">
                  Conheça Nossa Tecnologia
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-6">Resultados Comprovados</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Economia de Combustível</span>
                  <span className="font-bold text-lg text-energy">7-15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Redução de Emissões</span>
                  <span className="font-bold text-lg text-energy">20-30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Aumento de Potência</span>
                  <span className="font-bold text-lg text-energy">5-8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">ROI Típico</span>
                  <span className="font-bold text-lg text-energy">3-6 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-energy/10 relative overflow-hidden">
        {/* Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Award className="absolute top-16 left-12 w-18 h-18 text-energy/15 rotate-15" />
          <Sparkles className="absolute bottom-24 right-16 w-16 h-16 text-primary/15 -rotate-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-foreground mb-12 text-5xl">Apresentação</h2>

            {/* YouTube Video */}
            <div className="max-w-4xl mx-auto">
              <div className="youtube-embed-container relative w-full rounded-lg overflow-hidden shadow-2xl">
                <iframe src="https://www.youtube.com/embed/opXx9QSkLc4?rel=0&modestbranding=1&controls=0&showinfo=0&autoplay=0&loop=1&playlist=opXx9QSkLc4&iv_load_policy=3&disablekb=1&fs=0" title="SWI Fuel Activator - Apresentação" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-[-60px] left-0 w-full h-[calc(100%+60px)] border-none"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos de Aplicação Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,hsl(var(--action))_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Segmentos de Aplicação
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Soluções eficientes para diversos setores
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Carros */}
            <Card className="relative aspect-square overflow-hidden border-0 group cursor-pointer w-full max-w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                backgroundImage: `url('/uploads/e1de93fc-ec5c-464e-a683-e71253d4fd18.png')`
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-300" />
              <div className="relative h-full flex items-end p-6">
                <CardTitle className="text-xl font-semibold text-white">Carros</CardTitle>
              </div>
            </Card>

            {/* Transportadores */}
            <Card className="relative aspect-square overflow-hidden border-0 group cursor-pointer w-full max-w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                backgroundImage: `url('/uploads/25677ddf-ab34-4b51-a0e8-026068c2c8a2.png')`
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-300" />
              <div className="relative h-full flex items-end p-6">
                <CardTitle className="text-xl font-semibold text-white">Transportadores</CardTitle>
              </div>
            </Card>

            {/* Máquinas Pesadas */}
            <Card className="relative aspect-square overflow-hidden border-0 group cursor-pointer w-full max-w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                backgroundImage: `url('/uploads/6db37aff-e520-41bd-b24b-b30c131e58cd.png')`
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-300" />
              <div className="relative h-full flex items-end p-6">
                <CardTitle className="text-xl font-semibold text-white">Máquinas Pesadas</CardTitle>
              </div>
            </Card>

            {/* Embarcações Marítimas */}
            <Card className="relative aspect-square overflow-hidden border-0 group cursor-pointer w-full max-w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                backgroundImage: `url('/uploads/55689e8c-3723-4722-b508-714d979ce089.png')`
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-300" />
              <div className="relative h-full flex items-end p-6">
                <CardTitle className="text-xl font-semibold text-white">Embarcações Marítimas</CardTitle>
              </div>
            </Card>

            {/* Locomotivas a Diesel */}
            <Card className="relative aspect-square overflow-hidden border-0 group cursor-pointer w-full max-w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                backgroundImage: `url('/uploads/d6b172fe-bbb1-4163-a7e8-fedf4656b197.png')`
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-300" />
              <div className="relative h-full flex items-end p-6">
                <CardTitle className="text-xl font-semibold text-white">Locomotivas a Diesel</CardTitle>
              </div>
            </Card>

            {/* Fornos e Queimadores Industriais */}
            <Card className="relative aspect-square overflow-hidden border-0 group cursor-pointer w-full max-w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                backgroundImage: `url('/uploads/5cf5011e-7788-43e9-8075-d104a6e685d1.png')`
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-300" />
              <div className="relative h-full flex items-end p-6">
                <CardTitle className="text-xl font-semibold text-white">Fornos e Queimadores Industriais</CardTitle>
              </div>
            </Card>

            {/* Turbinas e Usinas Termoelétricas */}
            <Card className="relative aspect-square overflow-hidden border-0 group cursor-pointer w-full max-w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                backgroundImage: `url('/uploads/374f2994-f103-4b5a-822f-611f84493807.png')`
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-300" />
              <div className="relative h-full flex items-end p-6">
                <CardTitle className="text-xl font-semibold text-white">Turbinas e Usinas Termoelétricas</CardTitle>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Economia Média Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 md:text-5xl">
              Economia Média por Tipo de Combustível
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-2xl">
              Resultados comprovados para diferentes combustíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-20">
            <Card className="bg-[hsl(14_68%_46%)] border-2 border-[hsl(14_68%_46%/0.6)] hover:border-[hsl(14_68%_46%/0.9)] hover:shadow-[0_10px_30px_-10px_hsl(14_68%_46%/0.3)] transition-all duration-300 text-center group">
              <CardHeader>
                <CardTitle className="text-xl text-white">DIESEL</CardTitle>
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-all duration-300">+7%</div>
                <CardDescription className="text-lg text-white/90 leading-relaxed">acima de 7%</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[hsl(37_91%_55%)] border-2 border-[hsl(37_91%_55%/0.6)] hover:border-[hsl(37_91%_55%/0.9)] hover:shadow-[0_10px_30px_-10px_hsl(37_91%_55%/0.3)] transition-all duration-300 text-center group">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">DIESEL MARÍTIMO</CardTitle>
                <div className="text-3xl font-bold text-gray-900 group-hover:scale-110 transition-all duration-300">+7%</div>
                <CardDescription className="text-lg text-gray-800 leading-relaxed">acima de 7%</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[hsl(25_15%_31%)] border-2 border-[hsl(25_15%_31%/0.6)] hover:border-[hsl(25_15%_31%/0.9)] hover:shadow-[0_10px_30px_-10px_hsl(25_15%_31%/0.3)] transition-all duration-300 text-center group">
              <CardHeader>
                <CardTitle className="text-xl text-white">ÓLEO PESADO</CardTitle>
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-all duration-300">+10%</div>
                <CardDescription className="text-lg text-white/90 leading-relaxed">acima de 10%</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[hsl(67_49%_59%)] border-2 border-[hsl(67_49%_59%/0.6)] hover:border-[hsl(67_49%_59%/0.9)] hover:shadow-[0_10px_30px_-10px_hsl(67_49%_59%/0.3)] transition-all duration-300 text-center group">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">GASOLINA</CardTitle>
                <div className="text-3xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">+10%</div>
                <CardDescription className="text-lg text-gray-800 leading-relaxed">acima de 10%</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[hsl(81_49%_51%)] border-2 border-[hsl(81_49%_51%/0.6)] hover:border-[hsl(81_49%_51%/0.9)] hover:shadow-[0_10px_30px_-10px_hsl(81_49%_51%/0.3)] transition-all duration-300 text-center group">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">ETANOL</CardTitle>
                <div className="text-3xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">+15%</div>
                <CardDescription className="text-lg text-gray-800 leading-relaxed">acima de 15%</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaser de Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 md:text-5xl">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-muted-foreground text-2xl">
              Empresas que já transformaram sua eficiência com SWI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
            <Card className="bg-gradient-to-br from-primary/5 to-energy/5 border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-energy text-energy" />)}
                </div>
                <Quote className="w-8 h-8 text-primary mb-2" />
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  "Reduziu 12% no consumo da nossa frota. ROI em 4 meses. Recomendo!"
                </p>
                <div className="font-semibold text-lg">João Silva</div>
                <div className="text-base text-muted-foreground">Diretor de Logística - TransLog</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-energy/5 to-action/5 border-energy/20">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-energy text-energy" />)}
                </div>
                <Quote className="w-8 h-8 text-energy mb-2" />
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  "O uso do SWI é uma das formas de afirmar o nosso compromisso com o meio ambiente."
                </p>
                <div className="font-semibold text-lg">Luigi Luft</div>
                <div className="text-base text-muted-foreground">Diretor de Operações - Luft Logistics</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-action/5 to-primary/5 border-action/20">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-energy text-energy" />)}
                </div>
                <Quote className="w-8 h-8 text-action mb-2" />
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  "Sem alteração nas garantias dos motores. Confiança total no produto."
                </p>
                <div className="font-semibold text-lg">Carlos Mendes</div>
                <div className="text-base text-muted-foreground">Eng. de Frotas - MegaLog</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Ativar a Eficiência da Sua Frota?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicite um teste gratuito e comprove os benefícios do SWI Fuel Activator
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="action" size="lg" className="text-lg px-8 py-4">
              Solicitar Teste Gratuito
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white hover:bg-white text-gray-600">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;