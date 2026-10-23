export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  contribution: string;
  technologies: string[];
  aboutUrl: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    id: "sismogran",
    title: "Sismogran",
    category: "Monitoramento",
    image: "/media/works/sismogran_tela1.png",
    description:
      "Monitoramento de temperatura e umidade de equipamentos e ambientes.",
    contribution:
      "Atuação como Front-end Pleno na implementação de funcionalidades, manutenção e refatoração da interface, de acordo com os requisitos do produto.",
    technologies: [
      "React",
      "JavaScript",
      "Styled Components",
      "Material UI",
      "React Leaflet",
      "ApexCharts",
      "SWR",
    ],
    aboutUrl: "https://mtechsp.com.br/monitoramento/",
    projectUrl: "https://dtlab4.dtlab.com.br/",
  },
  {
    id: "sismaplan",
    title: "Sismaplan",
    category: "Gestão integrada",
    image: "/media/works/sismaplan_tela1.png",
    description:
      "Gestão integrada de ativos e serviços em uma única plataforma.",
    contribution:
      "Atuação como Front-end Pleno na criação de componentes para os módulos de serviços, planejamento, administrativo, logística, compras, qualidade e comercial, além de manutenção e aperfeiçoamento das funcionalidades.",
    technologies: [
      "React",
      "JavaScript",
      "Styled Components",
      "React Bootstrap",
      "Material UI",
      "FullCalendar",
      "ApexCharts",
      "SWR",
      "Yup",
    ],
    aboutUrl: "https://mtechsp.com.br/gestao/",
    projectUrl: "https://dtlab4.dtlab.com.br/",
  },
  {
    id: "manfing",
    title: "Manfing One",
    category: "Inteligência artificial",
    image: "/media/works/sismaplan_manfing1.png",
    description: "Previsão de vendas e demanda com inteligência artificial.",
    contribution:
      "Desenvolvimento do Front-end da versão 2.0, incluindo módulos e componentes de dashboard, clientes e campanhas.",
    technologies: [
      "Vue",
      "Vuex",
      "Vue Router",
      "Vuetify",
      "JavaScript",
      "SCSS",
      "Bootstrap",
      "Chart.js",
    ],
    aboutUrl: "https://www.manfing.com/funcionalidades",
    projectUrl: "https://app.manfing.com/",
  },
];

export const skills = [
  {
    title: "Web & mobile",
    description: "Interfaces para diferentes plataformas.",
    items: [
      "Angular",
      "React",
      "Next.js",
      "Vue",
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "UI & arquitetura",
    description: "Consistência, integração e manutenção.",
    items: [
      "Angular Material",
      "Material UI",
      "Tailwind CSS",
      "SCSS / SASS",
      "DevExtreme",
      "Radix UI",
      "REST APIs",
      "Nx",
      "Offline-first",
      "RBAC",
    ],
  },
  {
    title: "Ferramentas & colaboração",
    description: "Da decisão técnica à entrega em equipe.",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "Jira",
      "Figma",
      "Scrum",
      "OKR",
      "Spec-driven development",
      "GitHub Copilot",
      "Cursor",
      "Claude",
      "RAG",
      "LLMs",
      "Node.js",
      "Go",
    ],
  },
];

