console.log('Happy developing ✨')

let roles: string[] = [];
let i = 0;

// Funktion zur Rollenverteilung
function dierollenverteilung() {
    roles.length = 0;

    // Holen der Spieleranzahl und Imposteranzahl
    const ZahlenDerMitspieler = document.getElementById("spieleranzahl") as HTMLInputElement;
    const ZahlenWertMitspieler = Number(ZahlenDerMitspieler.value);

    const imposterAnzahl = document.getElementById("imposterAnzahl") as HTMLInputElement;
    const ZahlenWertImposter = Number(imposterAnzahl.value);

    const Goodguys = ZahlenWertMitspieler - ZahlenWertImposter;

    // Rollen für Goodguys hinzufügen
    for (let countgg = 0; countgg <= Goodguys; countgg++) {
        roles.push('Du bist nur ein netter Typ');
    }

    // Rollen für Imposter hinzufügen
    for (let countbg = 1; countbg <= ZahlenWertImposter; countbg++) {
        roles.push("DU BIST imposter");
    }

    // Rollen zufällig mischen
    shufflearray(roles);
    console.log(roles);

    // Überprüfen, ob genug Spieler vorhanden sind
    if (ZahlenWertMitspieler === 0 || ZahlenWertMitspieler === 1) {
        alert('DU BRAUCHST MEHR MITSPIELER BRO');
    }
}

// Funktion zum Mischen der Rollen
function shufflearray(roles: any[]): any {
    for (let i = roles.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [roles[i], roles[j]] = [roles[j], roles[i]];
    }
}

// Funktion, um die Rolle eines Spielers zu zeigen
function rollenspiel() {
    const rolleDiv = document.getElementById("rolle");

    if (rolleDiv) {
        rolleDiv.innerText = roles[i];

        // Überprüfen, ob der Spieler ein Imposter ist und die Umrandung entsprechend ändern
        if (roles[i] === "DU BIST imposter") {
            rolleDiv.style.border = "2px solid red"; // Rote Umrandung für Imposter
        } else {
            rolleDiv.style.border = "2px solid limegreen"; // Standardgrüne Umrandung für Goodguys
        }

        // Erhöhe den Index, um die nächste Rolle anzuzeigen
        if (i < roles.length - 1) {
            i++;
        } else {
            i = 0; // Zurücksetzen, wenn alle Rollen gezeigt wurden
            rolleDiv.innerText = "Alle Rollen wurden verteilt";
        }
    }
}

// Funktion, um das Rollenfeld zurückzusetzen
function reseter() {
    const rolleDiv = document.getElementById("rolle");

    if (rolleDiv) {
        rolleDiv.innerText = "";
        rolleDiv.style.border = "none"; // Entfernen der Umrandung
    }
}
