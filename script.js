document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const serviceCategoriesContainer = document.getElementById('service-categories');
    
    const modal = document.getElementById('activity-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');
    const closeModalButton = modal.querySelector('.close-button');


    // ----------------------------------------------------
    // I. Gerenciamento de Tema (Light/Dark)
    // ----------------------------------------------------

    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            themeIcon.className = 'fa-solid fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            themeIcon.className = 'fa-solid fa-moon';
            localStorage.setItem('theme', 'light');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyTheme(false);
    } else {
        applyTheme(true);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        applyTheme(!isDark);
    });
    
    // ----------------------------------------------------
    // II. Funções do Modal (Extraídas e Corrigidas)
    // ----------------------------------------------------
    function showModal(activity) {
        modalTitle.textContent = activity.name;
        modalDescription.textContent = activity.description;
        modalDetails.textContent = activity.details; 
        
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('open');
        }, 10); 
        
        body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none'; 
        }, 300); 
        body.style.overflow = ''; 
    }

    closeModalButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });


    // ----------------------------------------------------
    // III. Lógica dos Cards (Corrigida: Fechamento Garantido)
    // ----------------------------------------------------

    function toggleCardExpansion(cardElement, listElement, toggleButton) {
        const isExpanded = cardElement.classList.contains('expanded');

        document.querySelectorAll('.category-card.expanded').forEach(otherCard => {
            if (otherCard !== cardElement) {
                otherCard.classList.remove('expanded'); 
                otherCard.querySelector('.expand-toggle').setAttribute('aria-expanded', 'false');
                otherCard.querySelector('.activity-list').setAttribute('aria-hidden', 'true');
            }
        });
        if (isExpanded) {
            cardElement.classList.remove('expanded');
            listElement.setAttribute('aria-hidden', 'true');
            toggleButton.setAttribute('aria-expanded', 'false');
        } else {
            cardElement.classList.add('expanded');
            listElement.setAttribute('aria-hidden', 'false');
            toggleButton.setAttribute('aria-expanded', 'true');
            
            cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }


    function renderCategoryCards() {
        serviceCategoriesContainer.innerHTML = ''; 

        servicesData.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;
            card.style.setProperty('--primary-color', category.accentColor); 

            card.innerHTML = `
                <div class="category-card-header">
                    <i class="${category.icon}"></i>
                    <h3>${category.title}</h3>
                    <button class="expand-toggle" aria-expanded="false" aria-controls="activities-${category.id}">
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div id="activities-${category.id}" class="activity-list" role="region" aria-hidden="true">
                    
</div>
            `;
            
            card.style.setProperty('--category-accent', category.accentColor);

            const activityListElement = card.querySelector(`#activities-${category.id}`);
            category.activities.forEach(activity => {
                const item = document.createElement('div');
                item.className = 'activity-item';
                item.innerHTML = `
                    <div class="activity-info">
                        <h4>${activity.name}</h4>
                        <p>${activity.description}</p>
                    </div>
                    <button class="botao details-button" data-activity-id="${activity.id}" data-category-id="${category.id}">
                        <i class="fa-solid fa-circle-info"></i> Mais detalhes
                    </button>
                `;
                activityListElement.appendChild(item);
            });

            const expandToggle = card.querySelector('.expand-toggle');
            expandToggle.addEventListener('click', (event) => {
                event.stopPropagation();
                toggleCardExpansion(card, activityListElement, expandToggle);
            });

            card.addEventListener('click', (event) => {
                if (!event.target.closest('.details-button')) {
                    toggleCardExpansion(card, activityListElement, expandToggle);
                }
            });

            serviceCategoriesContainer.appendChild(card);
        });
        
        serviceCategoriesContainer.querySelectorAll('.details-button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); 
                const activityId = event.currentTarget.dataset.activityId;
                const categoryId = event.currentTarget.dataset.categoryId;
                const category = servicesData.find(cat => cat.id === categoryId);
                const activity = category ? category.activities.find(act => act.id === activityId) : null;
                
                if (activity) {
                    showModal(activity);
                }
            });
        });

    }

    renderCategoryCards();
});

function view_certifications(){
  window.open("./pages/certificates.html");
};
function view_hackthebox(){
  window.open("./pages/htb.html");
}
