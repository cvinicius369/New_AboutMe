const servicesData = [
  {
    id: 'software',
    title: 'Desenvolvimento de Software',
    icon: 'fa-solid fa-code',
    accentColor: '#00d4ff',
    activities: [
      {
        id: 'bots',
        name: 'Bots para tarefas rotineiras',
        description: 'Criação de robôs e scripts de automação para tarefas repetitivas, economizando tempo e aumentando a eficiência operacional.',
        details: 'Desenvolvimento de bots em linguagens como Python (com bibliotecas como Selenium ou Playwright) ou scripts de shell/batch para automatizar fluxos de trabalho, entrada de dados, relatórios e mais.',
      },
      {
        id: 'daily-softwares',
        name: 'Softwares para o Dia a Dia (Sob Demanda)',
        description: 'Desenvolvimento de aplicações personalizadas para atender necessidades específicas do seu cotidiano ou pequeno negócio.',
        details: 'Soluções sob medida, desde organizadores pessoais a pequenas ferramentas de gestão. O escopo é definido em conjunto com o cliente.',
      },
      {
        id: 'cmd-softwares',
        name: 'Scripts e Ferramentas CLI',
        description: 'Criação de utilitários e aplicações de linha de comando (CLI) leves e eficientes para ambientes Windows e Linux.',
        details: 'Aplicações CLI são ideais para processamento rápido de dados e integração em pipelines de automação, desenvolvidas principalmente em linguagens como C#, Python ou Go.',
      },
      {
        id: 'landing-pages',
        name: 'Landing Pages (Sites)',
        description: 'Desenvolvimento de sites de uma única página, focados em conversão e apresentação de serviços/produtos com design responsivo.',
        details: 'Criação de Landing Pages otimizadas para performance (SEO) e velocidade de carregamento, utilizando tecnologias web modernas (HTML5, CSS3/Sass, JavaScript/Frameworks leves).',
      }
    ]
  },
  {
    id: 'networks',
    title: 'Infraestrutura e Redes',
    icon: 'fa-solid fa-network-wired',
    accentColor: '#4CAF50',
    activities: [
      {
        id: 'server-creation',
        name: 'Criação de Servidores',
        description: 'Configuração e implementação de servidores locais e em nuvem para diversos fins (armazenamento, aplicações, etc.).',
        details: 'Instalação e configuração de sistemas operacionais de servidor (Windows Server, Linux/Ubuntu Server), serviços de rede (DNS, DHCP, Firewall) e virtualização (VMware, Docker).',
      },
      {
        id: 'network-analysis',
        name: 'Verificação e análise de redes locais',
        description: 'Diagnóstico completo da sua rede, identificando gargalos, falhas de segurança e problemas de desempenho.',
        details: 'Análise de topologia de rede, testes de velocidade e latência, mapeamento de dispositivos e relatório de saúde da infraestrutura.',
      },
      {
        id: 'security-audit',
        name: 'Auditoria de Segurança de Rede',
        description: 'Avaliação de vulnerabilidades e testes de penetração em ambientes de rede (apenas com autorização documentada).',
        details: 'Realização de scans de portas, análise de políticas de firewall, verificação de senhas fracas e recomendações de hardening do sistema.',
      },
      {
        id: 'custom-servers',
        name: 'Servidores Locais personalizados (Sob Demanda)',
        description: 'Desenvolvimento de ambientes de servidor sob medida, com foco em necessidades empresariais ou projetos específicos.',
        details: 'Exemplo: Configuração de servidor de arquivos (Samba), Servidor Web (Apache/Nginx) ou Servidor de Email interno.',
      }
    ]
  },
  {
    id: 'hardware',
    title: 'Suporte Técnico e Hardware',
    icon: 'fa-solid fa-computer',
    accentColor: '#FFC107',
    activities: [
      {
        id: 'pc-assembly',
        name: 'Montagem de Computadores',
        description: 'Montagem e configuração de PCs customizados para jogos, trabalho ou estações de alto desempenho.',
        details: 'Seleção de componentes (CPU, GPU, RAM, etc.), montagem física, gestão de cabos e instalação inicial de sistema operacional.',
      },
      {
        id: 'os-installation',
        name: 'Formatação e Instalação de Sistemas',
        description: 'Instalação limpa de sistemas operacionais (Windows e Linux) e drivers essenciais, garantindo a performance ideal.',
        details: 'Backup de dados, formatação de disco, instalação e ativação do SO, além da configuração de partições e programas básicos.',
      },
      {
        id: 'peripheral-repair',
        name: 'Reparos em periféricos',
        description: 'Diagnóstico e reparo de periféricos como Headsets, mouses e teclados (em casos viáveis).',
        details: 'Substituição de componentes defeituosos, reparo de cabos, troca de conectores e solução de problemas de drivers/software.',
      },
      {
        id: 'performance-opt',
        name: 'Otimização de Desempenho',
        description: 'Ajuste fino do sistema operacional e hardware para maximizar a velocidade e a capacidade de resposta do seu computador.',
        details: 'Limpeza de arquivos temporários, otimização de inicialização, ajuste de configurações do sistema e atualização de drivers.',
      },
      {
        id: 'cftv-config',
        name: 'Configuração de equipamentos CFTV',
        description: 'Instalação e configuração de câmeras de segurança, DVRs e acesso remoto via internet.',
        details: 'Posicionamento estratégico das câmeras, configuração de rede para acesso externo, gravação e monitoramento.',
      }
    ]
  },
  {
    id: 'maker',
    title: 'IoT e Programação',
    icon: 'fa-solid fa-microchip',
    accentColor: '#9C27B0',
    activities: [
      {
        id: 'arduino-projects',
        name: 'Projetos com Arduino',
        description: 'Desenvolvimento de protótipos e projetos de Internet das Coisas (IoT) e automação utilizando a plataforma Arduino.',
        details: 'Programação da placa, integração com sensores e atuadores, e desenvolvimento de soluções customizadas para automação residencial ou industrial leve.',
      },
      {
        id: 'intelligence-home',
        name: 'Soluções de Casa Inteligente',
        description: 'Desenvolvimento e implantação de soluções para casa inteligente.',
        details: 'Implementação de Cameras inteligentes, automatizadores, lampandas e tomadas inteligentes, controladores de acesso inteligentes.',
      }
    ]
  },
  {
    id: 'mentory',
    title: 'Mentoria',
    icon: 'fa-solid fa-brain',
    accentColor: '#9C27B0',
    activities: [
      {
        id: 'programming-classes',
        name: 'Aulas de Programação (Sob Demanda)',
        description: 'Mentoria e aulas particulares de programação (Básico e Intermediário) em linguagens como Python, JavaScript ou C.',
        details: 'Aulas focadas em lógica de programação, estruturas de dados e desenvolvimento de pequenos projetos práticos.',
      }
    ]
  }
];