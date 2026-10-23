# Portfólio — Estácio Renan

Portfólio profissional construído com Vite, React, TypeScript e Material UI.

## Requisitos

Node.js 20.19+ ou 22.12+ e npm. Desenvolvimento validado com Node.js 24.

## Executar localmente

```sh
npm install
npm run dev
```

Abra o endereço exibido pelo Vite no terminal.

## Verificar e compilar

```sh
npm run check
npm run build
npm run preview
```

O build verifica os tipos e gera os arquivos estáticos em `dist/`.

## Estrutura

- `src/App.tsx`: composição das seções e aplicação do tema.
- `src/data.ts`: trabalhos, tecnologias e contatos.
- `src/components/layout/`: cabeçalho com navegação mobile e rodapé.
- `src/components/sections/`: apresentação, sobre, trajetória profissional, trabalhos, tecnologias, projetos pessoais e contato.
- `src/components/common/`: componentes compartilhados, como o título de seção.
- `src/components/works/`: cartão e modal de detalhes de um trabalho.
- `src/components/experience/`: experiência individual, histórico de ensino e formação.
- `src/components/LinkedInProfile.tsx`: apresentação e acesso ao perfil profissional no LinkedIn.
- `src/hooks/`: persistência do tema e navegação inicial por fragmento da URL.
- `src/utils/links.ts`: atributos compartilhados dos links externos.
- `src/theme.ts`: temas claro e escuro do Material UI.
- `src/designTokens.ts`: fundamentos compartilhados entre o tema e o CSS.
- `src/styles.css`: layout responsivo e acessibilidade.
- `public/media/`: imagens e currículo original.

O estado fica próximo de quem o utiliza: o cabeçalho controla seu menu, a seção de trabalhos controla o projeto selecionado, e o hook de tema concentra a persistência e os efeitos no documento. Cartões e modais recebem dados e callbacks tipados por props. As seções consomem o conteúdo centralizado em `src/data.ts`, sem dependência do componente `App`.

As regras de composição, tokens, estados e acessibilidade estão documentadas em [docs/design-system.md](docs/design-system.md).

## Funcionalidades

- Links diretos para as seções: `#sobre`, `#experiencia`, `#trabalhos`, `#tecnologias`, `#projetos` e `#contato`.
- Menu mobile e modais de trabalhos com suporte de teclado pelo Material UI.
- Tema claro/escuro salvo no navegador, quando o armazenamento está disponível.
- Currículo em PDF e links para LinkedIn, GitHub e WhatsApp.
- Respeito à preferência por movimento reduzido.

A seleção de projetos pessoais está em atualização; o acesso aos repositórios públicos permanece disponível.

## Publicação

Configure `npm run build` como comando de build e `dist` como pasta de publicação em uma hospedagem estática. O Netlify já possui essas opções em `netlify.toml`.

Esta versão é uma aplicação React renderizada no navegador. O HTML fornece título e descrição, mas não há SSR ou pré-renderização do conteúdo.

## LinkedIn

O perfil profissional, os textos de apresentação e o endereço do LinkedIn estão centralizados em `profile`, em `src/data.ts`. O portfólio oferece acesso ao perfil na apresentação, na seção Sobre e nos contatos.

O conteúdo profissional foi atualizado a partir do PDF do LinkedIn fornecido pelo autor (`public/media/Profile.pdf`). Os dados e resumos estão em `src/data.ts`; não há sincronização automática ou importação pela API. O PDF pode ser acessado pelo visitante e contém os contatos presentes no documento original.

O histórico mantém os períodos do documento, incluindo o encerramento da experiência na AWRIGHT em outubro de 2026. A apresentação distingue desenvolvimento de ensino de tecnologia, sem transformar a duração total da carreira em anos comprovados exclusivamente de desenvolvimento Front-end. Os trabalhos ilustrados foram preservados do portfólio original; novas capturas e métricas não foram inventadas.

## Autor

[Estácio Renan de Sousa Rodrigues](https://www.linkedin.com/in/estaciorenandesousarodrigues/)
