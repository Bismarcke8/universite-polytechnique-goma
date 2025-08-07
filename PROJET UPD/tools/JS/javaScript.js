 // Menu mobile
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Navigation fluide
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#registration' || targetId === '#admin') {
                    // Afficher la section cachée
                    document.querySelector(targetId).style.display = 'block';
                    // Masquer les autres sections
                    document.querySelectorAll('section').forEach(section => {
                        if (section.id !== targetId.substring(1)) {
                            section.style.display = 'none';
                        }
                    });
                } else {
                    // Masquer les sections spéciales
                    document.getElementById('registration').style.display = 'none';
                    document.getElementById('admin').style.display = 'none';
                    // Afficher toutes les autres sections
                    document.querySelectorAll('section').forEach(section => {
                        section.style.display = 'block';
                    });
                }
                
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Mettre à jour l'onglet actif
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
        
        // Connexion étudiant
        const studentLoginBtn = document.getElementById('studentLoginBtn');
        const studentModal = document.getElementById('studentModal');
        const closeStudentModal = document.getElementById('closeStudentModal');
        
        studentLoginBtn.addEventListener('click', () => {
            studentModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        closeStudentModal.addEventListener('click', () => {
            studentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Connexion admin
        const adminLoginBtn = document.getElementById('adminLoginBtn');
        const adminModal = document.getElementById('adminModal');
        const closeAdminModal = document.getElementById('closeAdminModal');
        
        adminLoginBtn.addEventListener('click', () => {
            adminModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        closeAdminModal.addEventListener('click', () => {
            adminModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Onglets dans les modals
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                const tabContainer = btn.closest('.student-tabs, .admin-tabs');
                
                // Gérer les boutons actifs
                tabContainer.querySelectorAll('.tab-btn').forEach(tabBtn => {
                    tabBtn.classList.remove('active');
                });
                btn.classList.add('active');
                
                // Gérer le contenu actif
                const contentContainer = btn.closest('.modal-body').querySelectorAll('.tab-content');
                contentContainer.forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
        
        // Fermer les modals en cliquant à l'extérieur
        window.addEventListener('click', (e) => {
            if (e.target === studentModal) {
                studentModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (e.target === adminModal) {
                adminModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Formulaire de contact
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre message! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
        
        // Formulaire d'inscription
        const registerForm = document.getElementById('registerForm');
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Votre inscription a été soumise avec succès! Vous recevrez un email de confirmation.');
            registerForm.reset();
        });