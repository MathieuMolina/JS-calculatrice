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