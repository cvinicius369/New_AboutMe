const certifications = {
    htb: [
        { title: "MacOS Fundamentals",                   description: "Conceitos e segurança em sistemas macOS.",       link: "https://academy.hackthebox.com/achievement/1734203/157" },
        { title: "Android Fundamentals",                 description: "Fundamentos de segurança e análise em Android.", link: "https://academy.hackthebox.com/achievement/1734203/195" },
        { title: "Brief to Hardware Attacks",            description: "Ataques a hardware e técnicas de exploração.",   link: "https://academy.hackthebox.com/achievement/1734203/230" },
        { title: "Network Foundations",                  description: "Fundamentos de redes e protocolos essenciais.",  link: "https://academy.hackthebox.com/achievement/1734203/289" },
        { title: "Fundamentals of AI",                   description: "Introdução à IA aplicada à cibersegurança.",     link: "https://academy.hackthebox.com/achievement/1734203/290" },
        { title: "Vulnerability Assessment",             description: "Análise e avaliação de vulnerabilidades.",       link: "https://academy.hackthebox.com/achievement/1734203/108" },
        { title: "Penetration Testing Process",          description: "Etapas e metodologia de pentest.",               link: "https://academy.hackthebox.com/achievement/1734203/90" },
        { title: "Intro to Network Traffic Analysis",    description: "Análise de tráfego de rede para segurança.",     link: "https://academy.hackthebox.com/achievement/1734203/81" },
        { title: "Introduction to Web Applications",     description: "Fundamentos de aplicações web seguras.",         link: "https://academy.hackthebox.com/achievement/1734203/75" },
        { title: "Introduction to Active Directory",     description: "Administração e segurança no AD.",               link: "https://academy.hackthebox.com/achievement/1734203/74" },
        { title: "Attacking Web Applications With FFUF", description: "Uso do FFUF para exploração web.",               link: "https://academy.hackthebox.com/achievement/1734203/54" },
        { title: "Windows Fundamentals",                 description: "Configuração e segurança no Windows.",           link: "https://academy.hackthebox.com/achievement/1734203/49" },
        { title: "JavaScript Deobfuscation",             description: "Técnicas para limpar e entender JS ofuscado.",   link: "https://academy.hackthebox.com/achievement/1734203/41" },
        { title: "Using the Metasploit Framework",       description: "Exploits e testes com Metasploit.",              link: "https://academy.hackthebox.com/achievement/1734203/39" },
        { title: "SQL Injection Fundamentals",           description: "Fundamentos de injeção SQL.",                    link: "https://academy.hackthebox.com/achievement/1734203/33" },
        { title: "File Transfers",                       description: "Técnicas seguras de transferência de arquivos.", link: "https://academy.hackthebox.com/achievement/1734203/24" },
        { title: "Linux Fundamentals",                   description: "Bases do Linux e segurança em sistemas.",        link: "https://academy.hackthebox.com/achievement/1734203/18" },
        { title: "File Inclusion",                       description: "Técnicas de Inclusão de Arquivos.",              link: "https://academy.hackthebox.com/achievement/1734203/23" },
        { title: "Web Fuzzing",                          description: "Teste de falhas com dados aleatórios.",          link: "https://academy.hackthebox.com/achievement/1734203/280"},

        { title: "Acesse Também!", description: "Minha pagina contendo todas as minhas atividades na HTB.", link: "../pages/htb.html"} 
    ],
    itec: [
        { title: "CSVDM Certificação",                         description: "Certificação CSVDM para o software DEFENSE IA 3.2 e Lite" },
        { title: "Redes EPON Certificação",                    description: "Certificação em Redes EPON" },
        { title: "Sistemas Avançados de CFTV IP",              description: "Certificação em Sistemas Avançados de CFTV IP" },
        { title: "Casa Inteligente Portfolio",                 description: "Portfolio Casa Inteligente" },
        { title: "Casa Inteligente Técnico (Cursos 1 e 2)",    description: "Curso Técnico em Casa Inteligente" },
        { title: "Defense IA Técnico",                         description: "Curso Técnico em Defense IA" },
        { title: "Dimensionamento Energia Solar",              description: "Curso Técnico em Dimensionamento de Energia Solar" },
        { title: "Dimensionamento em CFTV IP",                 description: "Curso Técnico em Dimensionamento em CFTV IP" },
        { title: "Energia Solar On Grid Técnico",              description: "Curso Técnico em Energia Solar On Grid" },
        { title: "IP UTILITY Técnico",                         description: "Curso técnico sobre utilitários de IP e gerenciamento de rede." },
        { title: "Radiofrequência e Antenas Técnico",          description: "Curso técnico em radiofrequência e tecnologias de antenas." },
        { title: "Redes EPON Portfolio",                       description: "Portfolio de projetos e experiências com redes EPON." },
        { title: "Redes EPON Técnico",                         description: "Curso técnico em redes EPON, tecnologias de acesso óptico." },
        { title: "Sistemas de CFTV IP Portfolio",              description: "Portfolio em sistemas de CFTV IP, vigilância eletrônica." },
        { title: "Sistemas de CFTV IP Técnico",                description: "Curso técnico em sistemas de CFTV IP, instalação e manutenção." },
        { title: "Software Programador CIE",                   description: "Curso técnico sobre o software programador CIE Intelbras"},
        { title: "Trilha de Aprendizagem - CFTV IP",           description: "Curso estruturado em CFTV IP para aprendizagem contínua." },
        { title: "Trilha de Aprendizagem - Defense IA",        description: "Curso estruturado em Defense IA para aprimoramento técnico." },
        { title: "Pilares de uma Gestão Estratégica",          description: "Conceitos sobres os pilares principais da gestão estratégica"},
        { title: "Integração do SimNEXT com inControl",        description: "Técnicas de integração do software Sim NEXT com o inControl"},
        { title: "Roteamento IP",                              description: "Implementando o roteamento IP"},
        { title: "Trillha de Aprendizagem - Modelo OSI e TCP", description: "Fundamentos das camadas principais do modelo OSI e TCP"},
        { title: "Certificar Redes de pares trançados",        description: "Técnicas para certificar redes de pares trançados"},
        { title: "Trilha de Aprendizagem - Redes EPON",        description: "Curso estruturado em Redes EPON para aprendizagem contínua." }
    ],
    anhanguera: [
        { title: "Redes de Computadores e IoT",                       description: "Fundamentos de Redes e Internet das Coisas", link: "../pages/certificates/RCIoT.png"},
        { title: "Sensores, Microcontroladores e Programação em IoT", description: "Curso técnico em componentes de IoT",        link: "../pages/certificates/SCPIoT.png" },
        { title: "IoT e Programação de Sensores",                     description: "Curso de Desenvolvimento IoT e automações",  link: "../pages/certificates/IoTPS.png" },
        { title: "Novos Desenvolvimentos em IoT",                     description: "Descobrindo novas tecnologias em IoT",       link: "../pages/certificates/NDIoT.png" },
        { title: "Analise de Dados em Python",                        description: "Fundamentos de Análise de dados em Python",  link: "../pages/certificates/IADPython.png" }
    ],
    dio: [
        { title: "Collections e outras Classes em Java",   description: "Praticando a aplicação de Collections e outras classes em java em aplicações do dia a dia corporativo", link: "../pages/certificates/CCinJ.png"},
        { title: "Interfaces e Lambda",                    description: "Dominando interfaces e Lambda em Java", link: "../pages/certificates/DILinJ.png"},
        { title: "Versionamento git em projetos java",     description: "Fundamentos e técnicas de versionamento git em projetos java", link: "../pages/certificates/VCGG.png"},
        { title: "Estruturas de controle em java",         description: "Fundamentos de estruturas de controle em Java", link: "../pages/certificates/ECinJ.png"}
    ],
    seventh: [
        { title: "Certificação - D-Guard", description: "Certificação do Software de Video Monitoramento (VMS) D-guard"}
    ],
    outra: [
        { title: "EM DESENVOLVIMENTO", description: "Desculpe! Ainda estou inserindo novos certificados" }
    ]
};
const cardsContainer = document.getElementById("cards-container");
const categoryButtons = document.querySelectorAll(".category");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// 1. Função de Carregar Cards (Melhorada)
function loadCards(category) {
    cardsContainer.innerHTML = "";
    const certs = certifications[category] || [];
    
    if (certs.length === 0) {
        cardsContainer.innerHTML = '<p class="no-certs">Nenhum certificado encontrado para esta categoria.</p>';
        return;
    }

    certs.forEach(cert => {
        const card = document.createElement("div");
        card.classList.add("card");
        const linkHtml = cert.link && cert.link !== "URL_CERTIFICADO_1"
            ? `<a href="${cert.link}" target="_blank" class="btn-link">Ver Certificado</a>`
            : '';

        card.innerHTML = `
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
            ${linkHtml}
        `;
        cardsContainer.appendChild(card);
    });
}
categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".category.active").classList.remove("active");
        btn.classList.add("active");
        loadCards(btn.dataset.category);
    });
});

// 3. Lógica de Tema Dark/Light
function toggleTheme() {
    body.classList.toggle('light-theme'); 
    if (body.classList.contains('light-theme')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('light-theme');
        themeToggle.textContent = '🌙';
    }
}

themeToggle.addEventListener('click', toggleTheme);
initializeTheme();
loadCards("htb");