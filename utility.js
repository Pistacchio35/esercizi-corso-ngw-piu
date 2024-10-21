/*
-Crea una classe Veicolo che rappresenta un veicolo generico con le seguenti proprietà e metodi:
Proprietà:
- Marca: il marchio del veicolo.
- Modello: il modello del veicolo
- velocitàMassima: la velocità massima del veicolo

targa: la targa del veicolo, che viene impostata al momento della creazione e non può essere modificata successivamente.

Metodi:
descrizione(): restituisce una descrizione testuale del veicolo, che include marca, modello e velocità massima.

Crea una classe Auto che estende la classe Veicolo:
Proprietà aggiuntiva:

- Metodo aggiuntivo:

descriviAuto(): stampa una descrizione dell'auto, inclusi il numero di porte, la marca e il
modello (usando il metodo descrizione() ereditato)

- numeroPorte: il numero di porte dell'auto*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe astratta Veicolo
var Veicolo = /** @class */ (function () {
    // Il costruttore della classe astratta può essere usato solo dalle sottoclassi
    function Veicolo(marca, modello, velocitaMassima, targa) {
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
        this.verificaVelocitaMassima = velocitaMassima;
    }
    // Metodo dell'interfaccia Motorizzato, obbligatorio da implementare
    Veicolo.prototype.avviaMotore = function () {
        console.log("".concat(this.marca, " ").concat(this.modello, ": Motore avviato!"));
    };
    Object.defineProperty(Veicolo.prototype, "verificaVelocitaMassima", {
        get: function () {
            return this.velocita_Massima;
        },
        set: function (velocitaMassima) {
            if (velocitaMassima < 10) {
                throw new Error("".concat(this.marca, " ").concat(this.modello, ": La velocit\u00E0 massima deve essere maggiore di 10 Km/h"));
            }
            else if (velocitaMassima > 500) {
                throw new Error("".concat(this.marca, " ").concat(this.modello, ": La velocit\u00E0 massima non pu\u00F2 superare i 500 Km/h"));
            }
            this.velocita_Massima = velocitaMassima;
        },
        enumerable: false,
        configurable: true
    });
    return Veicolo;
}());
// Classe Auto che eredita da Veicolo e implementa avviaMotore
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modello, velocitaMassima, targa, numeroPorte) {
        var _this = _super.call(this, marca, modello, velocitaMassima, targa) || this;
        _this.numeroPorte = numeroPorte;
        return _this;
    }
    Auto.prototype.descrizione = function () {
        return "Il modello del veicolo \u00E8 ".concat(this.modello, ", la marca \u00E8 ").concat(this.marca, ". La velocit\u00E0 massima \u00E8 di ").concat(this.verificaVelocitaMassima, " Km/h. Ha ").concat(this.numeroPorte, " porte.");
    };
    Auto.prototype.avviaMotore = function () {
        console.log("".concat(this.marca, " ").concat(this.modello, ": Motore dell'auto avviato!"));
    };
    return Auto;
}(Veicolo));
// Classe Moto che eredita da Veicolo e implementa avviaMotore
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modello, velocitaMassima, targa, tipoManubrio) {
        var _this = _super.call(this, marca, modello, velocitaMassima, targa) || this;
        _this.tipoManubrio = tipoManubrio;
        return _this;
    }
    Moto.prototype.descrizione = function () {
        return "Il modello del veicolo \u00E8 ".concat(this.modello, ", la marca \u00E8 ").concat(this.marca, ". La velocit\u00E0 massima \u00E8 di ").concat(this.verificaVelocitaMassima, " Km/h. Ha un manubrio di tipo: ").concat(this.tipoManubrio, ".");
    };
    Moto.prototype.avviaMotore = function () {
        console.log("".concat(this.marca, " ").concat(this.modello, ": Motore della moto avviato!"));
    };
    return Moto;
}(Veicolo));
// Funzione per visualizzare i veicoli
function visualizzaVeicolo(veicolo) {
    var visualizza = document.getElementById('visualizza-dati');
    var paragrafo = document.createElement('p');
    paragrafo.textContent = veicolo.descrizione();
    visualizza.appendChild(paragrafo);
}
// Logica per creare veicoli e aggiungerli alla pagina
document.addEventListener('DOMContentLoaded', function () {
    var veicoliData = [
        { tipo: Moto, marca: "Ducati", modello: "Panigale V4S", velocitaMassima: 300, targa: "UP609DW", tipoManubrio: "semimanubrio" },
        { tipo: Auto, marca: "Alfa Romeo", modello: "159", velocitaMassima: 230, targa: "GFF194FZ", numeroPorte: 4 },
        { tipo: Moto, marca: "Yamaha", modello: "R1", velocitaMassima: 290, targa: "AB123CD", tipoManubrio: "manubrio super sportivo" },
        { tipo: Auto, marca: "Ferrari", modello: "599", velocitaMassima: 300, targa: "TT502SY", numeroPorte: 5 },
        { tipo: Auto, marca: "Lamborghini", modello: "Diablo", velocitaMassima: 600, targa: "RP583LM", numeroPorte: 3 }
    ];
    var veicoli = [];
    for (var _i = 0, veicoliData_1 = veicoliData; _i < veicoliData_1.length; _i++) {
        var veicoloData = veicoliData_1[_i];
        try {
            var veicolo = veicoloData.tipo === Moto
                ? new Moto(veicoloData.marca, veicoloData.modello, veicoloData.velocitaMassima, veicoloData.targa, veicoloData.tipoManubrio)
                : new Auto(veicoloData.marca, veicoloData.modello, veicoloData.velocitaMassima, veicoloData.targa, veicoloData.numeroPorte);
            veicoli.push(veicolo); // Aggiunge solo i veicoli validi
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Errore con il veicolo ".concat(veicoloData.marca, " ").concat(veicoloData.modello, ": ").concat(error.message));
            }
            else {
                console.error('Errore sconosciuto');
            }
        }
    }
    for (var _a = 0, veicoli_1 = veicoli; _a < veicoli_1.length; _a++) {
        var veicolo = veicoli_1[_a];
        visualizzaVeicolo(veicolo);
    }
});
