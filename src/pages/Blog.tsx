import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "luft-logistics-swi",
    title: "Luft Logistics Implementa SWI Fuel Activator",
    description: "Transportadora brasileira adota tecnologia suíça para reduzir consumo de combustível e emissões em todas as suas unidades no país.",
    image: "/uploads/d456c5c5-e240-45a4-8e01-3f16cb790e84.png",
    content: `
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">A Transportadora LUFT, uma das principais empresas de transporte rodoviário do Brasil, está adotando medidas inovadoras para reduzir o consumo de combustível e as emissões de dióxido de carbono (CO2) em suas operações. A empresa decidiu implementar o ativador de combustão SWI Fuel Activator em todas as suas unidades no país, após reconhecer os benefícios econômicos e ambientais do produto.</p>

        <div class="my-8">
          <img src="/uploads/d456c5c5-e240-45a4-8e01-3f16cb790e84.png" alt="Apresentação sobre impacto do SWI Fuel Activator na Luft Logistics" class="w-full h-auto rounded-lg shadow-lg" />
          <p class="text-sm text-muted-foreground mt-2 text-center">Apresentação dos resultados do SWI Fuel Activator para a equipe da Luft Logistics</p>
        </div>

        <div class="bg-muted p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Tecnologia Suíça de Ponta</h3>
          <p class="leading-relaxed">O SWI Fuel Activator, um produto suíço, foi projetado para melhorar a eficiência da queima de combustível nos motores, resultando em uma significativa redução do consumo de diesel, das emissões de gases poluentes e das trocas de filtros racor. Além da implementação do SWI, a Transportadora Luft também lançou uma campanha de conscientização para seus motoristas e equipes de abastecimento, destacando a importância do trabalho em equipe na redução do consumo de combustível e do impacto ambiental.</p>
        </div>

        <blockquote class="border-l-4 border-primary pl-6 italic text-lg">
          "A aplicação do SWI Fuel Activator na empresa desempenha um papel crucial na busca pela sustentabilidade e na redução das emissões. A LUFT tem investido em tecnologias com o objetivo de ser mais sustentável. O uso do SWI é uma das formas de afirmar o nosso compromisso com o meio ambiente."
          <footer class="mt-2 text-sm text-muted-foreground not-italic">— Luigi Luft, Diretor de Operações</footer>
        </blockquote>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold">Benefícios Alcançados</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Redução significativa no consumo de diesel</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Diminuição das emissões de gases poluentes</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Menor necessidade de troca de filtros racor</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Redução da pegada de carbono</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gradient-primary/10 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Compromisso ESG</h3>
            <p class="leading-relaxed">Com a implementação do ativador de combustão SWI, a empresa está reduzindo os custos com combustível em suas operações e contribuindo para a diminuição da pegada de carbono. A iniciativa da empresa destaca a importância de práticas sustentáveis no setor de transporte e mostra como tecnologias inovadoras podem ser uma alternativa viável para reduzir o consumo de combustível.</p>
          </div>
        </div>

        <p class="text-lg leading-relaxed">Ao abraçar essa tecnologia e conscientizar seus funcionários sobre a importância da sustentabilidade, a Luft Logistics demonstra compromisso com as boas práticas de ESG no setor. O SWI Fuel Activator é mais uma prova de como a inovação pode contribuir para um futuro mais sustentável. À medida que mais empresas adotarem soluções como essa, poderemos avançar em direção a um setor de transporte mais eficiente e econômico.</p>
      </div>
    `,
    date: "Janeiro 2025",
    author: "Equipe SWI"
  },
  {
    id: "distorcao-precos-diesel",
    title: "Distorção de Preços no Diesel: Quem Paga a Conta?",
    description: "Análise sobre como o corte de 12% da Petrobras não chegou ao consumidor final, com postos aumentando margens em 50%.",
    image: "/uploads/db4ba8c5-646a-4001-b7dc-fd3e156f1af0.png",
    content: `
      <div class="space-y-6">
        <div class="bg-destructive/10 border border-destructive/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4 text-destructive">O Paradoxo Brasileiro</h3>
          <p class="text-lg leading-relaxed">No Brasil de 2025, as empresas vivem um paradoxo preocupante. Mesmo com a Petrobras anunciando uma redução de 12% no preço do diesel para as distribuidoras, os postos de combustíveis elevaram seus preços em 3% para o consumidor final.</p>
        </div>

        <div class="my-8">
          <img src="/uploads/db4ba8c5-646a-4001-b7dc-fd3e156f1af0.png" alt="Gráfico mostrando Petrobras cortando 12% no preço do diesel enquanto postos aumentam 3% no preço ao consumidor" class="w-full h-auto rounded-lg shadow-lg" />
          <p class="text-sm text-muted-foreground mt-2 text-center">Comparação entre a redução de preços da Petrobras e o aumento nos postos de combustível</p>
        </div>

        <p class="text-lg leading-relaxed"><strong>O resultado?</strong> A margem de lucro dos postos aumentou em 50%, e a conta, como sempre, ficou para quem precisa rodar para produzir.</p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-muted p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Os Números</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2 border-b border-border">
                <span>Preço Petrobras:</span>
                <span class="font-semibold">R$ 3,27/litro</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-border">
                <span>Preço no Posto:</span>
                <span class="font-semibold">R$ 6,05/litro</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span>Margem dos Postos:</span>
                <span class="font-semibold text-destructive">+50%</span>
              </div>
            </div>
          </div>

          <div class="bg-primary/10 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Impacto para Grandes Frotas</h3>
            <p class="leading-relaxed">Para quem consome 75 mil litros ou mais por mês, esse detalhe não é pequeno. Se você é responsável por uma transportadora, empresa de logística, agroindústria, operação de mineração - sabe que o combustível representa até <strong>35% dos seus custos operacionais</strong>.</p>
          </div>
        </div>

        <blockquote class="border-l-4 border-primary pl-6 italic text-lg">
          "A diferença de centavos no litro pode representar milhares de reais por mês no seu orçamento. Agora imagine quando essa diferença é manipulada ao sabor das margens comerciais do varejo."
        </blockquote>

        <div class="bg-gradient-primary/10 p-8 rounded-lg">
          <h3 class="text-2xl font-semibold mb-6">Tecnologia e Eficiência: A Saída Estratégica</h3>
          
          <p class="text-lg leading-relaxed mb-6">Não se trata mais apenas de "comprar melhor". Trata-se de <strong>usar melhor</strong>. E é exatamente aqui que soluções como o <strong>SWI Fuel Activator</strong> entram.</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-xl font-semibold mb-4">Benefícios Comprovados</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Economia comprovada de até 15% no consumo</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Menor desgaste do motor e menos trocas de filtros</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Redução de emissões nocivas como CO₂ e NOx</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Compatível com diesel, biodiesel, gasolina, etanol</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-background/50 p-6 rounded-lg">
              <h4 class="text-xl font-semibold mb-4">Tecnologia Suíça</h4>
              <p class="leading-relaxed">Desenvolvido com tecnologia suíça, o SWI Fuel Activator atua suavizando a combustão, sem alterar as propriedades físico-químicas do combustível, promovendo um processo mais completo e eficiente.</p>
              <p class="mt-3 text-sm text-muted-foreground">Eficácia validada por laboratórios europeus como o ASG Analytik-Service AG (Alemanha), com conformidade à norma EN 590.</p>
            </div>
          </div>
        </div>

        <div class="bg-muted p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">A Era da Eficiência Inteligente</h3>
          <p class="leading-relaxed">Enquanto os preços na bomba flutuam de forma arbitrária, <strong>a sua empresa pode conquistar estabilidade operacional</strong> por meio de soluções que entregam previsibilidade e retorno.</p>
          <p class="mt-4 leading-relaxed">Se você consome grandes volumes de combustível, <strong>não dá mais para esperar que o mercado seja justo</strong>. É hora de assumir o controle dos seus custos e investir em tecnologias que tornam sua operação mais limpa, mais eficiente e mais lucrativa.</p>
        </div>
      </div>
    `,
    date: "Janeiro 2025",
    author: "Equipe SWI"
  },
  {
    id: "lei-sustentabilidade-2025",
    title: "Lei 15.103/2025: Nova Política de Sustentabilidade",
    description: "Como o novo Programa de Aceleração da Transição Energética (Paten) pode beneficiar empresas com grandes frotas e reduzir custos operacionais.",
    image: "/uploads/dedc1215-f5af-4718-bf13-8fe7935ff202.png",
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-primary/10 p-6 rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">Nova Era da Transição Energética</h3>
          <p class="text-lg leading-relaxed">O Brasil entrou em uma nova fase da transição energética. Com a aprovação da <strong>Lei 15.103/2025</strong>, o governo federal criou o <strong>Programa de Aceleração da Transição Energética (Paten)</strong>, que visa fomentar projetos empresariais voltados à descarbonização, eficiência energética e sustentabilidade.</p>
        </div>

        <div class="my-8">
          <img src="/uploads/dedc1215-f5af-4718-bf13-8fe7935ff202.png" alt="Lei 15.103/2025 - Crédito para Sustentabilidade" class="w-full h-auto rounded-lg shadow-lg" />
          <p class="text-sm text-muted-foreground mt-2 text-center">Lei 15.103/2025 estabelece crédito facilitado para empresas sustentáveis</p>
        </div>

        <p class="text-lg leading-relaxed">Para empresas que operam grandes frotas e consomem volumes significativos de combustível, essa é uma mudança que vai além do discurso ambiental: é uma <strong>oportunidade concreta de redução de custos e aumento de competitividade</strong>.</p>

        <div class="bg-energy/10 border border-energy/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Crédito Facilitado para Empresas Sustentáveis</h3>
          <p class="leading-relaxed mb-4">O Paten viabiliza <strong>linhas de crédito com condições atrativas</strong> para iniciativas que contribuam com a mitigação de impactos ambientais. Isso inclui soluções que promovem:</p>
          
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-energy rounded-full mt-2 flex-shrink-0"></div>
              <span>Redução no consumo de combustíveis fósseis</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-energy rounded-full mt-2 flex-shrink-0"></div>
              <span>Corte de emissões de gases de efeito estufa (GEE)</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-energy rounded-full mt-2 flex-shrink-0"></div>
              <span>Otimização de processos energéticos</span>
            </li>
          </ul>
        </div>

        <p class="leading-relaxed">Nesse novo cenário, empresas com alto consumo de diesel, biodiesel ou outros combustíveis líquidos ganham incentivos concretos para modernizar suas operações com tecnologias sustentáveis. E isso leva diretamente ao papel do <strong>SWI Fuel Activator</strong>.</p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-primary/10 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">SWI Fuel Activator</h3>
            <p class="leading-relaxed mb-4">Ativador de combustível com tecnologia suíça, desenvolvido para suavizar o processo de combustão sem alterar as propriedades do combustível.</p>
            
            <h4 class="font-semibold mb-2">Benefícios:</h4>
            <ul class="space-y-1 text-sm">
              <li>• Redução de até 15% no consumo</li>
              <li>• Menor emissão de CO₂, NOx e hidrocarbonetos</li>
              <li>• Aumento da vida útil do motor e filtros</li>
              <li>• Compatível com todos os combustíveis</li>
            </ul>
          </div>

          <div class="bg-muted p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Setores Beneficiados</h3>
            <p class="leading-relaxed mb-4">Setores como <strong>logística, transporte de passageiros, mineração e agronegócio</strong> serão diretamente beneficiados por políticas como o Paten.</p>
            
            <div class="bg-background/50 p-4 rounded border-l-4 border-primary">
              <p class="text-sm"><strong>Empresas com consumo superior a 75 mil litros/mês</strong> passam a ter incentivo fiscal e financeiro para adotar soluções sustentáveis.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-primary/10 to-energy/10 p-8 rounded-lg">
          <h3 class="text-2xl font-semibold mb-6">Oportunidade Estratégica</h3>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">💰</span>
              </div>
              <h4 class="font-semibold mb-2">Redução de Custos</h4>
              <p class="text-sm text-muted-foreground">Menor custo operacional por quilômetro rodado</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-energy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🌱</span>
              </div>
              <h4 class="font-semibold mb-2">Compliance ESG</h4>
              <p class="text-sm text-muted-foreground">Alinhamento com metas ESG e regulatórias</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-action/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📊</span>
              </div>
              <h4 class="font-semibold mb-2">Créditos de Carbono</h4>
              <p class="text-sm text-muted-foreground">Potencial geração de créditos futuros</p>
            </div>
          </div>
        </div>

        <div class="bg-muted p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Resultados Mensuráveis</h3>
          <p class="leading-relaxed">Além de cumprir obrigações ambientais, sua empresa pode apresentar resultados mensuráveis nos relatórios de sustentabilidade, reduzir o impacto no balanço de carbono e até mesmo <strong>gerar créditos de carbono futuros</strong>.</p>
        </div>

        <div class="bg-gradient-primary/10 p-8 rounded-lg text-center">
          <h3 class="text-2xl font-semibold mb-4">Faça Parte da Mudança</h3>
          <p class="text-lg leading-relaxed mb-6">Na SWIÇALMENT, acreditamos que a sustentabilidade real começa com economia comprovada. Nossa tecnologia está validada por laboratórios europeus e já demonstrou resultados consistentes no mercado brasileiro.</p>
          <p class="font-semibold">Dê o primeiro passo rumo à eficiência energética com responsabilidade ambiental.</p>
        </div>
      </div>
    `,
    date: "Janeiro 2025",
    author: "Equipe SWI"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {!selectedPost ? (
          // Lista de posts
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Blog <span className="text-primary">SWI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Insights, análises e novidades sobre eficiência energética, sustentabilidade e o mercado de combustíveis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border"
                  onClick={() => handleSelectPost(post)}
                 >
                   {post.image && (
                     <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                       <img 
                         src={post.image} 
                         alt={post.title}
                         className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                       />
                     </div>
                   )}
                   <CardHeader>
                     <div className="flex items-center gap-4 text-[0.9375rem] text-muted-foreground mb-4 leading-relaxed">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Ler Artigo Completo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Post individual
          <article className="container mx-auto px-4 py-16 max-w-4xl">
            <Button 
              variant="ghost" 
              onClick={handleBackToList}
              className="mb-8 hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>

            <header className="mb-12">
              <div className="flex items-center gap-4 text-[0.9375rem] text-muted-foreground mb-6 leading-relaxed">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {selectedPost.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {selectedPost.description}
              </p>
            </header>

            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            <div className="mt-16 pt-8 border-t border-border">
              <div className="bg-gradient-primary/10 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Interessado no SWI Fuel Activator?</h3>
                <p className="text-muted-foreground mb-6">
                  Solicite uma simulação técnica gratuita e descubra como nossa tecnologia pode transformar sua operação.
                </p>
                <Button variant="action" size="lg">
                  Solicitar Demonstração
                </Button>
              </div>
            </div>
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;