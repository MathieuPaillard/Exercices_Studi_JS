let history2 = document.getElementById("history2");

const forward = document.getElementById("forward");

history2.addEventListener("click", () => {
    history2 = window.location.assign("history2.html"); // peux tu m'expliquer le assign ?
    // La méthode assign() charge une nouvelle URL dans la fenêtre actuelle.
    // Cela remplace l'URL actuelle dans l'historique de la fenêtre.
    // En d'autres termes, cela permet de naviguer vers une nouvelle page tout en conservant l'historique de navigation.
    // Cela signifie que l'utilisateur peut revenir à la page précédente en utilisant le bouton "Précédent" du navigateur.
    // on aurait pu utiliser window.location.href = "history2.html"; qui aurait eu le même effet ?
    // La différence est que assign() ajoute une nouvelle entrée à l'historique, tandis que href remplace l'URL actuelle.
    // En d'autres termes, si vous utilisez assign(), vous pouvez revenir à la page précédente, mais si vous utilisez href, vous ne pouvez pas.
    // Cela est dû au fait que href remplace l'URL actuelle dans l'historique, tandis qu'assign() en ajoute une nouvelle.
    
});

forward.addEventListener("click", () => {
    history.forward();
});
window.alert(window.history.length);

//création d’un objet Date pour créer une date d’expiration :

const dateExp = new Date();

dateExp.setMonth(dateExp.getMonth() + 1); //nous ajoutons 1 mois à la date

//nous interrogeons l’utilisateur sur son username et son mdp avec window.prompt()

const username = prompt("Username");

const mdp = prompt("Mot de passe");

//creation des cookies

document.cookie = `username=${username} ; expires=${dateExp.toUTCString()}`;

document.cookie = `mdp=${mdp} ; expires=${dateExp.toUTCString()}`;