import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Leaf, Settings, TrendingDown, TrendingUp, Calculator, Truck, Quote } from "lucide-react";
import { useState } from "react";
import beneficiosHeroBackground from "@/assets/beneficios-hero-background.webp";
const Beneficios = () => {
  const [consumoMensal, setConsumoMensal] = useState("");
  const [precoLitro, setPrecoLitro] = useState("");
  const [economia, setEconomia] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const calcularEconomia = () => {
    const consumo = parseFloat(consumoMensal);
    const preco = parseFloat(precoLitro);
    if (consumo && preco) {
      const custoAtual = consumo * preco;
      const economiaMin = custoAtual * 0.07; // 7%
      const economiaMax = custoAtual * 0.15; // 15%
      setEconomia({
        min: economiaMin,
        max: economiaMax
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 py-0 relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${beneficiosHeroBackground})`
    }}>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Green tint overlay */}
        <div className="absolute inset-0 bg-primary/20"></div>
        
        {/* Bottom gradient fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: 'linear-gradient(to top, #f8f9e7, rgba(248, 249, 231, 0.8), transparent)'
      }}></div>
        
        <div className="container mx-auto sm:px-6 lg:px-8 my-0 px-[30px] py-0 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 py-[50px] my-[50px] drop-shadow-lg">
              Benefícios para Sua Frota e Operações
            </h1>
            
          </div>
        </div>
      </section>

      <div className="fixed-parallax-section">

      {/* Main Benefits */}
      <section className="my-0 py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Economia */}
            <Card className="border-primary/30 bg-white">
              <CardHeader className="text-center">
                <DollarSign className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary text-3xl">Economia Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-lg">
                  Reduza custos em até <strong className="text-primary">15% em diesel/gasolina</strong>, 
                  como comprovado em relatórios ASG – ideal para transportadoras que precisam 
                  maximizar eficiência operacional.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="font-semibold text-primary leading-relaxed text-lg">Exemplo Prático:</p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Frota de 10 caminhões = R$ 45.000/mês de economia
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sustentabilidade */}
            <Card className="border-primary/30 bg-white">
              <CardHeader className="text-center">
                <Leaf className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary text-3xl">Sustentabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-lg">
                  Menor emissão de <strong className="text-primary">CO2 e NOx</strong>, 
                  ajudando em compliance ambiental e atendimento às regulamentações ESG 
                  cada vez mais exigidas pelo mercado.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="font-semibold text-primary leading-relaxed text-lg">Impacto Ambiental:</p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Até 30% menos emissões poluentes
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Manutenção */}
            <Card className="border-primary/30 bg-white">
              <CardHeader className="text-center">
                <Settings className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary text-3xl">Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-lg">
                  <strong className="text-primary">Prolonga vida útil do motor</strong> 
                  e reduz desgaste, resultando em menor frequência de manutenções 
                  e maior disponibilidade da frota.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="font-semibold text-primary leading-relaxed text-lg">Benefício Extra:</p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Redução de 40% em paradas não programadas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Economics Chart */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Economia Comprovada: Antes vs Depois
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Antes */}
              <Card className="border-destructive/30">
                <CardHeader className="text-center">
                  <TrendingUp className="w-12 h-12 text-destructive mx-auto mb-2" />
                  <CardTitle className="text-2xl text-destructive">Antes do SWI</CardTitle>
                  <CardDescription className="text-lg">Custos elevados com combustível</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">R$ 30.000</div>
                  <p className="text-lg text-muted-foreground leading-relaxed">Gasto mensal em combustível</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-lg leading-relaxed">
                      <span>Consumo:</span>
                      <span className="text-destructive">Alto</span>
                    </div>
                    <div className="flex justify-between text-lg leading-relaxed">
                      <span>Emissões:</span>
                      <span className="text-destructive">Elevadas</span>
                    </div>
                    <div className="flex justify-between text-lg leading-relaxed">
                      <span>Manutenção:</span>
                      <span className="text-destructive">Frequente</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Depois */}
              <Card className="border-primary/30">
                <CardHeader className="text-center">
                  <TrendingDown className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl text-primary">Depois do SWI</CardTitle>
                  <CardDescription className="text-lg">Eficiência maximizada</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">R$ 25.500</div>
                  <p className="text-lg text-muted-foreground leading-relaxed">Gasto mensal em combustível</p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-2 mt-2">
                    <p className="text-lg text-primary font-semibold">Economia: R$ 4.500/mês</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-lg leading-relaxed">
                      <span>Consumo:</span>
                      <span className="text-primary">7% à 15% Menor</span>
                    </div>
                    <div className="flex justify-between text-lg leading-relaxed">
                      <span>Emissões:</span>
                      <span className="text-primary">30% Reduzidas</span>
                    </div>
                    <div className="flex justify-between text-lg leading-relaxed">
                      <span>Manutenção:</span>
                      <span className="text-primary">Menos Frequente</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">TransLog Brasil</CardTitle>
                <CardDescription className="text-lg">Transportadora - 150 veículos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Em 6 meses economizamos R$ 270mil em combustível. 
                  O ROI foi imediato e superou nossas expectativas."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Frota Verde</CardTitle>
                <CardDescription className="text-lg">Logística Sustentável</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Além da economia, conseguimos reduzir significativamente 
                  nossa pegada de carbono, alinhando com nossos objetivos ESG."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Rota Express</CardTitle>
                <CardDescription className="text-lg">Transporte Rodoviário</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Nossos motores estão rodando melhor, com menos manutenção 
                  e maior disponibilidade da frota."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-action/3 to-energy/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="font-bold text-foreground mb-4 text-4xl">
                Calcule Sua Economia
              </h2>
              <p className="text-muted-foreground text-2xl">
                Descubra quanto sua empresa pode economizar mensalmente
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="consumo">Consumo Mensal (Litros)</Label>
                    <Input id="consumo" type="number" placeholder="Ex: 75000" value={consumoMensal} onChange={e => setConsumoMensal(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="preco">Preço por Litro (R$)</Label>
                    <Input id="preco" type="number" step="0.01" placeholder="Ex: 5.50" value={precoLitro} onChange={e => setPrecoLitro(e.target.value)} />
                  </div>
                </div>

                <Button onClick={calcularEconomia} variant="default" size="lg" className="w-full mb-6 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calcular Economia
                </Button>

                {economia !== null && <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Sua Economia Mensal Estimada:
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      R$ {economia.min.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })} até R$ {economia.max.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                    </div>
                    <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">
                      Economia anual: R$ {(economia.min * 12).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })} até R$ {(economia.max * 12).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                    </p>
                  </div>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>;
};
export default Beneficios;