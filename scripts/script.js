const bouton = document.getElementById('bouton');
const bouton2 = document.getElementById('bouton2');
bouton.addEventListener('click', function () {
    let fenetre = window.open("destination.html",'destination','width=300,height=200');
fenetre.onload = function() {
    let bouton2 = fenetre.document.getElementById('bouton2');
    bouton2.addEventListener('click', function() {
        fenetre.close();
    }); 
}


});
             

