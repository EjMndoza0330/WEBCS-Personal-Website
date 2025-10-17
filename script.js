const articleData = {
    'false-knight': {
        title: 'Boss Guide: False Knight',
        content: `
            <p>The False Knight is the first major boss you encounter in the Forgotten Crossroads. Though large and intimidating, his attacks are predictable, making him a perfect entry point for mastering combat in Hallownest.</p>
            <p>The key to this fight is patience. He is heavily armored. The only time he takes damage is when his helmet breaks and he's stunned. Strike his maggot body three times before he recovers!</p>
            <h3>Video Walkthrough</h3>
            <div class="video-wrapper">
                <iframe src="https://www.youtube-nocookie.com/embed/OdXB4M4m0oc" title="False Knight Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>Remember to only use your healing ability (Focus) when he is stunned and flailing on the ground, or during his shockwave attack when you are safe on a ledge.</p>
        `,
    },
    'complete-lore': {
        title: 'The (Mostly) Complete Lore of Hollow Knight',
        content: `
            <p>The history of Hallownest is a tragedy revolving around the clash between two higher beings: the Pale King and the Radiance.</p>
            <p>The Pale King, a creature of pure light and reason, brought civilization and sentience to the insects of Hallownest. However, his presence usurped the Radiance, a forgotten god of light and dreams, leading to a spiritual plague called the Infection.</p>
            <p>The main storyline centers on the King's desperate solution: creating Vessels (like the little knight) from the Abyss to serve as prisons for the Infection, hoping to achieve a form of eternal stasis. The lore is fragmented, gathered through environmental storytelling and cryptic dialogue.</p>
            <div class="video-wrapper">
                <iframe src="https://www.youtube-nocookie.com/embed/0XDiWYFGGqY" title="False Knight Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
    },
    'mothwing-cloak': {
        title: 'How to Find the Dash Ability (Mothwing Cloak)',
        content: `
            <p>The Mothwing Cloak is one of the most essential movement abilities, allowing you to quickly dash forward, bypassing obstacles and dodging enemy attacks.</p>
            <ol>
                <li><strong>Location:</strong> The cloak is found in the Greenpath area of Hallownest.</li>
                <li><strong>Path:</strong> You must travel through the entire Greenpath area, fighting off new enemies like the moss knights.</li>
                <li><strong>The Fight:</strong> The cloak is guarded by the boss Hornet. You must defeat her in combat to proceed.</li>
                <li><strong>Acquisition:</strong> After defeating Hornet, proceed past her battle arena to find the cloak resting on a statue. Once acquired, you can perform a quick horizontal dash!</li>
            </ol>
            <h3>Video Walkthrough</h3>
            <div class="video-wrapper">
                <iframe src="https://www.youtube-nocookie.com/embed/z-Fqpt-P4kQ" title="False Knight Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>This ability is crucial for reaching new areas and mastering advanced combat techniques.</p>
        `,
    },
    'silksong-lore': {
        title: 'Essential Lore You Need Before Silksong',
        content: `
            <p>With Silksong on the horizon, it's vital to remember the true nature of its protagonist, Hornet, and the outcome of the original game.</p>
            <ul>
                <li>Hornet's True Identity: She is the child of the Pale King and the Herrah the Beast, the Queen of Deepnest. She is a protector, not a vessel, and wields the Needle and Thread.</li>
                <li>The Endings: The primary endings involve either sealing the Infection away (the Hollow Knight ending), or confronting and defeating the Radiance in the dream world (the Dream No More ending), releasing the vessels. Silksong is a continuation that takes Hornet far outside the kingdom of Hallownest.</li>
            </ul>
            <div class="video-wrapper">
                <iframe src="https://www.youtube-nocookie.com/embed/Fi58lqWeUbo" title="False Knight Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>Understanding these foundational relationships is key to appreciating Hornet's journey and her destiny beyond the kingdom.</p>
        `,
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.mobile-menu a');

    const modal = document.getElementById('journalModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const readMoreBtns = document.querySelectorAll('.articles-grid .read-more-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');


    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });


    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';


        modalBody.innerHTML = '';
        modalTitle.textContent = 'Loading Title...';
    };

    const openModal = (articleId) => {

        const cleanId = articleId ? articleId.trim() : null;
        const article = cleanId ? articleData[cleanId] : null;

        if (!article) {
            console.error("Failed to find article content for ID:", articleId);
            modalTitle.textContent = "Error: Article Not Found";
            modalBody.innerHTML = "<p>The requested journal entry could not be loaded. Please check the console for the error ID.</p>";
        } else {
            modalTitle.textContent = article.title;
            modalBody.innerHTML = article.content; 
        }

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };


    readMoreBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const articleId = event.currentTarget.getAttribute('data-article-id');
            openModal(articleId);
        });
    });


    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    //FORM SUBMISSION

    const contactForm = document.querySelector('.contact-area form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {

         
            event.preventDefault();


            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const formData = {
                name: name,
                email: email,
                message: message
            };


            console.log('Attempting to submit form data:', formData);


            setTimeout(() => {


                console.log('✅ Success! Data submitted successfully.');
                console.log('Thank you, ' + formData.name + '! Your message has been processed.');


                contactForm.reset();
            }, 300);

        });
    }


});
