import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import CheckmarkAnimation from "@/components/animations/CheckmarkAnimation";
import { AlertTriangle, CheckCircle, Download, Shield, Award, FileText, TrendingDown, Zap, Globe, Users, Phone, Flame, Cog, Leaf, Target, DollarSign, Truck, Wrench, Star, BarChart3, Clock, Flag } from "lucide-react";
const PorQueSWI = () => {
  const objections = [{
    id: "eficacia",
    objection: "\"Aditivos de combustível não funcionam – só promessas vazias\"",
    concern: "Você já viu tantos produtos 'milagrosos' que não funcionam...",
    response: "Entendemos sua desconfiança! Mas o SWI não é um aditivo comum – é um **ativador inteligente**. Pense assim: imagine um fogo numa churrasqueira queimando de forma irregular, desperdiçando lenha. O SWI funciona como um 'organizador da queima', fazendo o combustível queimar de forma mais completa e uniforme. **Resultado comprovado: até 15% menos combustível** para a mesma distância! O laboratório ASG da Alemanha (um dos melhores do mundo) testou tudo e confirmou: o SWI realmente funciona, aumentando a eficiência do motor sem alterações químicas no combustível.",
    downloadText: "Ver Provas do Laboratório ASG",
    badges: ["Testado na Alemanha", "Economia Comprovada", "Sem Truques"]
  }, {
    id: "garantias",
    objection: "\"Vai estragar meu motor e perder a garantia\"",
    concern: "Medo de danificar equipamentos caros ou anular garantias...",
    response: "**Pode ficar tranquilo!** O SWI não contém detergentes ou substâncias que 'mexam' no combustível – é como adicionar um 'orientador' que ensina o combustível a queimar melhor, sem mudar sua 'personalidade'. Os testes oficiais mostram que ele mantém todas as características originais do combustível (densidade, viscosidade, ponto de fulgor). **Sua garantia permanece 100% válida** porque o combustível continua dentro de todas as normas europeias (EN228 e EN590). É como usar um aditivo aprovado pela própria montadora!",
    downloadText: "Ver Certificado de Conformidade",
    badges: ["Garantia Preservada", "Normas Europeias", "Zero Risco"]
  }, {
    id: "provas",
    objection: "\"Cadê as provas? Só vejo marketing\"",
    concern: "Precisa de evidências científicas sólidas e imparciais...",
    response: "**Temos provas de sobra!** O SWI foi testado pelos laboratórios ASG (Alemanha) e SGS – são como os 'detectives da ciência', que investigam tudo sem favor. Os testes mostram números reais: menos resíduos de carbono (menos de 0,1%), menos enxofre (menos de 5mg/kg), melhor lubricação do motor. **Produzido na Suíça** pela SWIÇALMENT AG – não é produto de fundo de quintal. Dosagem simples: 1ml para cada 15 litros. **Você pode testar na sua frota** e medir a economia real com nossa metodologia transparente!",
    downloadText: "Ver Todos os Relatórios Técnicos",
    badges: ["Laboratórios Independentes", "Suíça", "Testável na Prática"]
  }];
  const autorityReasons = [{
    icon: <Globe className="w-6 h-6 text-energy" />,
    title: <span className="flex items-center gap-2"><Flag className="w-5 h-5 text-red-500" /> Qualidade Suíça</span>,
    description: "Produzido na Suíça pela SWIÇALMENT AG – país famoso pela precisão e qualidade. No Brasil, distribuído pela Swiçalment (CNPJ 11.129.531/0001-03) há 5 anos no mercado."
  }, {
    icon: <Shield className="w-6 h-6 text-energy" />,
    title: "🛡️ Seguro para Motores",
    description: "Produto inflamável com precauções claras (como qualquer combustível), mas 100% seguro para motores. Validade de 3 anos, sem riscos mecânicos."
  }, {
    icon: <Truck className="w-6 h-6 text-energy" />,
    title: "🚛 Perfeito para Frotas",
    description: "Ideal para empresas com muitos veículos – adicione direto no tanque de armazenamento e economize em grande escala. Suporte especializado incluído."
  }, {
    icon: <FileText className="w-6 h-6 text-energy" />,
    title: "📋 Transparência 100%",
    description: "Todos os relatórios, fichas técnicas e certificados disponíveis para download. Zero mistério, máxima confiança."
  }];
  const benefitsList = [{
    icon: <DollarSign className="w-5 h-5" />,
    text: "Até 15% menos gasto com combustível"
  }, {
    icon: <Cog className="w-5 h-5" />,
    text: "Motor funciona mais suave e silencioso"
  }, {
    icon: <Wrench className="w-5 h-5" />,
    text: "Vida útil do motor aumenta"
  }, {
    icon: <Leaf className="w-5 h-5" />,
    text: "Menos poluição no ar"
  }, {
    icon: <Clock className="w-5 h-5" />,
    text: "Resultados a partir do 2º abastecimento"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Parallax Background Wrapper */}
      <div className="fixed-parallax-section">

      {/* Como Funciona de Forma Simples */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-bold text-primary text-center mb-8 my-[40px] text-4xl">
                🔥 Como Funciona a Tecnologia "Cool Flame"?
              </h2>
            </FadeIn>
            
            <SlideUp delay={200}>
              <div className="p-8 rounded-xl mb-8 my-[40px] mx-px py-[40px] bg-stone-50">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2 text-2xl">
                      <Flame className="w-6 h-6 text-energy" />
                      O Segredo: "Chama Fria" Controlada
                    </h3>
                    <p className="mb-4 text-slate-900 text-lg">
                      Pense no combustível queimando como um <strong>fogo numa fogueira</strong>: normalmente, ele queima de forma irregular e muito quente, 
                      desperdiçando energia e criando "solavancos" que forçam o motor.
                    </p>
                    <p className="text-slate-900 text-lg">
                      Com o SWI, a queima acontece de modo <strong>mais rápido e uniforme</strong>, em temperaturas mais baixas – 
                      como um fogo bem controlado que usa menos lenha mas aquece melhor! 
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-t from-energy via-primary to-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <Flame className="w-16 h-16 text-white" />
                      </div>
                      <p className="mt-4 font-semibold text-green-700 text-2xl">Combustão Otimizada</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>

            <FadeIn delay={400}>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {benefitsList.map((benefit, index) => <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center gap-3">
                      <CheckmarkAnimation delay={index * 100} size={24} />
                      <div className="flex items-center gap-2 text-[0.9375rem] leading-relaxed">
                        {benefit.icon}
                        <span className="text-base">{benefit.text}</span>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </FadeIn>

            <SlideUp delay={600}>
              <div className="bg-primary/10 p-6 rounded-xl text-center">
                <p className="font-semibold mb-2 text-2xl">
                  ⚠️ <strong>Importante:</strong> Não mudamos as propriedades químicas do combustível!
                </p>
                <p className="text-muted-foreground text-lg">
                  Não usamos detergentes, não há risco para o motor e sua garantia permanece 100% válida.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Resultados Visuais */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-bold text-primary text-center mb-4 text-4xl">
                📊 Economia Comprovada em Números
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Testado no laboratório ASG na Alemanha - um dos mais rigorosos do mundo
              </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <SlideUp delay={200}>
                <Card className="p-8 bg-gradient-to-br from-destructive/10 to-destructive/20 border-destructive/30">
                  <CardContent className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-destructive/20 rounded-full flex items-center justify-center animate-pulse">
                      <TrendingDown className="w-10 h-10 text-destructive" />
                    </div>
                    <h3 className="text-2xl font-bold text-destructive">ANTES</h3>
                    <div className="text-4xl font-bold text-destructive">100%</div>
                    <p className="text-destructive/80 font-semibold text-lg">Consumo normal de combustível</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(10)].map((_, i) => <div key={i} className="w-3 h-8 bg-destructive/60 rounded"></div>)}
                    </div>
                  </CardContent>
                </Card>
              </SlideUp>

              <SlideUp delay={400}>
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-energy/20 border-primary/30 shadow-lg">
                  <CardContent className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                      <Zap className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">DEPOIS</h3>
                    <div className="text-4xl font-bold text-primary">85%</div>
                    <p className="text-primary/80 font-semibold text-lg">🎉 Economia de até 15%!</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(8)].map((_, i) => <div key={i} className="w-3 h-8 bg-primary/80 rounded"></div>)}
                      <div className="w-3 h-8 bg-muted rounded opacity-30"></div>
                      <div className="w-3 h-8 bg-muted rounded opacity-30"></div>
                    </div>
                  </CardContent>
                </Card>
              </SlideUp>
            </div>

            <FadeIn delay={600}>
              <div className="bg-gradient-to-r from-primary to-energy text-white p-6 rounded-xl text-center">
                <h3 className="font-semibold mb-2 text-2xl py-[10px]">💡 Na Prática, Isso Significa:</h3>
                <div className="grid md:grid-cols-3 gap-4 text-[0.9375rem] leading-relaxed">
                  <div className="my-[10px]">
                    <BarChart3 className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-lg"><strong>Carro:</strong> De R$ 200 → R$ 170 por tanque</p>
                  </div>
                  <div className="my-[10px]">
                    <Truck className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-lg"><strong>Caminhão:</strong> <strong>economizar milhares</strong> por mês</p>
                  </div>
                  <div className="my-[10px]">
                    <Target className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-lg"><strong>Frota:</strong> ROI visível já no 2º mês</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dúvidas Mais Comuns */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-bold text-primary text-center mb-4 text-4xl">
                🤔 Suas Dúvidas, Nossas Respostas Honestas
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Entendemos sua desconfiança – já viu tanta promessa vazia por aí...
              </p>
            </FadeIn>
            
            <Accordion type="single" collapsible className="space-y-6">
              {objections.map((objection, index) => <FadeIn key={objection.id} delay={index * 200}>
                  <AccordionItem value={objection.id} className="border-none">
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <AccordionTrigger className="p-6 hover:no-underline">
                        <div className="flex items-start gap-4 text-left w-full">
                          <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-6 h-6 text-destructive" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-destructive mb-2 text-xl">
                              {objection.objection}
                            </h3>
                            <p className="text-muted-foreground text-base">
                              {objection.concern}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-6 pt-0 border-t bg-muted/30">
                          <div className="flex items-start gap-4">
                            <CheckmarkAnimation delay={300} size={32} />
                            <div className="flex-1">
                              <div className="prose prose-sm max-w-none text-muted-foreground mb-6 mt-4" dangerouslySetInnerHTML={{
                              __html: objection.response.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
                            }}>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {objection.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                    <Award className="w-3 h-3 mr-1" />
                                    {badge}
                                  </Badge>)}
                              </div>
                              
                              <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-energy hover:from-primary/90 hover:to-energy/90 text-white" onClick={() => alert("Download do relatório iniciado")}>
                                <Download className="w-4 h-4 mr-2" />
                                {objection.downloadText}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                </FadeIn>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Por Que Confiar no SWI */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-bold text-primary text-center mb-4 text-4xl">
                ✨ Por Que o SWI É Diferente de Tudo?
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Não somos mais um "produto milagroso" – somos ciência comprovada
              </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-6">
              {autorityReasons.map((reason, index) => <SlideUp key={index} delay={index * 150}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all hover:scale-105">
                    <CardContent className="flex items-start gap-4 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-energy/20 rounded-full flex items-center justify-center flex-shrink-0">
                        {reason.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-primary mb-3 text-xl">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {reason.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </SlideUp>)}
            </div>

          </div>
        </div>
      </section>

      {/* Certificações Visuais */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-bold text-primary mb-4 text-4xl">
                🏆 Selos de Qualidade Internacional
              </h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Certificado pelos laboratórios mais rigorosos da Europa
              </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <SlideUp delay={200}>
                <Card className="p-6 hover:shadow-lg cursor-pointer transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-energy/5 border-primary/20" onClick={() => alert("Download do relatório ASG")}>
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-energy/20 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary">ASG Analytics</h3>
                    <p className="text-muted-foreground text-base">Laboratório Alemão Independente</p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Testado ✓
                    </Badge>
                  </CardContent>
                </Card>
              </SlideUp>

              <SlideUp delay={400}>
                <Card className="p-6 hover:shadow-lg cursor-pointer transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-energy/5 border-primary/20" onClick={() => alert("Download da certificação EN590")}>
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-energy/20 rounded-full flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary">EN590</h3>
                    <p className="text-muted-foreground text-base">Padrão Europeu para Diesel</p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Certificado ✓
                    </Badge>
                  </CardContent>
                </Card>
              </SlideUp>

              <SlideUp delay={600}>
                <Card className="p-6 hover:shadow-lg cursor-pointer transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-energy/5 border-primary/20" onClick={() => alert("Download da certificação EN228")}>
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-energy/20 rounded-full flex items-center justify-center">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary">EN228</h3>
                    <p className="text-muted-foreground text-base">Padrão Europeu para Gasolina</p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Aprovado ✓
                    </Badge>
                  </CardContent>
                </Card>
              </SlideUp>
            </div>

            <FadeIn delay={800}>
              <div className="bg-muted/50 p-6 rounded-xl">
                <p className="font-semibold text-primary mb-2 text-xl py-[10px] my-0">
                  💡 <strong>Resumindo:</strong> Com o SWI, você ganha...
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckmarkAnimation delay={0} size={20} />
                    <span className="text-lg my-[10px]">Mais km por litro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckmarkAnimation delay={100} size={20} />
                    <span className="text-lg my-[10px]">Motor que dura mais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckmarkAnimation delay={200} size={20} />
                    <span className="text-lg my-[10px]">Menos poluição</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckmarkAnimation delay={300} size={20} />
                    <span className="text-lg my-[10px]">Economia comprovada</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-primary mb-6">
                🚀 Pronto Para Economizar de Verdade?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Fale com nossos especialistas e descubra como o SWI pode <strong>economizar milhares</strong> na sua frota ou veículo particular.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <SlideUp delay={200}>
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Consulta Gratuita</h3>
                    <p className="text-muted-foreground text-base">Análise personalizada da sua frota</p>
                  </div>
                </SlideUp>
                
                <SlideUp delay={400}>
                  <div className="text-center">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Teste Real</h3>
                    <p className="text-muted-foreground text-base">Comprove a economia na prática</p>
                  </div>
                </SlideUp>
                
                <SlideUp delay={600}>
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">ROI Garantido</h3>
                    <p className="text-muted-foreground text-base">Resultados já no 2º abastecimento</p>
                  </div>
                </SlideUp>
              </div>

              <SlideUp delay={800}>
                <div className="space-y-4">
                  <Button variant="default" size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-energy hover:from-primary/90 hover:to-energy/90 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105" onClick={() => alert("Redirecionando para consulta especializada")}>
                    <Phone className="w-6 h-6 mr-3" />
                    Falar com Especialista Agora
                  </Button>
                  
                  <p className="text-muted-foreground text-base">
                    ⏰ <strong>Disponível 24h</strong> | 📱 WhatsApp ou 📞 Telefone | 🆓 <strong>Sem compromisso</strong>
                  </p>
                </div>
              </SlideUp>
            </div>
          </FadeIn>
        </div>
      </section>

      </div>
      {/* End fixed-parallax-section */}

      <Footer />
    </div>;
};
export default PorQueSWI;