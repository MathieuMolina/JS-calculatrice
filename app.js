let nb1;
let nb2;
let nbConvert1;
let nbConvert2;
let choix1;
general();

function addition(nb1,nb2){
    let calcul = nb1+nb2;
    alert(calcul);
}
function soustraction(nb1,nb2){
    let calcul = nb1-nb2;
    alert(calcul);
}
function division(nb1,nb2){
    let calcul = nb1/nb2;
    alert(calcul);
}
function multiplication(nb1,nb2){
    let calcul = nb1*nb2;
    alert(calcul);
}
function demandeNombre(){
    nb1= prompt("Sélectionner un premier chiffre pour l'opération");
    nb2= prompt("Sélectionner un second chiffre à opérer avec le premier chiffre");
}
function controlNombre(nb1,nb2){
    console.log("controlNombre");
    if(isNaN(nb1) || isNaN(nb2)){
        alert("Veuillez saisir des nombres");
        general();
    }
}
function conversionNombre(nb1,nb2){
    nbConvert1 = parseInt(nb1);
    nbConvert2 = parseInt(nb2);
}
function general(){ 
    let choix1 = prompt("Bienvenue dans la Super Calculatrice ! \n\n Veuillez choisir une option \n\n 1) Tapez 1 pour réaliser une addition \n 2) Tapez 2 pour réaliser une soustraction \n 3) Tapez 3 pour réaliser une division \n 4) Tapez 4 pour réaliser une multiplication");

    if(choix1 == "1"){
        demandeNombre();
        controlNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        addition(nbConvert1,nbConvert2);
        general();
    }
    else if(choix1 == "2"){
        demandeNombre();
        controlNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        soustraction(nbConvert1,nbConvert2);
        general();
    }
    else if(choix1 == "3"){
        demandeNombre();
        controlNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        division(nbConvert1,nbConvert2);
        general();
    }
    else if(choix1 == "4"){
        demandeNombre();
        controlNombre(nb1,nb2);
        conversionNombre(nb1,nb2);
        multiplication(nbConvert1,nbConvert2);
        general();
    }
    else{
        let back = confirm("Veuillez sélectionner un chiffre valable (1, 2, 3 ou 4)");
        if(back === true){
            general();
        }
    }
}