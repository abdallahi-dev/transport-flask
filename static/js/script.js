// =========================
// TEST JS
// =========================
console.log("JS chargé avec succès !");

// =========================
// LOGIN
// =========================

// Vérifier que l'utilisateur a choisi un rôle
function verifierLogin() {
    const role = document.getElementById("role").value;

    if (role === "") {
        alert("Veuillez choisir un rôle !");
        return false;
    }

    return true;
}

// =========================
// CLIENT - PAIEMENT
// =========================

function payer() {
    const depart = document.getElementById("depart").value;
    const arrivee = document.getElementById("arrivee").value;
    const telephone = document.getElementById("telephone").value;

    if (depart === "" || arrivee === "" || telephone === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    if (telephone.length !== 8 || isNaN(telephone)) {
        alert("Numéro invalide (8 chiffres requis)");
        return;
    }

    alert("Paiement réussi ! 🚀");
}

// =========================
// CHOIX APPLICATION PAIEMENT
// =========================

function choisirPaiement(app) {
    const boutons = document.querySelectorAll(".pay-btn");

    boutons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");

    console.log("Paiement choisi :", app);
}

// =========================
// DRIVER - VALIDATION ARRÊT
// =========================

function validerArret(nom) {
    alert("Arrêt validé : " + nom);
}

// =========================
// DRIVER - SIGNALER PROBLÈME
// =========================

function signaler(type) {
    alert("Problème signalé : " + type);
}

// =========================
// ADMIN - CONFIRMATION ACTION
// =========================

function confirmerAction(action) {
    if (confirm("Confirmer : " + action + " ?")) {
        alert(action + " effectué !");
    }
}

// =========================
// ANIMATION BOUTON
// =========================

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);
        });
    });
});