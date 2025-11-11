const certifications = {
    htb: [
        { title: "MacOS Fundamentals", description: "Conceitos e segurança em sistemas macOS.", link: "https://academy.hackthebox.com/achievement/1734203/157" },
        { title: "Android Fundamentals", description: "Fundamentos de segurança e análise em Android.", link: "https://academy.hackthebox.com/achievement/1734203/195" },
        { title: "Brief to Hardware Attacks", description: "Ataques a hardware e técnicas de exploração.", link: "https://academy.hackthebox.com/achievement/1734203/230" },
        { title: "Network Foundations", description: "Fundamentos de redes e protocolos essenciais.", link: "https://academy.hackthebox.com/achievement/1734203/289" },
        { title: "Fundamentals of AI", description: "Introdução à IA aplicada à cibersegurança.", link: "https://academy.hackthebox.com/achievement/1734203/290" },
        { title: "Vulnerability Assessment", description: "Análise e avaliação de vulnerabilidades.", link: "https://academy.hackthebox.com/achievement/1734203/108" },
        { title: "Penetration Testing Process", description: "Etapas e metodologia de pentest.", link: "https://academy.hackthebox.com/achievement/1734203/90" },
        { title: "Intro to Network Traffic Analysis", description: "Análise de tráfego de rede para segurança.", link: "https://academy.hackthebox.com/achievement/1734203/81" },
        { title: "Introduction to Web Applications", description: "Fundamentos de aplicações web seguras.", link: "https://academy.hackthebox.com/achievement/1734203/75" },
        { title: "Introduction to Active Directory", description: "Administração e segurança no AD.", link: "https://academy.hackthebox.com/achievement/1734203/74" },
        { title: "Attacking Web Applications With FFUF", description: "Uso do FFUF para exploração web.", link: "https://academy.hackthebox.com/achievement/1734203/54" },
        { title: "Windows Fundamentals", description: "Configuração e segurança no Windows.", link: "https://academy.hackthebox.com/achievement/1734203/49" },
        { title: "JavaScript Deobfuscation", description: "Técnicas para limpar e entender JS ofuscado.", link: "https://academy.hackthebox.com/achievement/1734203/41" },
        { title: "Using the Metasploit Framework", description: "Exploits e testes com Metasploit.", link: "https://academy.hackthebox.com/achievement/1734203/39" },
        { title: "SQL Injection Fundamentals", description: "Fundamentos de injeção SQL.", link: "https://academy.hackthebox.com/achievement/1734203/33" },
        { title: "File Transfers", description: "Técnicas seguras de transferência de arquivos.", link: "https://academy.hackthebox.com/achievement/1734203/24" },
        { title: "Linux Fundamentals", description: "Bases do Linux e segurança em sistemas.", link: "https://academy.hackthebox.com/achievement/1734203/18" },
        { title: "File Inclusion", description: "Técnicas de Inclusão de Arquivos.", link: "https://academy.hackthebox.com/achievement/1734203/23" },
        { title: "Web Fuzzing", description: "Teste de falhas com dados aleatórios.", link: "https://academy.hackthebox.com/achievement/1734203/280"},
        { title: "Web Requests", description: "Fundamentos e aplicação de requisições web na InfoSec", link: "https://academy.hackthebox.com/achievement/1734203/35"},
        { title: "Applications of AI in InfoSec", description: "Metodos de aplicação da IA na segurança da informação", link: "https://academy.hackthebox.com/achievement/1734203/292"},
        { title: "Intro to InfoSec", description: "Introdução a Segurança da Informação", link: "https://academy.hackthebox.com/achievement/1734203/293"},
        { title: "Intro to Penetration Tesnting", description: "Introdução a testes de penetração (pentest)", link: "https://academy.hackthebox.com/achievement/1734203/295"}
    ]
};

const cardsContainer = document.getElementById("cards-container");

function loadCards() {
    cardsContainer.innerHTML = "";
    const certs = certifications.htb || []; 
    
    certs.forEach(cert => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const linkHtml = cert.link 
            ? `<a href="${cert.link}" target="_blank" class="btn-link">Ver Conquista</a>`
            : '';

        card.innerHTML = `
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
            ${linkHtml}
        `;
        cardsContainer.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', loadCards);