/**
 * MAIN.JS - Core Functionality
 * Handles rendering all sections and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    const content = window.siteContent;
    if (!content) {
        console.error("Content not found. Make sure content.js is loaded.");
        return;
    }

    // Configuration
    const INITIAL_PROJECTS_TO_SHOW = 10;
    let projectsShown = INITIAL_PROJECTS_TO_SHOW;

    // ====================================
    // 1. POPULATE HERO SECTION
    // ====================================
    const heroName = document.getElementById('hero-name');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroDesc = document.getElementById('hero-desc');
    const heroImage = document.getElementById('hero-image');

    if (heroName) heroName.textContent = content.profile.name;
    if (heroTitle) heroTitle.textContent = content.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
    if (heroDesc) heroDesc.textContent = content.hero.description;
    if (heroImage && content.profile.image) heroImage.src = content.profile.image;

    // WhatsApp Button
    const heroBtn = document.getElementById('hero-contact-btn');
    if (heroBtn && content.profile.social.whatsapp) {
        heroBtn.href = content.profile.social.whatsapp;
        heroBtn.target = "_blank";
    }

    // Email Button
    const emailBtn = document.getElementById('contact-email');
    if (emailBtn) emailBtn.href = content.profile.social.email;

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ====================================
    // 2. POPULATE ABOUT SECTION
    // ====================================
    if (content.about) {
        const aboutTitle = document.getElementById('about-title');
        const aboutText = document.getElementById('about-text');
        if (aboutTitle && content.about.title) aboutTitle.textContent = content.about.title;
        if (aboutText && content.about.text) aboutText.textContent = content.about.text;
    }

    // ====================================
    // 3. POPULATE SKILLS SECTION
    // ====================================
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && content.skills) {
        content.skills.forEach((skill, index) => {
            const card = document.createElement('div');
            card.className = 'skill-card fade-in';
            card.style.transitionDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-info">
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
                    </div>
                    <div class="skill-level">${skill.level}%</div>
                </div>
            `;

            skillsContainer.appendChild(card);
        });
    }

    // ====================================
    // 4. POPULATE PROJECTS SECTION
    // ====================================
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && content.topProjects) {
        content.topProjects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card fade-in';
            card.style.transitionDelay = `${index * 0.15}s`;

            const imgHTML = project.image
                ? `<img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">`
                : `<div class="project-image" style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));"></div>`;

            const tagsHTML = project.tags
                ? project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')
                : '';

            card.innerHTML = `
                ${imgHTML}
                <div class="project-info">
                    <div class="project-category">${project.category} // ${project.year}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description.substring(0, 120)}${project.description.length > 120 ? '...' : ''}</p>
                    <div class="project-cta">
                        <span>View Details</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openModal(project));
            projectsContainer.appendChild(card);
        });
    }

    // ====================================
    // 5. POPULATE EXPERIENCE TIMELINE
    // ====================================
    const timelineContainer = document.getElementById('timeline-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const experienceCount = document.getElementById('experience-count');

    if (experienceCount && content.experience) {
        experienceCount.textContent = `${content.experience.length} projects completed across Indonesia`;
    }

    function renderExperience() {
        if (!timelineContainer || !content.experience) return;

        timelineContainer.innerHTML = '';
        const projectsToRender = content.experience.slice(0, projectsShown);

        projectsToRender.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="experience-card">
                        ${exp.image ? `<img src="${exp.image}" alt="${exp.role}" class="experience-image">` : ''}
                        <span class="experience-year">${exp.period}</span>
                        <h3 class="experience-role">${exp.role}</h3>
                        <div class="experience-company">${exp.company}</div>
                        <p class="experience-desc">${exp.description}</p>
                    </div>
                </div>
            `;

            timelineContainer.appendChild(item);

            // Animate in with delay
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });

        // Show/hide load more button
        if (loadMoreBtn) {
            if (projectsShown < content.experience.length) {
                loadMoreBtn.style.display = 'inline-flex';
                loadMoreBtn.textContent = `Load More (${content.experience.length - projectsShown} remaining)`;
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    renderExperience();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            projectsShown += 10;
            renderExperience();
        });
    }

    // ====================================
    // 6. POPULATE EDUCATION SECTION
    // ====================================
    const educationContainer = document.getElementById('education-container');
    if (educationContainer && content.education) {
        content.education.forEach(edu => {
            const card = document.createElement('div');
            card.className = 'edu-card fade-in';
            card.innerHTML = `
                <div class="edu-institution">${edu.institution}</div>
                <div class="edu-degree">${edu.degree}</div>
                <div class="edu-year">${edu.year}</div>
            `;
            educationContainer.appendChild(card);
        });
    }

    // ====================================
    // 7. POPULATE CERTIFICATIONS SECTION
    // ====================================
    const certsContainer = document.getElementById('certifications-container');
    if (certsContainer && content.certifications) {
        content.certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card fade-in';
            card.innerHTML = `
                <div class="cert-name">${cert.name}</div>
                <div class="cert-issuer">${cert.issuer}</div>
                <div class="cert-year">${cert.year}</div>
            `;
            certsContainer.appendChild(card);
        });
    }

    // ====================================
    // 8. POPULATE LANGUAGES SECTION
    // ====================================
    const languagesContainer = document.getElementById('languages-container');
    if (languagesContainer && content.languages) {
        content.languages.forEach((lang, index) => {
            const item = document.createElement('div');
            item.className = 'language-item fade-in';
            item.style.transitionDelay = `${index * 0.1}s`;

            item.innerHTML = `
                <div class="language-name">${lang.name}</div>
                <div class="language-bar">
                    <div class="language-progress" style="width: 0%" data-level="${lang.level}"></div>
                </div>
                <div class="language-level">${lang.label || lang.level + '%'}</div>
            `;

            languagesContainer.appendChild(item);
        });
    }

    // ====================================
    // 9. POPULATE SOCIAL LINKS
    // ====================================
    const socialLinks = document.getElementById('social-links');
    if (socialLinks && content.profile.social) {
        const socials = [
            { key: 'linkedin', icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>' },
            { key: 'github', icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>' },
            { key: 'email', icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>' },
            { key: 'whatsapp', icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>' }
        ];

        socials.forEach(social => {
            if (content.profile.social[social.key] && content.profile.social[social.key] !== '#') {
                const link = document.createElement('a');
                link.href = content.profile.social[social.key];
                link.className = 'social-link';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.innerHTML = `
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${social.icon}
                    </svg>
                `;
                socialLinks.appendChild(link);
            }
        });
    }

    // ====================================
    // MODAL LOGIC
    // ====================================
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');

    function openModal(project) {
        if (!modal) return;

        const modalImage = document.getElementById('modal-image');
        const modalCategory = document.getElementById('modal-category');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalLink = document.getElementById('modal-link');

        if (project.image) {
            modalImage.src = project.image;
            modalImage.style.display = 'block';
        } else {
            modalImage.style.display = 'none';
        }

        if (modalCategory) modalCategory.textContent = project.category;
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalDesc) modalDesc.textContent = project.description;

        if (modalLink) {
            if (project.link && project.link !== '#') {
                modalLink.href = project.link;
                modalLink.style.display = 'inline-flex';
            } else {
                modalLink.style.display = 'none';
            }
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ====================================
    // NAVIGATION HIGHLIGHTING & VISIBILITY
    // ====================================
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');
    const sideNav = document.querySelector('.side-nav');

    function updateActiveNav() {
        let current = '';
        const heroSection = document.getElementById('hero');
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

        // Show/hide sidebar based on scroll position (show after hero)
        if (sideNav) {
            if (window.scrollY > heroHeight * 0.6) {
                sideNav.classList.add('visible');
            } else {
                sideNav.classList.remove('visible');
            }
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ====================================
    // SCROLL ANIMATIONS
    // ====================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill/language bars
                const progressBars = entry.target.querySelectorAll('[data-level]');
                progressBars.forEach(bar => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.level + '%';
                    }, 300);
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Observe sections for general animations
    document.querySelectorAll('.skill-card, .project-card, .edu-card, .cert-card, .language-item').forEach(el => {
        observer.observe(el);
    });
});
