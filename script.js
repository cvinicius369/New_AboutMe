const translations = {
    pt: {
        nav_about: "Jornada",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_terminal: "Terminal",
        hero_greeting: "Olá, eu sou",
        hero_desc: "Arquiteto de sistemas complexos e interfaces imersivas.",
        btn_terminal: "Abrir Terminal",
        easter_egg_hint: "Executar privilege_escalation.sh",
        btn_projects: "Ver Projetos",
        about_title: "Minha Jornada",
        projects_title: "Projetos",
        term_intro: "Digite 'help' para ver os comandos.",
        proj_1_name: "OS & Kernel",
        proj_1_desc: "Sistema operacional customizado em Assembly e C para arquitetura 16 bits.",
        proj_2_name: "AI Malware Research",
        proj_2_desc: "Classificação de malwares usando CNNs desenvolvidas do zero com C++ e Eigen.",
        proj_3_name: "Hardware Hacking & Robotics",
        proj_3_desc: "Exploits para sistemas CFTV e desenvolvimento de analisadores de drones.",
        sim_title: "Simulador de Resiliência de Sistemas",
        sim_subtitle: "Análise de impacto em infraestrutura crítica, ataques e IA.",
        sim_controls_title: "Parâmetros de Cenário",
        users_label: "Volume de Requisições (K):",
        query_label: "Vetor de Ameaça:",
        sim_results_title: "Análise de Resiliência",
        latency_label: "Tempo de Mitigação:",
        cost_label: "Risco de Breach:",
        strategy_default: "**Estratégia Recomendada:** Implementar modelos de detecção baseados em CNN.",
        explanation_title: "O que isso demonstra?",
        demon_1: "Segurança Ofensiva/Defensiva (HTB/Pentest).",
        demon_2: "IA em Baixo Nível (C++/Eigen/Redes Neurais).",
        demon_3: "Sistemas Críticos (CFTV/Firmware Hardening).",
        whyme_title: "🎯 Por Que Me Escolher?",
        whyme_subtitle: "Não sou apenas um programador. Sou um Engenheiro de Sistemas focado em Segurança e Performance.",
        pitch_1_title: "Security by Design",
        pitch_1_desc: "Minha base em Criptografia e Cybersecurity permite construir sistemas protegidos contra SQLi, XSS e ataques em nível de firmware.",
        pitch_2_title: "IA & Alta Performance",
        pitch_2_desc: "Especialista em Redes Neurais e algoritmos complexos em C++ e Python, garantindo processamento rápido e eficiente de dados.",
        pitch_3_title: "Full-Stack de Baixo Nível",
        pitch_3_desc: "Domínio completo da pilha tecnológica: do Kernel em Assembly e Robótica em Arduino à arquitetura de redes e bancos de dados.",
        contact_title: "Vamos Nessa?",
        contact_subtitle: "Transforme sua ideia em uma arquitetura de alto desempenho.",
        info_title: "Contatos e Redes",
        label_email: "Email:",
        label_phone: "Telefone:",
        whatsapp_title: "Inicie uma Conversa Direta",
        whatsapp_subtitle: "Preencha rapidamente para gerar uma mensagem pronta no WhatsApp.",
        w_label_name: "Seu Nome:",
        w_label_interest: "Interesse Principal:",
        w_option_default: "Selecione uma opção...",
        w_option_arch: "Arquitetura de Sistemas (Node/Python)",
        w_option_fullstack: "Desenvolvimento Full-Stack",
        w_option_other: "Outro (Especifique na mensagem)",
        w_btn_send: "Gerar Mensagem no WhatsApp",
        w_note: "Seus dados não são armazenados.",
    }
};
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const langBtns = document.querySelectorAll('.lang-btn');
const body = document.body;
let vantaEffect = null; 
const updateLanguage = (lang) => {
    langBtns.forEach(btn => { btn.classList.toggle('active', btn.dataset.lang === lang); });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const currentLang = translations[lang];
        if (currentLang && currentLang[key]) { el.innerHTML = currentLang[key]; }
    });
    localStorage.setItem('lang', lang);
};
const initVanta = (mode) => {
    const colorBg = mode === 'dark' ? 0x09090b : 0xf4f4f5;
    const colorNet = mode === 'dark' ? 0x60a5fa : 0x000000;
    if (vantaEffect) {
        vantaEffect.setOptions({ backgroundColor: colorBg, color: colorNet });
    } else {
        if (window.VANTA) {
            vantaEffect = VANTA.NET({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                points: 12.00,
                maxDistance: 22.00,
                spacing: 18.00,
                backgroundColor: colorBg,
                color: colorNet
            });
        }
    }
};
const toggleTheme = () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeIcon.className = isDark ? 'ri-sun-line' : 'ri-moon-line';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    initVanta(isDark ? 'dark' : 'light');
};
const setupTerminal = () => {
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('terminal-output');
    if (!input) return;
    let isRoot = false;
    const secretCommand = "privilege_escalation.sh";
    const commands = {
        help: "Módulos disponíveis: <br>- journey (trajetória)<br>- tech-stack (tecnologias)<br>- pentest (skills ofensivas)<br>- ai-research (ia e redes neurais)<br>- clear (limpar terminal)",
        journey: "Graduado em Eng. de Software, pós em Criptografia/Blockchain. Especialista em sistemas de baixo nível e IA aplicada à segurança.",
        "tech-stack": "Linguagens: Assembly (x86), C/C++, Python. <br>Libs: Eigen, TensorFlow, PyTorch. <br>OS: Debian Hardened, RTOS para Robótica.",
        pentest: "Experiência HTB Academy. Desenvolvimento de Shell Reverse, clones de Meterpreter, bypass em firmwares Intelbras e scripts baseados em WinPEAS.",
        "ai-research": "Desenvolvimento de CNNs do zero (C++) para detecção de anomalias em binários e automação de trading algorítmico.",
        clear: "clear",
        cls: "clear",
    };
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const text = input.value.toLowerCase().trim();
            output.innerHTML += `<div class="line"><span class="prompt" style="color: #ff5f56"># root:➜</span> ${input.value}</div>`;
            if (text === secretCommand) { 
                isRoot = true;
                output.innerHTML += `
                    <div class="line" style="color:#27c93f">
                        [+] Exploit successful.<br>
                        [+] UID=0(root) GID=0(root)<br>
                        [+] Kernel access granted.
                    </div>
                    <div class="line">
                        <strong>Hidden module unlocked:</strong> SYSTEM_DIAGNOSTICS
                    </div>`;
            } else if (commands[text]) {
            if (text === 'clear' || text === 'cls') { output.innerHTML = ""; } 
            else { output.innerHTML += `<div class="line">${commands[text]}</div>`; }
        } else if (isRoot && text === "diagnostics") {
            output.innerHTML += `
                <div class="line">
                    Memory: OK<br>
                    Kernel Modules: Loaded<br>
                    IDS: Active<br>
                    Firmware Integrity: Verified
                </div>
            `;
        } else if (text !== "") {
            output.innerHTML += `<div class="line" style="color:#ff5f56">Error: Module '${text}' not found in kernel.</div>`;}
            output.scrollTop = output.scrollHeight; input.value = "";
        }
    });
};
const setupSimulator = () => {
    const usersInput = document.getElementById('users-input');
    const usersDisplay = document.getElementById('users-display');
    const queryComplexity = document.getElementById('query-complexity');
    const latencyResult = document.getElementById('latency-result');
    const costResult = document.getElementById('cost-result');
    const strategyMessage = document.getElementById('strategy-message');
    if (!usersInput) return;
    const calculateSimulation = () => {
        const volumeK = parseInt(usersInput.value);
        const threatLevel = parseInt(queryComplexity.value);
        let responseTime = 30 + (volumeK * 0.8) + (threatLevel * 12);
        latencyResult.innerText = `${Math.round(responseTime)}ms`;
        let risk = (volumeK * 0.2) + (threatLevel * 6);
        if (risk > 100) risk = 100;
        if (risk > 60) { costResult.style.color = "#ff5f56"; } 
        else { costResult.style.color = "#27c93f"; }
        costResult.innerText = `${risk.toFixed(1)}%`;
        if (threatLevel === 10) {
            strategyMessage.innerHTML = "<strong>Alerta Crítico:</strong> Bypass de Firmware detectado. Recomendado: Redes Neurais em C++ para análise comportamental de câmeras.";
        } else if (volumeK > 70) {
            strategyMessage.innerHTML = "<strong>Sobrecarga:</strong> Volume alto de pacotes. Implementar filtragem em Kernel Space (Assembly/C) para evitar negação de serviço.";
        } else if (threatLevel === 1) {
             strategyMessage.innerHTML = "<strong>Estável:</strong> Ameaças triviais. Firewalls padrão e scripts de automação WinPEAS-like garantem a integridade.";
        } else {
            strategyMessage.innerHTML = "<strong>Ideal:</strong> Implementar detecção de malware baseada em CNN (Eigen) para filtrar binários maliciosos.";
        }
        usersDisplay.innerText = `${volumeK}K`;
    };
    usersInput.addEventListener('input', calculateSimulation);
    queryComplexity.addEventListener('change', calculateSimulation);
    calculateSimulation();
};
const setupEasterEgg = () => {
    const toggleBtn = document.getElementById('hidden-terminal-toggle');
    const terminalSection = document.getElementById('terminal');
    if (!toggleBtn || !terminalSection) return;
    toggleBtn.addEventListener('click', () => {
        terminalSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            const input = document.getElementById('cmd-input');
            if (input) input.focus();
        }, 500);
    });
};
const setupWhatsappLinkGenerator = () => {
    const form = document.getElementById('whatsapp-link-generator');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('w-name').value.trim();
        const interest = document.getElementById('w-interest').value;
        const phone_number = "5562993882350";
        if (!name || !interest) {
            alert("Por favor, preencha seu nome e interesse principal.");
            return;
        }
        let message = `Olá, me chamo ${name}. Vi seu portfólio de Arquitetura de Sistemas e fiquei interessado(a) em '${interest}'. Gostaria de conversar mais sobre um projeto.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phone_number}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    });
};
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    const savedLang = localStorage.getItem('lang') || 'pt';
    updateLanguage(savedLang);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.className = 'ri-sun-line';
    }
    initVanta(savedTheme);
    setupTerminal();
    setupSimulator();
    setupEasterEgg(); 
    setupWhatsappLinkGenerator();
    if (window.VanillaTilt) {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    themeToggle.addEventListener('click', toggleTheme);
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.dataset.lang);
        });
    });
});
