# Documentação Técnica — SWI Fuel Activator

Este documento descreve em detalhes a arquitetura, páginas, componentes, animações, sistema de design, inventário de ativos e pontos pendentes identificados no código antes da publicação em produção.

---

## 1. Arquitetura e Roteamento (`src/App.tsx`)

O ponto de entrada (`src/main.tsx`) monta o componente `App` no elemento `#root`. Em `src/App.tsx`, a aplicação é envolvida pelos seguintes provedores globais:

- `QueryClientProvider` (`@tanstack/react-query`) — instância padrão `new QueryClient()`.
- `TooltipProvider` (`@radix-ui/react-tooltip`) — suporte global a tooltips.
- `Toaster` (`@/components/ui/toaster`) e `Sonner` (`@/components/ui/sonner`) — sistemas de notificação toast.
- `BrowserRouter` (`react-router-dom`) — roteamento client-side.

### Mapa de Rotas

| Caminho | Componente | Observações |
| --- | --- | --- |
| `/` | `Index` | Página inicial completa |
| `/produto` | `Produto` | Detalhes técnicos do produto |
| `/beneficios` | `Beneficios` | Benefícios e calculadora de ROI |
| `/funcionamento` | `ComoFunciona` | Alias utilizado nos links do `Footer` |
| `/como-funciona` | `ComoFunciona` | Alias utilizado no menu principal do `Header` |
| `/cool-flame` | `PorQueSWI` | Página de tecnologia Cool Flame, objeções e provas científicas |
| `/blog` | `Blog` | Listagem e leitor de artigos completos |
| `/depoimentos` | `Index` | Renderiza atualmente a própria página `Index` |
| `/contato` | `Contato` | Formulário e canais de atendimento |
| `*` | `NotFound` | Rota fallback (registra erro no `console.error` com `location.pathname`) |

> **Nota de configuração (`vite.config.ts`)**: O servidor de desenvolvimento sobe na porta `8080` (`host: "::"`). O alias `@` aponta para `./src`.

---

## 2. Detalhamento das Páginas (`src/pages/`)

### `Index.tsx` (Página Inicial)
Estrutura da página:
1. **`Header`** (fixo no topo) e **`Hero`** (banner principal full-height).
2. Wrapper `.fixed-parallax-section` contendo:
   - **Por Que Somos Diferentes?**: 3 pilares (*Ativador, Não Aditivo*, *Testes Independentes* ASG/EN590, *Garantias Preservadas*) + cartão de resultados (*7-15%* economia, *20-30%* redução de emissões, *5-8%* potência, *3-6 meses* ROI).
   - **Apresentação**: Vídeo YouTube incorporado (`opXx9QSkLc4`) usando `.youtube-embed-container`.
   - **Segmentos de Aplicação**: Grid responsivo com 7 cards quadrados com imagens de fundo em `/uploads/`: *Carros*, *Transportadores*, *Máquinas Pesadas*, *Embarcações Marítimas*, *Locomotivas a Diesel*, *Fornos e Queimadores Industriais* e *Turbinas e Usinas Termoelétricas*.
   - **Economia Média por Tipo de Combustível**: 5 cards coloridos (*DIESEL +7%*, *DIESEL MARÍTIMO +7%*, *ÓLEO PESADO +10%*, *GASOLINA +10%*, *ETANOL +15%*).
   - **O Que Dizem Nossos Clientes**: 3 cards de depoimento (*João Silva - TransLog*, *Luigi Luft - Luft Logistics*, *Carlos Mendes - MegaLog*).
3. **CTA Final** (fora do wrapper parallax, com `bg-gradient-hero`) + **`Footer`**.

### `Produto.tsx` (`/produto`)
1. **Hero Section**: Título e vídeo demonstrativo do YouTube (`WqOOoy9txEc`).
2. **Produto Concentrado Suíço de Alta Performance**: Destaque para ação físico-química, dosagem simples (`1ml por 15L de combustível`) e origem suíça.
3. **Modo de Aplicação**: Vídeo YouTube incorporado (`Eb49q_8N4s8`).
4. **Ativador vs. Aditivo**: Comparativo em duas colunas entre *SWI Ativador* e *Aditivo Comum*.
5. **Download CTA**: Botão para baixar a Ficha Técnica Completa (atualmente exibe `alert(...)` placeholder).

