// systeme de spoiler

// la fonction va crée a partir d'une span avec ca class, de crée automatiquement un bouton, et une autre span, avec le texte d'origine, et agir d'une certaine facon au click pour affiché la span, et supprimer le bouton, ou le masqué

(function() { 

    let elements = document.querySelectorAll('.spoiler-content-multi');

    let createButton = function (element) {

        // On crée la span
        let span = document.createElement('span');
        span.className = 'spoiler-content';
        span.innerHTML = element.innerHTML;

        // On crée le bouton
        let button = document.createElement('button');
        button.textContent = 'Afficher le spoiler';

        // On ajoute les elements au DOM
        element.innerHTML = '';
        element.appendChild(button);
        element.appendChild(span)

        // ecoute click
        button.addEventListener('click', function(e) {

            this.classList.add('invisible');
            span.classList.add('visible');

            // OU pour le button on peux faire ca comme ca

            //button.parentNode.removeChild(button)
        })
    }


    for (let i = 0; i < elements.length; i++) {

        createButton(elements[i]);

    };

})()

// J'ai fait appelle a la fonction qui s'appelle elle meme pour que les variables déclaré ne rentre pas en collision avec d'autre script que je pourrais utilisé 

