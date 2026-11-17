import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, Cog, Zap, Award, CheckCircle, ArrowRight, FlaskConical, Gauge, Shield, Leaf, Fuel, DollarSign, Recycle, Truck, TreePine, Droplets, TrendingUp, Sparkles, Atom } from "lucide-react";
const Produto = () => {
  return <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed-parallax-section">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-energy/10 relative overflow-hidden">
          {/* Background Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Fuel className="absolute top-24 left-12 w-20 h-20 text-primary/15 rotate-12" />
            <Leaf className="absolute bottom-20 right-16 w-16 h-16 text-primary/15 -rotate-30" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 py-[30px]">
                SWI Fuel Activator: O Ativador que Revoluciona o Combustível
              </h1>

              {/* YouTube Video */}
              <div className="max-w-4xl mx-auto">
                <div className="youtube-embed-container relative w-full rounded-lg overflow-hidden shadow-2xl">
                  <iframe src="https://www.youtube.com/embed/WqOOoy9txEc?rel=0&modestbranding=1&controls=0&showinfo=0&autoplay=0&loop=1&playlist=WqOOoy9txEc&iv_load_policy=3&disablekb=1&fs=0" title="SWI Fuel Activator - Vídeo Demonstrativo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-[-60px] left-0 w-full h-[calc(100%+60px)] border-none"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5 relative overflow-hidden">
          {/* Background Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FlaskConical className="absolute top-16 left-12 w-18 h-18 text-energy/15 rotate-15" />
            <TrendingUp className="absolute bottom-24 right-16 w-16 h-16 text-primary/15 -rotate-20" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Produto Concentrado Suíço de Alta Performance
              </h2>
              <div className="bg-card border border-border rounded-lg p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  O SWI Fuel Activator é um produto concentrado suíço que otimiza a combustão através de ação
                  físico-química, sem alterar as características originais do combustível.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Dosagem Simples</h3>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <p className="text-primary font-semibold text-xl">1ml por 15L de combustível</p>
                      <p className="text-[0.9375rem] text-muted-foreground mt-2 leading-relaxed">
                        Proporção ideal para máxima eficiência
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Origem Suíça</h3>
                    <div className="bg-energy/10 border border-energy/20 rounded-lg p-4">
                      <p className="text-primary font-semibold text-xl">Tecnologia Premium</p>
                      <p className="text-[0.9375rem] text-muted-foreground mt-2 leading-relaxed">
                        Desenvolvido com os mais altos padrões de qualidade
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Method Section */}
        <section className="py-20 bg-gradient-to-br from-energy/10 to-primary/10 relative overflow-hidden">
          {/* Background Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Droplets className="absolute top-16 left-12 w-18 h-18 text-primary/15 rotate-15" />
            <Atom className="absolute bottom-24 right-16 w-16 h-16 text-energy/15 -rotate-20" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Modo de Aplicação</h2>

              {/* YouTube Video */}
              <div className="max-w-4xl mx-auto">
                <div className="youtube-embed-container relative w-full rounded-lg overflow-hidden shadow-2xl">
                  <iframe src="https://www.youtube.com/embed/Eb49q_8N4s8?rel=0&modestbranding=1&controls=0&showinfo=0&autoplay=0&loop=1&playlist=Eb49q_8N4s8&iv_load_policy=3&disablekb=1&fs=0" title="SWI Fuel Activator - Modo de Aplicação" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-[-60px] left-0 w-full h-[calc(100%+60px)] border-none"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activator vs Additive Comparison */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5 relative overflow-hidden">
          {/* Background Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <DollarSign className="absolute top-20 left-20 w-18 h-18 text-energy/15 rotate-15" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
                Ativador vs. Aditivo: Entenda a Diferença
              </h2>
              <p className="text-2xl text-muted-foreground mb-12 text-center">
                Por que escolher um ativador em vez de um aditivo comum
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* SWI Activator */}
                <Card className="border-primary/30 bg-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 mr-3" />
                      SWI Ativador
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">Ação físico-química avançada</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">Sem detergentes na fórmula</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">Não invalida garantias do motor</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">Reduz consumo em até 15%</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">Otimiza a combustão molecular</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Common Additive */}
                <Card className="border-destructive/30 bg-destructive/50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-destructive flex items-center justify-center">
                      <Zap className="w-8 h-8 mr-3" />
                      Aditivo Comum
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <span className="text-lg">Contém detergentes químicos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <span className="text-lg">Pode invalidar garantias</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <span className="text-base text-lg">Foco apenas em limpeza</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <span className="text-lg">Resultados limitados</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <span className="text-lg">Não otimiza combustão</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          {/* Background Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Gauge className="absolute top-20 left-24 w-18 h-18 text-destructive/15 rotate-20" />
            <Sparkles className="absolute bottom-24 right-24 w-16 h-16 text-energy/15 -rotate-25" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl font-bold text-white mb-4">Baixe a Ficha Técnica Completa</h2>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Acesse especificações detalhadas, estudos de caso e dados técnicos do SWI Fuel Activator
            </p>
            <Button variant="action" size="lg" onClick={() => {
            // Placeholder for PDF download functionality
            alert("Ficha técnica será disponibilizada em breve. Entre em contato conosco para mais informações.");
          }} className="text-lg">
              Baixe a Ficha Técnica
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>;
};
export default Produto;