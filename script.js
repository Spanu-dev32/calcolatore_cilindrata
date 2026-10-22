const btnCalcola = document.getElementById("calcola");


// ======================================================
// FUNZIONE CALCOLO CILINDRATA
// ======================================================

function calcolaCilindrata(alesaggio, corsa, cilindri) {

    return (
        (Math.PI / 4) *
        Math.pow(alesaggio, 2) *
        corsa *
        cilindri /
        1000
    );
}


// ======================================================
// CALCOLO PRINCIPALE
// ======================================================

btnCalcola.addEventListener("click", function () {

    const alesaggio = parseFloat(
        document.getElementById("alesaggio").value
    );

    const corsa = parseFloat(
        document.getElementById("corsa").value
    );

    const cilindri = parseInt(
        document.getElementById("cilindri").value
    );

    const errore = document.getElementById("errore");
    const risultato = document.getElementById("risultato");


    // Controllo dati

    if (
        isNaN(alesaggio) ||
        isNaN(corsa) ||
        isNaN(cilindri) ||
        alesaggio <= 0 ||
        corsa <= 0 ||
        cilindri <= 0
    ) {

        errore.textContent =
            "Inserisci alesaggio, corsa e numero cilindri.";

        risultato.classList.add("hidden");

        return;
    }


    errore.textContent = "";


    // Cilindrata

    const cilindrata =
        calcolaCilindrata(
            alesaggio,
            corsa,
            cilindri
        );


    const cilindrataPerCilindro =
        cilindrata / cilindri;


    const litri =
        cilindrata / 1000;


    // Rapporto alesaggio / corsa

    const rapporto =
        alesaggio / corsa;


    // Tipo geometria

    let tipoMotore;

    if (rapporto > 1.05) {

        tipoMotore = "Superquadro";

    } else if (rapporto < 0.95) {

        tipoMotore = "Sottoquadro";

    } else {

        tipoMotore = "Quadro";
    }

    // Visualizzazione risultati

    document.getElementById("cc").textContent =
        cilindrata.toLocaleString("it-IT", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }) + " cc";


    document.getElementById("litri").textContent =
        litri.toLocaleString("it-IT", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + " L";


    document.getElementById("ccCilindro").textContent =
        cilindrataPerCilindro.toLocaleString("it-IT", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }) + " cc";


    document.getElementById("rapporto").textContent =
        rapporto.toFixed(3);


    document.getElementById("tipoMotore").textContent =
        tipoMotore;


    risultato.classList.remove("hidden");
});



// ======================================================
// CONFRONTO MOTORI
// ======================================================

const btnConfronta =
    document.getElementById("confronta");


btnConfronta.addEventListener("click", function () {

    const origAlesaggio =
        parseFloat(
            document.getElementById("origAlesaggio").value
        );

    const origCorsa =
        parseFloat(
            document.getElementById("origCorsa").value
        );

    const origCilindri =
        parseInt(
            document.getElementById("origCilindri").value
        );


    const modAlesaggio =
        parseFloat(
            document.getElementById("modAlesaggio").value
        );

    const modCorsa =
        parseFloat(
            document.getElementById("modCorsa").value
        );

    const modCilindri =
        parseInt(
            document.getElementById("modCilindri").value
        );


    const risultatoConfronto =
        document.getElementById("risultatoConfronto");


    // Controllo

    if (
        isNaN(origAlesaggio) ||
        isNaN(origCorsa) ||
        isNaN(origCilindri) ||
        isNaN(modAlesaggio) ||
        isNaN(modCorsa) ||
        isNaN(modCilindri) ||

        origAlesaggio <= 0 ||
        origCorsa <= 0 ||
        origCilindri <= 0 ||
        modAlesaggio <= 0 ||
        modCorsa <= 0 ||
        modCilindri <= 0
    ) {

        alert(
            "Inserisci tutti i dati dei due motori."
        );

        return;
    }


    // Calcolo cilindrate

    const originale =
        calcolaCilindrata(
            origAlesaggio,
            origCorsa,
            origCilindri
        );


    const modificato =
        calcolaCilindrata(
            modAlesaggio,
            modCorsa,
            modCilindri
        );


    // Differenza

    const differenza =
        modificato - originale;


    // Percentuale

    const percentuale =
        (differenza / originale) * 100;


    // Visualizzazione

    document.getElementById("ccOriginale").textContent =
        originale.toLocaleString("it-IT", {
            maximumFractionDigits: 1
        }) + " cc";


    document.getElementById("ccModificato").textContent =
        modificato.toLocaleString("it-IT", {
            maximumFractionDigits: 1
        }) + " cc";


    document.getElementById("differenza").textContent =
        (differenza >= 0 ? "+" : "") +
        differenza.toLocaleString("it-IT", {
            maximumFractionDigits: 1
        }) + " cc";


    document.getElementById("percentuale").textContent =
        (percentuale >= 0 ? "+" : "") +
        percentuale.toFixed(2) +
        "%";


    risultatoConfronto.classList.remove("hidden");

});