### `Beneficios.tsx` (`/beneficios`)
1. **Hero Section**: Utiliza a imagem estática importada `src/assets/beneficios-hero-background.webp` com overlays escuro, verde e gradiente inferior para `#f8f9e7`.
2. **Main Benefits**: 3 cards (*Economia Real*, *Sustentabilidade*, *Manutenção*).
3. **Economia Comprovada: Antes vs Depois**: Comparativo simulando gasto de `R$ 30.000` vs `R$ 25.500` (`R$ 4.500/mês` de economia).
4. **Depoimentos**: 3 cards (*TransLog Brasil*, *Frota Verde*, *Rota Express*).
5. **Calculadora de Economia (Interativa)**:
   - Estados React: `consumoMensal`, `precoLitro` e `economia: { min: number; max: number } | null`.
   - Lógica (`calcularEconomia`): `custoAtual = consumo * preco`; `economiaMin = custoAtual * 0.07` (7%); `economiaMax = custoAtual * 0.15` (15%). Exibe estimativa mensal e anual formatadas em `pt-BR`.

### `ComoFunciona.tsx` (`/como-funciona` e `/funcionamento`)
Utiliza os componentes de animação `SlideUp`, `FadeIn` e `CheckmarkAnimation`.
1. **Hero + Introdução**: Apresenta a redução de atrasos na ignição e economia de até 15%.
2. **Infográfico Central**: Comparação em 2 cards entre *Combustão Convencional* e *Com SWI Fuel Activator*.
3. **Mecanismos Principais**: Lista numerada de 7 mecanismos detalhando resfriamento da mistura ar-combustível, misturas mais pobres (Lambda maior), velocidade de ignição, trabalho volumétrico, oxidação, combustão uniforme e redução de consumo.
4. **Funcionamento em Contato com Hidrocarbonetos**: 5 pontos sobre redução no atraso de ignição, pressão na câmara, radicais livres, quebra de moléculas e facilitação da queima.
5. **CTA Final**: Botão *Inicie Seu Teste* (atualmente dispara `alert(...)`).

### `PorQueSWI.tsx` (`/cool-flame`)
Utiliza `FadeIn`, `SlideUp`, `CheckmarkAnimation` e `Accordion` (shadcn/ui).
1. **Como Funciona a Tecnologia "Cool Flame"?**: Explicação visual da "Chama Fria" controlada, grid de 5 benefícios e aviso de preservação química/garantia.
2. **Economia Comprovada em Números**: Comparativo visual *ANTES (100%)* vs *DEPOIS (85%)* com simulação de impacto para carro, caminhão e frota.
3. **Suas Dúvidas, Nossas Respostas Honestas**: `Accordion` com 3 objeções principais (*eficácia*, *garantias*, *provas*), badges e botões de download (atualmente usando `alert(...)`).
4. **Por Que o SWI É Diferente de Tudo?**: 4 cards de autoridade mencionando fabricação pela `SWIÇALMENT AG` (Suíça) e distribuição no Brasil pela `Swiçalment (CNPJ 11.129.531/0001-03)`.
5. **Selos de Qualidade Internacional**: 3 cards clicáveis (*ASG Analytics*, *EN590*, *EN228*) que atualmente disparam `alert(...)`.
6. **CTA Final**: Botão *Falar com Especialista Agora* (dispara `alert(...)`).

### `Blog.tsx` (`/blog`)
Mantém os artigos no array tipado `blogPosts: BlogPost[]` com renderização condicionada pelo estado `selectedPost`:
- **Lista de Artigos**: Grid de 3 cards clicáveis com thumbnail, data, autor e resumo.
- **Leitor de Artigo**: Renderiza o conteúdo HTML de cada post via `dangerouslySetInnerHTML` com classes `@tailwindcss/typography` (`prose`), botão *Voltar ao Blog* e CTA inferior.
- **Posts cadastrados**:
  1. `luft-logistics-swi`: *Luft Logistics Implementa SWI Fuel Activator* (Janeiro 2025)
  2. `distorcao-precos-diesel`: *Distorção de Preços no Diesel: Quem Paga a Conta?* (Janeiro 2025)
  3. `lei-sustentabilidade-2025`: *Lei 15.103/2025: Nova Política de Sustentabilidade* (Janeiro 2025)

### `Contato.tsx` (`/contato`)
1. **Cards de Opções**: *Demonstração*, *Orçamento*, *Consultoria*, *Suporte*.
2. **Formulário de Contato**: Campos `nome`*, `empresa`, `email`*, `telefone`, `assunto` (`select`), `mensagem`* e botão *Enviar Mensagem*.
3. **Informações de Contato & Card Lateral**: Exibe telefone, e-mail, endereço, horário de atendimento e botão *Agendar Reunião*.

