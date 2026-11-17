# SWI Fuel Activator — Website Institucional

Website institucional e plataforma de apresentação B2B do **SWI Fuel Activator** (Swiçalment), tecnologia suíça de ativação de combustíveis que reduz em até 15% o consumo, diminui emissões poluentes e otimiza o desempenho de motores sem alterar as propriedades químicas do combustível ou invalidar garantias de fábrica.

Para detalhes aprofundados de arquitetura, componentes, tokens de design, inventário de ativos e itens pendentes antes da publicação, consulte [DOCUMENTATION.md](./DOCUMENTATION.md).

---

## Tecnologias Utilizadas

- **Build Tool**: [Vite 5](https://vitejs.dev/) (`@vitejs/plugin-react-swc`)
- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Roteamento**: [React Router DOM v6](https://reactrouter.com/)
- **Estilização**: [Tailwind CSS 3](https://tailwindcss.com/) + `tailwindcss-animate` + `@tailwindcss/typography`
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/) (baseado em [Radix UI](https://www.radix-ui.com/))
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Estado Assíncrono**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **Formulários & Validação**: React Hook Form + Zod (`@hookform/resolvers`)

---

## Primeiros Passos

### Pré-requisitos

- **Node.js** 18+ e **npm** instalados ([nvm](https://github.com/nvm-sh/nvm) recomendado).

### Instalação e Execução Local

```sh
# 1. Acesse o diretório do projeto
cd swifuelactivator-main

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento (porta 8080)
npm run dev
```

### Scripts Disponíveis

| Script | Comando | Descrição |
| --- | --- | --- |
| Desenvolvimento | `npm run dev` | Inicia o servidor Vite com HMR em `http://localhost:8080` |
| Build de Produção | `npm run build` | Gera os arquivos otimizados na pasta `dist/` |
| Build de Desenvolvimento | `npm run build:dev` | Gera o build utilizando o modo `development` |
| Preview do Build | `npm run preview` | Serve localmente o bundle gerado em `dist/` |
| Linter | `npm run lint` | Executa o ESLint em todo o projeto |

---

## Estrutura do Projeto

```text
swifuelactivator-main/
├── public/
│   ├── uploads/            # Logos, imagens de segmentos, fundo parallax e imagens do blog
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/             # Imagens importadas diretamente via bundler (Hero e Benefícios)
│   ├── components/
│   │   ├── animations/     # Componentes de animação SVG e scroll (IntersectionObserver)
│   │   ├── ui/             # Biblioteca de componentes shadcn/ui
│   │   ├── Footer.tsx      # Rodapé global com informações de contato e certificações
│   │   ├── Header.tsx      # Barra de navegação fixa com menu responsivo
│   │   └── Hero.tsx        # Seção principal da página inicial
│   ├── hooks/              # Hooks customizados (use-mobile, use-toast)
│   ├── lib/                # Utilitários (cn para composição de classes Tailwind)
│   ├── pages/              # Páginas da aplicação mapeadas no React Router
│   ├── styles/             # CSS específico de animações (swi-animation.css)
│   ├── App.css             # Estilos legados de template (não importado em App/main)
│   ├── App.tsx             # Definição de provedores globais e rotas
│   ├── index.css           # Design tokens HSL, tipografia, parallax e keyframes
│   └── main.tsx            # Ponto de entrada ReactDOM
├── DOCUMENTATION.md        # Documentação técnica completa e checklist pré-publicação
├── index.html              # HTML base, metadados SEO/Open Graph/Twitter e favicon
├── package.json            # Dependências e scripts npm
├── tailwind.config.ts      # Configuração de tema, fontes e cores Tailwind
└── vite.config.ts          # Configuração do Vite (porta 8080, alias @ -> ./src)
```

---

## Rotas e Páginas

| Rota | Componente | Descrição |
| --- | --- | --- |
| `/` | `src/pages/Index.tsx` | Página inicial (Hero, diferenciais, vídeo, segmentos, economia por combustível, depoimentos) |
| `/produto` | `src/pages/Produto.tsx` | Detalhes do produto suíço, dosagem (1ml/15L), modo de aplicação e comparativo Ativador vs. Aditivo |
| `/beneficios` | `src/pages/Beneficios.tsx` | Benefícios operacionais, comparativo Antes vs. Depois e **Calculadora de Economia** interativa |
| `/como-funciona` e `/funcionamento` | `src/pages/ComoFunciona.tsx` | Explicação dos 7 mecanismos físico-químicos e comportamento em hidrocarbonetos |
| `/cool-flame` | `src/pages/PorQueSWI.tsx` | Tecnologia "Cool Flame", quebra de objeções (FAQ), certificações (ASG, EN590, EN228) e resultados |
| `/blog` | `src/pages/Blog.tsx` | Artigos sobre casos de uso (Luft Logistics), mercado de diesel e Lei 15.103/2025 |
| `/depoimentos` | `src/pages/Index.tsx` | Atualmente redireciona para a página inicial |
| `/contato` | `src/pages/Contato.tsx` | Opções de atendimento, formulário de contato e informações institucionais |
| `*` | `src/pages/NotFound.tsx` | Página 404 para rotas inexistentes |

---

## Deploy (Produção)

Por ser uma Single Page Application (SPA) em React + Vite:

1. Execute `npm run build` para gerar os arquivos estáticos em `dist/`.
2. Publique o conteúdo da pasta `dist/` em qualquer provedor de hospedagem estática ou CDN (Vercel, Netlify, Cloudflare Pages, Nginx, Apache, S3, etc.).
3. **Importante**: Configure o servidor web para redirecionar todas as rotas desconhecidas para `index.html` (fallback de SPA), garantindo o funcionamento do `BrowserRouter` ao acessar rotas como `/produto` ou `/blog` diretamente pela URL.