export const navigation = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre mim" },
  { id: "experiencia", label: "Experiência" },
  { id: "trabalhos", label: "Trabalhos" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export const profile = {
  name: "Estácio Renan",
  fullName: "Estácio Renan de Sousa Rodrigues",
  headline: "Desenvolvedor Front-end Sênior",
  location: "Fortaleza, Ceará, Brasil",
  introduction:
    "Desenvolvo experiências web com React, Next.js, Vue e Angular e aplicações mobile com React Native. Conecto regras de negócio, arquitetura e usabilidade para evoluir produtos digitais.",
  about: [
    "Sou desenvolvedor Front-end Sênior, com uma trajetória que combina desenvolvimento e ensino de tecnologia. Atuo com React, Next.js, Vue e Angular na web e React Native no mobile, em produtos de gestão empresarial, agronegócio, geolocalização, mercado imobiliário, auditoria e licenciamento.",
    "Minha experiência inclui direcionamento técnico de squads, revisão de código, componentes reutilizáveis, integração com APIs REST, autenticação e controle de acesso. Trabalho com visualização de dados e aplicações offline-first, buscando usabilidade, desempenho e facilidade de manutenção.",
    "Sou formado em Análise e Desenvolvimento de Sistemas, com pós-graduações em Gestão em Tecnologia, Engenharia de Software e Desenvolvimento Web. Também amplio minhas competências em Node.js e Go e utilizo desenvolvimento assistido por IA no trabalho técnico.",
  ],
  opportunity:
    "Tenho interesse em oportunidades remotas como Senior Frontend Developer e Frontend Engineer, colaborando com equipes na evolução técnica de produtos.",
  photo: "/media/perfil-optimized.jpg",
  resume: "/media/resume.pdf",
  linkedinPdf: "/media/Profile.pdf",
  linkedin: "https://www.linkedin.com/in/estaciorenandesousarodrigues/",
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "AWRIGHT",
    role: "Frontend Developer | React & React Native",
    period: "jun. 2026 — out. 2026",
    summary:
      "Evolução de uma plataforma web e mobile de gestão de portfólios, projetos, megaprojetos e áreas.",
    highlights: [
      "Componentes reutilizáveis para uma solução white label, controle de permissões com RBAC e integração com APIs REST.",
      "Aplicativo offline-first, sincronização com HTTP ETag e otimização da concorrência de requisições e do acesso a dados locais e remotos.",
      "Desenvolvimento assistido por IA e orientado por especificações, com Scrum, Azure DevOps e processos de CI/CD.",
    ],
    technologies: [
      "React",
      "React Native",
      "REST APIs",
      "RBAC",
      "Offline-first",
      "HTTP ETag",
      "Azure DevOps",
    ],
  },
  {
    company: "3CON Consultoria e Sistemas",
    role: "Frontend Developer | React",
    period: "jul. 2025 — fev. 2026",
    summary:
      "Soluções web de gestão operacional, logística, contratos, licenças e análise de código relacionada a CNPJ.",
    highlights: [
      "Aplicações React, Next.js e TypeScript em monorepos Nx, com componentes, serviços, hooks, temas e validações compartilhados.",
      "Interfaces para 3Control, CNPJ Alfanumérico, TagCheck e 3CON Licenças, incluindo consultas, indicadores e acompanhamento de processos.",
      "Formulários tipados, integração com APIs, proteção de rotas e internacionalização em português, inglês e espanhol no TagCheck.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Nx",
      "Material UI",
      "React Hook Form",
      "Zod",
      "SWR",
    ],
  },
  {
    company: "domy",
    role: "Frontend Developer | Angular & React Native · Lead Front-end",
    period: "out. 2023 — mai. 2025",
    summary:
      "Desenvolvimento e direcionamento técnico da squad web e mobile do Ceres, plataforma de gestão e monitoramento de armazenagem e secagem de grãos.",
    highlights: [
      "Evolução do front-end Angular com organização por domínio, carregamento sob demanda, autenticação, permissões e internacionalização.",
      "Orientação técnica, revisão de código e alinhamento com produto, design e back-end para a evolução das entregas.",
      "Painéis de monitoramento, gestão de unidades e secadores, cadastros, análises e aprimoramento dos fluxos de navegação.",
    ],
    technologies: [
      "Angular",
      "React Native",
      "TypeScript",
      "Angular Material",
      "Tailwind CSS",
      "SCSS",
    ],
  },
  {
    company: "Manfing",
    role: "Frontend Developer | Vue",
    period: "jul. 2023 — set. 2023",
    summary:
      "Plataforma de inteligência comercial para transformar dados de vendas, clientes e produtos em informações para decisões de negócio.",
    highlights: [
      "Componentes reutilizáveis em Vue.js 3, estado com Vuex, navegação com Vue Router e integração com APIs via Axios.",
      "Dashboards de faturamento, desempenho de vendedores e segmentação de clientes, campanhas e oportunidades por produto.",
    ],
    technologies: [
      "Vue.js 3",
      "Vuex",
      "Vue Router",
      "Axios",
      "Chart.js",
      "Docker",
      "Nginx",
    ],
  },
  {
    company: "Grupo MTech",
    role: "Frontend Developer | React & React Native",
    period: "fev. 2021 — fev. 2023",
    summary:
      "Desenvolvimento do Sismaplan/DTLAB, integrando gestão operacional, planejamento de serviços e monitoramento de equipamentos.",
    highlights: [
      "Organização dos módulos e padronização de componentes e fluxos com React, hooks, Context API e integração com APIs REST.",
      "Dashboards, mapas, calendário de serviços, contratos, equipamentos, sensores, alertas e exportação de relatórios.",
    ],
    technologies: [
      "React",
      "React Native",
      "JavaScript",
      "SWR",
      "Formik",
      "Yup",
      "React Router",
    ],
  },
];

export const teachingExperience = [
  {
    company: "Instituto Centro de Ensino Tecnologico",
    role: "Software Programming Instructor",
    period: "out. 2012 — nov. 2015",
    description:
      "Cursos técnicos em TI, desenvolvimento web, bancos de dados, sistemas operacionais, design gráfico e manutenção de computadores.",
  },
  {
    company: "Centro de Pesquisa e Qualificação Tecnológica",
    role: "Software Programming Instructor",
    period: "out. 2010 — out. 2011",
    description:
      "Formação profissional em TI, programação web, SQL e MySQL, Linux, ferramentas gráficas e hardware.",
  },
  {
    company: "Helpdesk Informática e Serviços",
    role: "Computer Instructor",
    period: "mar. 2008 — abr. 2009",
    description:
      "Ensino de ferramentas de escritório, Windows, design gráfico, desenvolvimento web e manutenção de computadores.",
  },
];

export const education = [
  {
    institution: "Centro Universitário UniFatecie",
    degree: "Pós-graduação em Engenharia de Software",
    period: "2025",
  },
  {
    institution: "FETES — Faculdade de Educação e Tecnologia do Espírito Santo",
    degree: "Pós-graduação em Desenvolvimento Web",
    period: "2025",
  },
  {
    institution: "UNIASSELVI",
    degree: "Pós-graduação em Gestão em Tecnologia",
    period: "jul. 2022 — dez. 2022",
  },
  {
    institution: "UNIASSELVI",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "jan. 2018 — dez. 2021",
  },
];

export const certifications = [
  "Scrum Fundamentals Certified (SFC)",
  "Lean Seis Sigma White Belt",
  "OKR Essencial",
];

export const social = {
  github: "https://github.com/estaciorenan",
  linkedin: profile.linkedin,
  whatsapp: "https://wa.me/5588988461635",
};
