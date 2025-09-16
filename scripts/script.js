const bouton = document.getElementById('bouton');
const bouton2 = document.getElementById('bouton2');
const paragraphe_bienvenue = document.getElementById('paragraphe_bienvenue');

window.addEventListener('load', function () {
    
    let boutonGoogle = this.window.document.getElementById('boutonGoogle');
    boutonGoogle.addEventListener('click', function () {
        window.open("https://www.google.com", 'google', 'width=500, height=500');
    });
    let paragraphe_bienvenue = this.window.document.getElementById('paragraphe_bienvenue');
    alert("Bienvenue sur la page index.html");
    let prenom = this.window.prompt("Veuillez entrer votre prénom.", "Peter");
    this.alert("Bonjour " + prenom + ", bienvenue sur notre site.");
    paragraphe_bienvenue.textContent = "Bonjour " + prenom + ", bienvenue sur notre site. Vous êtes sur la page index.html";
    boutonGoogle.addEventListener('click', function () {
        window.open("https://www.google.com", 'google', 'width=500, height=500');
    });

    let bouton3 = this.window.document.createElement('button');
    bouton3.innerHTML = "Bouton 3";
    this.window.document.body.appendChild(bouton3);
});






bouton.addEventListener('click', function () {
    let mot = window.prompt("Entrez un mot", "mot de votre choix  ici");
    window.alert(mot);
    let fenetre = window.open("destination.html", 'destination', 'width=500, height=500, top=500, left=200');


    fenetre.onload = function () {
        let bouton2 = fenetre.document.getElementById('bouton2');
        bouton2.addEventListener('click', function () {
            fenetre.close();
        });
    }
});


