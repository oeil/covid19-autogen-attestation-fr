window.addEventListener("DOMContentLoaded", (event) => {
    var data = window.location.hash.substr(1);
    const urlParams = new URLSearchParams(data);

    document.getElementById("field-firstname").value = urlParams.get("f"); //firstname
    document.getElementById("field-lastname").value = urlParams.get("l"); //lastname
    document.getElementById("field-birthday").value = urlParams.get("b"); //birthday
    document.getElementById("field-lieunaissance").value = urlParams.get("p"); //place of born
    document.getElementById("field-address").value = urlParams.get("a"); //address
    document.getElementById("field-town").value = urlParams.get("c"); //city
    document.getElementById("field-zipcode").value = urlParams.get("z"); //zipcode
    const reason = urlParams.get("r"); //reason
    document.getElementById("checkbox-travail").checked = (reason==='travail');
    document.getElementById("checkbox-achats").checked = (reason==='achats');
    document.getElementById("checkbox-enfants").checked = (reason==='enfants');
    document.getElementById("checkbox-sport_animaux").checked = (reason==='sport_animaux');
    document.getElementById("checkbox-sante").checked = (reason==='sante');
    document.getElementById("checkbox-famille").checked = (reason==='famille');
    document.getElementById("checkbox-handicap").checked = (reason==='handicap');
    document.getElementById("checkbox-convocation").checked = (reason==='convocation');
    document.getElementById("checkbox-missions").checked = (reason==='missions');

    document.getElementById("generate-btn").click()
    
    //remove loading indicator
    document.getElementById('loading-i').style.display = 'none';

    Swal.fire({
        icon: "success",
        title: "Attestation Téléchargée",
        text: "Fichier disponible dans votre répértoire de téléchargements",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        footer: "*Ajouter cette page à vos favories ou écran d'accueil"
    });
});