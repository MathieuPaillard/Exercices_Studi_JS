function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

let username = getCookie("username");

if (!username) {
    const dateExp = new Date();
    username = prompt("Username");
    const mdp = prompt("Mot de passe");

    dateExp.setMinutes(dateExp.getMinutes() + 5);

    document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + dateExp.toUTCString() + "; path=/";
    document.cookie = "mdp=" + encodeURIComponent(mdp) + "; expires=" + dateExp.toUTCString() + "; path=/";
    // Recharge la page pour afficher le message de bienvenue
    location.reload();
} else {
    let paragraphe = document.createElement("p");
    paragraphe.textContent = `Bienvenue ${decodeURIComponent(username)}`;
    document.body.appendChild(paragraphe);
}

    console.log(window.screen.width)



let open = document.createElement('button');
open.innerHTML = "open"; 
document.body.appendChild(open);

let opensanshistorique = document.createElement('button');
opensanshistorique.innerHTML = "open sans historique"; 
document.body.appendChild(opensanshistorique);

open.addEventListener('click', function() {
    window.location.assign('https://www.google.com');
});
// code
opensanshistorique.addEventListener('click', function() {
    window.location.replace('https://www.google.com');
});
// code

