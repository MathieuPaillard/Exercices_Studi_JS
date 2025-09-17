let nom = prompt("Entrez votre nom :");
let password = prompt("Entrez votre mot de passe :");
document.cookie = `name=${nom}; path=/;`;
document.cookie = `mdp=${password}; path=/;`;


function cookiesToObject() {
    const cookies = document.cookie.split('; ');
    const obj = {};
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        obj[key] = value;
    }
    return obj;
}

let cookiesObj = cookiesToObject();
let paragraphe = document.createElement("p");
paragraphe.textContent = cookiesObj.name + cookiesObj.mdp; // ou cookiesObj['name'] selon le nom du cookie
document.body.appendChild(paragraphe);