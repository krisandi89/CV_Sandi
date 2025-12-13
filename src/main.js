// No import needed, we use the global 'window.siteContent'

document.addEventListener('DOMContentLoaded', () => {
    const content = window.siteContent;
    if (!content) {
        console.error("Content not found. Make sure content.js is loaded.");
        return;
    }

    // 1. Populate Hero
    document.getElementById('hero-name').textContent = content.profile.name;
    document.getElementById('hero-title').textContent = content.hero.title;
    document.getElementById('hero-subtitle').textContent = content.hero.subtitle;
    document.getElementById('hero-desc').textContent = content.hero.description;

    // Contact Email
    const emailBtn = document.getElementById('contact-email');
    if (emailBtn) emailBtn.href = content.profile.social.email;

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Populate Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        content.topProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            // Allow empty images to have a placeholder color
            const imgHTML = project.image
                ? `<img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">`
                : `<div class="project-image" style="background: linear-gradient(45deg, var(--accent-primary), var(--bg-secondary));"></div>`;

            card.innerHTML = `
                ${imgHTML}
                <div class="project-info">
                    <div class="project-category">${project.category} // ${project.year}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description.substring(0, 100)}...</p>
                    <div style="margin-top: 1rem; color: var(--accent-primary); font-size: 0.9rem;">Click to view details &rarr;</div>
                </div>
            `;

            // Add click listener
            card.addEventListener('click', () => openModal(project));

            projectsContainer.appendChild(card);
        });
    }

    // --- ACCESSIBLE MODAL LOGIC ---
    const modal = document.getElementById('project-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    let lastActiveElement; // To store the element that opened the modal

    function openModal(project) {
        if (!modal) return;
        lastActiveElement = document.activeElement; // Save focus

        // Populate content
        document.getElementById('modal-image').src = project.image || '';
        document.getElementById('modal-category').textContent = project.category;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-desc').textContent = project.description;

        const linkBtn = document.getElementById('modal-link');
        if (project.link && project.link !== '#') {
            linkBtn.href = project.link;
            linkBtn.style.display = 'inline-block';
        } else {
            linkBtn.style.display = 'none';
        }

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus management
        closeModalBtn.focus();
        modal.addEventListener('keydown', handleKeyDown);
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        modal.removeEventListener('keydown', handleKeyDown);
        if (lastActiveElement) {
            lastActiveElement.focus(); // Restore focus
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            closeModal();
        }

        if (e.key === 'Tab') {
            const focusableElements = modalContent.querySelectorAll('button, a[href]');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // 3. Populate Timeline (Experience)
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        content.experience.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            // Initial style for animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="experience-card">
                        ${exp.image ? `<img src="${exp.image}" alt="${exp.role}" class="experience-image">` : ''}
                        <span class="experience-year">${exp.period}</span>
                        <h3 class="experience-role">${exp.role}</h3>
                        <div class="experience-company">${exp.company}</div>
                        <p style="color: #ccc; font-size: 0.95rem;">${exp.description}</p>
                    </div>
                </div>
            `;

            timelineContainer.appendChild(item);

            // Observer
            observer.observe(item);
        });
    }
});

// Simple Scroll & Reveal Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
