let username = "";
const paragraphe = document.createElement("p");
paragraphe.textContent = "Bonjour " + username;
document.body.appendChild(paragraphe);

window.setTimeout(() => {
    username = "Mathieu";
    paragraphe.textContent = "Bonjour " + username;
}, 2000);
paragraphe.textContent = "En attente du username ! " + username;
window.setTimeout(() => {
    paragraphe.textContent = "Bonjour " + username;
}, 3000);

function wait(fonction, millisecondes) {
    return new Promise((resolve) => {
        setTimeout(() => {
            fonction();
            resolve()
        }, millisecondes);
    })
}


async function affUsername() {
    await wait(() => { username = "PeterParker" }, 3500);
    console.log('Bonjour ' + username);
}

console.log("Connexion...");

affUsername();

let num1 = 10;
let num2 = 20;

function wait(fonction, millisecondes) {
    return new Promise((resolve) => {
        setTimeout(() => {
            fonction();
            resolve()
        }, millisecondes);
    })
}

async function calcul(callback) {
    await wait(() => { num1 *= 2 }, 2000);
    await wait(() => { num2 += 5 }, 1000);
    callback();
}

console.log("Début du calcul...");

function affResultat() {
    console.log(`Résultat : ${num1 + num2}`);
}

calcul(affResultat);

console.log("Fin du calcul.");