---

## 3. Componentes Globais e Animações (`src/components/`)

### Layout Global
- **`Header.tsx`**:
  - Barra fixa (`fixed top-0 left-0 right-0 z-50`) que alterna entre fundo translúcido (`bg-background/95 backdrop-blur-sm border-b`) no topo e fundo transparente (`bg-transparent border-b-0`) ao rolar (`window.scrollY > 0`).
  - Logo `/uploads/358ad63d-cd87-4d60-82bc-291eab707aa5.png`.
  - Menu desktop + menu hambúrguer mobile (`lg:hidden`) com scroll automático para o topo ao navegar (`window.scrollTo(0, 0)`).
  - Botão CTA *Solicite Demonstração*.
- **`Hero.tsx`**:
  - Imagem de fundo `src/assets/hero-industrial.jpg` com gradiente `from-primary/90 via-primary/70 to-transparent`.
  - Título principal com gradiente `from-energy to-action`, dois botões de ação, grid de 3 destaques (*Economia de Combustível*, *Aumento de Performance*, *Redução de Emissões*) e indicador de scroll animado.
- **`Footer.tsx`**:
  - Fundo verde (`bg-primary text-primary-foreground`), símbolo `/uploads/22b02be1-de67-4b06-b5da-c5085b6181a3.png`, contatos institucionais (`+55 (21) 3736-3848`, `sales@swifuelactivator.com`, `Rio de Janeiro — Praia Botafogo 228, andar 16, 22250-145`), links rápidos, certificações (*ASG Analytik-Service AG* e *EN590*) e barra inferior com copyright `© 2024` e links `/privacidade` e `/termos`.

### Componentes de Animação (`src/components/animations/`)

| Componente | Uso Atual | Mecanismo |
| --- | --- | --- |
| `FadeIn.tsx` | Usado em `ComoFunciona.tsx`, `PorQueSWI.tsx` | `IntersectionObserver` (`threshold: 0.1`), fade + `translateY(20px -> 0)` com `delay` e `duration` configuráveis |
| `SlideUp.tsx` | Usado em `ComoFunciona.tsx`, `PorQueSWI.tsx` | `IntersectionObserver` (`threshold: 0.15`), fade + `translateY(40px -> 0)` |
| `CheckmarkAnimation.tsx` | Usado em `ComoFunciona.tsx`, `PorQueSWI.tsx` | `IntersectionObserver` (`threshold: 0.5`), escala circular e animação de traço SVG no ícone `Check` |
| `LogisticFlow.tsx` | **Não utilizado atualmente** | SVG animado de estrada e caminhão acionado por `IntersectionObserver` (classes `.animate-draw-line`, `.animate-truck-move-slow` em `index.css`) |
| `ProsperityEffect.tsx` | **Não utilizado atualmente** | Ícones SVG de moedas/cifrão flutuantes com `IntersectionObserver` (`.prosperity-container` em `index.css`) |
| `TrustAnimation.tsx` | **Não utilizado atualmente** | Ícones SVG de aperto de mão/escudo/polegar com `IntersectionObserver` (`.trust-container` em `index.css`) |
| `Timeline.tsx` | **Não utilizado atualmente** | Linha do tempo responsiva (desktop horizontal / mobile vertical) com reveal escalonado via `IntersectionObserver` |
| `SwiFuelAnimation.tsx` | **Não utilizado atualmente** | Animação de bomba SWI + caminhão com popups (`$`, `+ economia`, `-CO2`) usando `src/styles/swi-animation.css` (respeita `prefers-reduced-motion`) |

