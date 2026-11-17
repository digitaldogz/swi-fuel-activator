import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import CheckmarkAnimation from "@/components/animations/CheckmarkAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Zap, Settings, TrendingUp, Activity, Droplets, Gauge, Flame, BarChart3, ArrowRight, Beaker, Target, Trophy } from "lucide-react";
const ComoFunciona = () => {
  const mecanismos = [{
    icon: <Zap className="w-8 h-8 text-energy" />,
    title: "Redução da Temperatura na Formação da Mistura Ar-Combustível",
    description: "O SWI resfria a mistura ar-combustível na evaporação do combustível - como gelo em uma bebida quente – absorvendo mais calor sem alterar a composição química. A mistura fica compacta, então o motor comprime com menos esforço - diminuindo a perda de energia mecânica."
  }, {
    icon: <Settings className="w-8 h-8 text-energy" />,
    title: "Trabalho com Misturas Ar-Combustível Mais Pobres",
    description: "O motor pode operar com misturas mais pobres (menos combustível, com Lambda maior – excesso de ar/oxigênio), pois o ponto de ignição é deslocado para baixo. Isso leva a uma queima mais eficiente e diminui as emissões de gases poluentes."
  }, {
    icon: <TrendingUp className="w-8 h-8 text-energy" />,
    title: "Aumento da Velocidade de Ignição",
    description: "Os componentes do SWI elevam a velocidade de ignição (ou propagação de chamas), reduzindo a produção de fuligem e aumentando o impulso mecânico no motor."
  }, {
    icon: <Activity className="w-8 h-8 text-energy" />,
    title: "Maior Trabalho Volumétrico na Combustão",
    description: "Durante o processo de combustão, o volume de gás aumenta ligeiramente com a adição do SWI, realizando mais trabalho volumétrico e reforçando o impulso mecânico."
  }, {
    icon: <Flame className="w-8 h-8 text-energy" />,
    title: "Alteração nos Mecanismos de Queima (Oxidação)",
    description: "Os componentes do SWI diminuem a energia mínima necessária para a reação de oxidação, resultando em uma queima mais homogênea (ignição simultânea em todo o cilindro, sem distribuições desiguais). Isso torna o motor mais silencioso, reduz perdas de energia mecânica e minimiza gases poluentes e fuligem."
  }, {
    icon: <Gauge className="w-8 h-8 text-energy" />,
    title: "Combustão Uniforme e Reativa",
    description: "Componentes altamente reativos do SWI, em quantidades precisas, promovem uma combustão uniformemente distribuída no cilindro, com ignição simultânea e aumento na velocidade de reação – sem atuar como catalisador tradicional."
  }, {
    icon: <BarChart3 className="w-8 h-8 text-energy" />,
    title: "Redução Geral no Consumo",
    description: "Somando todos esses efeitos, observa-se uma redução significativa no consumo de combustível. Análises em instituições independentes confirmam esses benefícios, com testes mostrando conformidade sem alterações nas propriedades químicas do combustível."
  }];
  const funcionamentoHidrocarbonetos = ["Redução no atraso de ignição do combustível – Evita uso desnecessário de combustível e ignições prematuras.", "Redução do excesso de pressão na câmara de combustão – Diminui o desgaste do equipamento.", "Agrupamento de radicais livres – Elementos inertes ou causadores de ignições involuntárias são controlados, melhorando a combustão.", "Quebra de moléculas – Diminui a resistência molecular, exigindo menos energia para a combustão e otimizando o processo.", "Facilitação da queima do combustível – Aumenta o aproveitamento, reduz resistência e desgaste, diminui emissões poluentes e consumo."];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Parallax Background Wrapper */}
      <div className="fixed-parallax-section">
      
      {/* Hero + Introdução Unificados */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <SlideUp>
              <h1 className="text-4xl font-bold text-primary md:text-6xl">
                Modo de Funcionamento
              </h1>
            </SlideUp>
            
            <FadeIn delay={200}>
              <p className="leading-relaxed text-gray-800 max-w-3xl mx-auto text-xl">
                O SWI Fuel Activator reduz atrasos na ignição, otimiza misturas e facilita a queima, resultando em economia de até 15% no consumo. Entenda como funciona, abaixo:
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Infográfico Central: Combustão Convencional vs SWI */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SlideUp>
              <h2 className="font-bold text-primary text-center mb-8 text-4xl">
                Processo de Combustão: Antes vs Depois do SWI
              </h2>
            </SlideUp>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={200}>
                <Card className="p-8 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-destructive/20 rounded-full flex items-center justify-center">
                      <Flame className="w-8 h-8 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-2xl">Combustão Convencional</h3>
                    <ul className="text-[0.9375rem] text-muted-foreground space-y-3 leading-relaxed">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                        <span className="text-lg">Temperatura elevada na mistura</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                        <span className="text-lg">Ignição irregular</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                        <span className="text-lg">Maior produção de fuligem</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                        <span className="text-lg">Emissões elevadas de NOx</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                        <span className="text-lg">Aproveitamento limitado</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={400}>
                <Card className="p-8 bg-white border-primary/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-2xl">Com SWI Fuel Activator</h3>
                    <ul className="text-[0.9375rem] text-muted-foreground space-y-3 leading-relaxed">
                      <li className="flex items-center gap-3">
                        <CheckmarkAnimation delay={100} size={16} />
                        <span className="text-lg">Temperatura reduzida na mistura</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckmarkAnimation delay={200} size={16} />
                        <span className="text-lg">Ignição uniforme e simultânea</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckmarkAnimation delay={300} size={16} />
                        <span className="text-lg">Menor produção de fuligem</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckmarkAnimation delay={400} size={16} />
                        <span className="text-lg">Redução significativa de NOx</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckmarkAnimation delay={500} size={16} />
                        <span className="font-semibold text-primary text-lg">Economia de até 15%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mecanismos Principais */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SlideUp>
              <h2 className="font-bold text-primary text-center mb-8 text-4xl">
                Mecanismos Principais
              </h2>
            </SlideUp>
            
            <div className="space-y-8">
              {mecanismos.map((mecanismo, index) => <FadeIn key={index} delay={index * 100}>
                  <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-energy/20 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-energy">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              {mecanismo.icon}
                            </div>
                            <h3 className="font-semibold text-primary text-2xl">
                              {mecanismo.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {mecanismo.description}
                          </p>
                          {/* Visual separator for long descriptions */}
                          {index < mecanismos.length - 1 && <div className="mt-6 pt-6 border-t border-muted">
                              <div className="flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-primary/50" />
                              </div>
                            </div>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>)}
            </div>
          </div>
        </div>
      </section>

      {/* Comportamento Molecular */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SlideUp>
              <h2 className="font-bold text-primary text-center mb-8 text-4xl">
                Funcionamento em Contato com Hidrocarbonetos
              </h2>
              <p className="text-center mb-12 text-gray-800 text-xl">Em contato com hidrocarbonetos líquidos, o SWI melhora a performance do combustível da seguinte forma:</p>
            </SlideUp>
            
            <div className="grid gap-6">
              {funcionamentoHidrocarbonetos.map((item, index) => <FadeIn key={index} delay={index * 150}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-md group">
                    <CheckmarkAnimation delay={index * 100} size={24} className="mt-1" />
                    <p className="flex-1 text-gray-800 text-lg">{item}</p>
                  </div>
                </FadeIn>)}
            </div>

            {/* Hydrocarbon Process Visual */}
            <SlideUp delay={800}>
              <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-energy/5 rounded-xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Beaker className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold text-primary text-2xl">Processo Químico Otimizado</h3>
                  <Beaker className="w-8 h-8 text-energy" />
                </div>
                <p className="text-center text-gray-800 text-lg">
                  A interação molecular do SWI com hidrocarbonetos resulta em uma combustão mais eficiente e limpa
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4 text-center">
          <SlideUp>
            <h2 className="font-bold text-primary mb-6 text-4xl">
              Pronto para Ver os Resultados na Prática?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-xl">
              Agende uma demonstração gratuita e comprove a economia de combustível na sua frota B2B.
            </p>
            
            {/* Benefits highlight before CTA */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <FadeIn delay={200}>
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-xl">Economia Comprovada</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">Até 15% de redução no consumo</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-energy/20 rounded-full flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 text-energy" />
                  </div>
                  <h3 className="font-semibold mb-2 text-xl">Teste Sem Risco</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">Metodologia científica comprovada</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={600}>
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-action/20 rounded-full flex items-center justify-center mb-3">
                    <Trophy className="w-6 h-6 text-action" />
                  </div>
                  <h3 className="font-semibold mb-2 text-xl">ROI Garantido</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">Retorno rápido do investimento</p>
                </div>
              </FadeIn>
            </div>
            
            <Button variant="action" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => alert("Redirecionando para agendamento de demonstração")}>
              Inicie Seu Teste
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </SlideUp>
        </div>
      </section>

      </div> {/* End fixed-parallax-section */}

      <Footer />
    </div>;
};
export default ComoFunciona;