### Biblioteca UI (`src/components/ui/`)
Contém os componentes padrão do **shadcn/ui** configurados em `components.json` (`style: "default"`, `baseColor: "slate"`, `cssVariables: true`).
Destaque para `src/components/ui/button.tsx`, que além das variantes padrão (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`) define 3 variantes personalizadas da marca:
- `hero`: `bg-gradient-hero text-primary-foreground` com escala no hover.
- `energy`: `bg-energy text-energy-foreground` com `--shadow-energy`.
- `action`: `bg-action text-action-foreground` com `--shadow-action`.

---

## 4. Sistema de Design e Estilos (`src/index.css` & `tailwind.config.ts`)

### Paleta de Cores (HSL em `:root`)
- **Marca**:
  - `--primary`: `120 61% 34%` (Verde `#228B22` — sustentabilidade) / `--primary-hover`: `120 61% 30%`
  - `--energy`: `51 100% 50%` (Amarelo `#FFD700` — energia) / `--energy-hover`: `51 100% 45%`
  - `--action`: `0 100% 50%` (Vermelho `#FF0000` — chamadas de ação) / `--action-hover`: `0 100% 45%`
- **Combustíveis** (definidos em `:root` no `index.css`; os cards em `Index.tsx` também aplicam os valores HSL inline):
  - `--fuel-diesel`: `14 68% 46%` (`#C44B27`)
  - `--fuel-diesel-maritimo`: `37 91% 55%` (`#F5A623`)
  - `--fuel-oleo-pesado`: `25 15% 31%` (`#5A4A42`)
  - `--fuel-gasolina`: `67 49% 59%` (`#C8D154`)
  - `--fuel-etanol`: `81 49% 51%` (`#9BC53D`)
- **Gradientes e Sombras Utilitários**: `.bg-gradient-primary`, `.bg-gradient-energy`, `.bg-gradient-action`, `.bg-gradient-hero`, `.shadow-primary`, `.shadow-energy`, `.shadow-action`.

### Tipografia
- Fonte base configurada em `tailwind.config.ts` e `src/index.css`: `'Calibri', 'Candara', 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'`.
- Escala padrão: `h1` (`2.25rem`), `h2` (`1.75rem`), `h3` (`1.375rem`), `p` (`1rem`).

### Parallax e Embeds de Vídeo
- `.fixed-parallax-section`: aplica `/uploads/swi-maritime-background.webp` com `background-attachment: fixed` em desktop (fallback `scroll` para `max-width: 768px`), overlay branco semitransparente (`::before`) e regra `background-color: transparent !important` nos `<section>` filhos diretos para preservar o efeito visual.
- `.youtube-embed-container`: container 16:9 (`padding-bottom: 56.25%`) que desloca o `iframe` em `-60px` (`-40px` no mobile) no eixo superior para ocultar a barra de título do player do YouTube.

---

## 5. Inventário de Ativos (Imagens)

### Ativos em `src/assets/` (Importados via Vite)
| Arquivo | Onde é usado |
| --- | --- |
| `hero-industrial.jpg` | `src/components/Hero.tsx` (imagem de fundo do Hero) |
| `beneficios-hero-background.webp` | `src/pages/Beneficios.tsx` (imagem de fundo do Hero de Benefícios) |
| `fleet-trucks-green.jpg` | **Não referenciado** atualmente no código |

### Ativos em `public/uploads/` (Servidos estaticamente em `/uploads/...`)
| Arquivo | Onde é usado |
| --- | --- |
| `358ad63d-cd87-4d60-82bc-291eab707aa5.png` | `Header.tsx` (logo principal) e `index.html` (`og:image`, `twitter:image`) |
| `22b02be1-de67-4b06-b5da-c5085b6181a3.png` | `Footer.tsx` (símbolo SWI) e `index.html` (`link rel="icon"`) |
| `swi-maritime-background.webp` | `src/index.css` (`.fixed-parallax-section`) |
| `e1de93fc-ec5c-464e-a683-e71253d4fd18.png` | `Index.tsx` (card *Carros*) |
| `25677ddf-ab34-4b51-a0e8-026068c2c8a2.png` | `Index.tsx` (card *Transportadores*) |
| `6db37aff-e520-41bd-b24b-b30c131e58cd.png` | `Index.tsx` (card *Máquinas Pesadas*) |
| `55689e8c-3723-4722-b508-714d979ce089.png` | `Index.tsx` (card *Embarcações Marítimas*) |
| `d6b172fe-bbb1-4163-a7e8-fedf4656b197.png` | `Index.tsx` (card *Locomotivas a Diesel*) |
| `5cf5011e-7788-43e9-8075-d104a6e685d1.png` | `Index.tsx` (card *Fornos e Queimadores Industriais*) |
| `374f2994-f103-4b5a-822f-611f84493807.png` | `Index.tsx` (card *Turbinas e Usinas Termoelétricas*) |
| `d456c5c5-e240-45a4-8e01-3f16cb790e84.png` | `Blog.tsx` (post *Luft Logistics Implementa SWI Fuel Activator*) |
| `db4ba8c5-646a-4001-b7dc-fd3e156f1af0.png` | `Blog.tsx` (post *Distorção de Preços no Diesel*) |
| `dedc1215-f5af-4718-bf13-8fe7935ff202.png` | `Blog.tsx` (post *Lei 15.103/2025*) |
| `5b56f5a9-e0bd-450c-80ce-11865a4ec2e2.png` | **Não referenciado** atualmente (foto macro de engrenagens) |
| `798f2214-877f-4984-8998-c334573f1280.png` | **Não referenciado** atualmente (folha verde com gotas de água) |
| `fce09542-f230-40ec-972f-fb83b0b0b240.png` | **Não referenciado** atualmente (gota de combustível/óleo âmbar) |

---

## 6. Checklist de Edições Pendentes Antes da Publicação

Durante a análise completa do código, foram identificados os seguintes pontos inacabados ou de placeholder que devem ser revisados antes do upload final:

1. **Botões com `alert(...)` placeholder**:
   - `Produto.tsx` (linha 193): Botão *"Baixe a Ficha Técnica"* dispara `alert(...)` em vez de baixar um PDF real.
   - `ComoFunciona.tsx` (linha 277): Botão *"Inicie Seu Teste"* dispara `alert(...)`.
   - `PorQueSWI.tsx` (linhas 261, 329, 344, 359, 443): Botões de download dos relatórios/certificados (*ASG*, *EN590*, *EN228*) e *"Falar com Especialista Agora"* disparam `alert(...)`.
2. **Botões CTA sem ação/navegação vinculada (`onClick` ou `<Link>`)**:
   - `Header.tsx` (linhas 75 e 111): Botões *"Solicite Demonstração"* (desktop e mobile).
   - `Hero.tsx` (linhas 30 e 34): Botões *"Solicite um Teste Gratuito"* e *"Por Que Somos Diferentes"*.
   - `Index.tsx` (linhas 51, 328, 332): Botões *"Conheça Nossa Tecnologia"*, *"Solicitar Teste Gratuito"* e *"Falar com Especialista"*.
   - `Blog.tsx` (linha 401): Botão *"Solicitar Demonstração"* no rodapé do artigo.
   - `Contato.tsx` (linha 219): Botão *"Agendar Reunião"*.
3. **Formulário e Dados de Contato em `Contato.tsx` vs. `Footer.tsx`**:
   - O `<form>` em `Contato.tsx` (linha 89) não possui manipulador `onSubmit` nem integração com backend, serviço de e-mail ou WhatsApp.
   - Os dados em `Contato.tsx` parecem placeholders genéricos de São Paulo (`+55 (11) 9999-9999`, `contato@swifuelactivator.com`, `Av. das Indústrias, 1234 — São Paulo - SP, 01234-567`), enquanto o `Footer.tsx` traz dados específicos do Rio de Janeiro (`+55 (21) 3736-3848`, `sales@swifuelactivator.com`, `Praia Botafogo 228, andar 16 — 22250-145`). Alinhar qual é o oficial.
   - No `Footer.tsx` (linha 88), o ano do copyright está como `© 2024`.
4. **Rotas quebradas / incompletas**:
   - `Footer.tsx` (linhas 91 e 94) possui links para `/privacidade` e `/termos`, mas essas rotas não existem em `src/App.tsx` e levam à página `404` (`NotFound.tsx`).
   - `/depoimentos` em `App.tsx` aponta para `Index` em vez de uma página dedicada ou âncora específica.
   - `NotFound.tsx` ainda possui texto em inglês (*"Oops! Page not found"* / *"Return to Home"*).
5. **Metadados Open Graph em `index.html`**:
   - Atualmente `og:image` e `twitter:image` usam o caminho relativo `/uploads/358ad63d-cd87-4d60-82bc-291eab707aa5.png`. Quando o domínio final de produção for definido, recomenda-se atualizar para a URL absoluta (`https://seudominio.com/uploads/...`) e revisar a grafia do `<title>` (*"Eficência"* -> *"Eficiência"*).
6. **Arquivos não utilizados**:
   - `src/App.css` é resquício de template inicial (não importado).
   - `src/assets/fleet-trucks-green.jpg` e 3 imagens em `public/uploads/` (`5b56...png`, `798f...png`, `fce0...png`) não estão em uso.
   - 5 componentes em `src/components/animations/` (`LogisticFlow`, `ProsperityEffect`, `TrustAnimation`, `Timeline`, `SwiFuelAnimation`) não estão sendo renderizados em nenhuma página.
