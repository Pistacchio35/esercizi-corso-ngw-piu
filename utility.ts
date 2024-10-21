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

class Veicolo {
    marca: string;
    modello: string;
    private velocita_Massima!: number;
    targa: string;

    constructor(marca: string, modello: string, velocitaMassima: number, targa: string) {
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
        this.verificaVelocitaMassima = velocitaMassima;
    }

    descrizione(): string {
        return `Il modello del veicolo è ${this.modello} e la marca è ${this.marca}. La sua velocità massima è di ${this.velocita_Massima} Km/h.`;
    }

    public get verificaVelocitaMassima(): number {
        return this.velocita_Massima;
    }

    public set verificaVelocitaMassima(velocitaMassima: number) {
        
        if (velocitaMassima < 10) {
            throw new Error(`${this.marca} ${this.modello}: La velocità massima deve essere maggiore di 10 Km/h`);
        } else if (velocitaMassima > 500) {
            throw new Error(`${this.marca} ${this.modello}: La velocità massima non può superare i 500 Km/h`);
        }
        this.velocita_Massima = velocitaMassima;
    }
}

class Auto extends Veicolo {
    numeroPorte: number;

    constructor(marca: string, modello: string, velocitaMassima: number, targa: string, numeroPorte: number) {
        super(marca, modello, velocitaMassima, targa);
        this.numeroPorte = numeroPorte;
    }

    descrizione(): string {
        return `${super.descrizione()} Ha ${this.numeroPorte} porte.`;
    }
}

class Moto extends Veicolo {
    tipoManubrio: string;

    constructor(marca: string, modello: string, velocitaMassima: number, targa: string, tipoManubrio: string) {
        super(marca, modello, velocitaMassima, targa);
        this.tipoManubrio = tipoManubrio;
    }

    descrizione(): string {
        return `${super.descrizione()} Ha un manubrio di tipo: ${this.tipoManubrio}.`;
    }
}

function visualizzaVeicolo(veicolo: Veicolo): void {
    const visualizza = document.getElementById('visualizza-dati')!;

    const paragrafo = document.createElement('p');
    paragrafo.textContent = veicolo.descrizione();
    visualizza.appendChild(paragrafo);
}

document.addEventListener('DOMContentLoaded', () => {
    const veicoliData = [
        { tipo: Moto, marca: "Ducati", modello: "Panigale V4S", velocitaMassima: 300, targa: "UP609DW", tipoManubrio: "semimanubrio" },
        { tipo: Auto, marca: "Alfa Romeo", modello: "159", velocitaMassima: 230, targa: "GFF194FZ", numeroPorte: 4 },
        { tipo: Moto, marca: "Yamaha", modello: "R1", velocitaMassima: 290, targa: "AB123CD", tipoManubrio: "manubrio super sportivo" },
        { tipo: Auto, marca: "Ferrari", modello: "599", velocitaMassima: 300, targa: "TT502SY", numeroPorte: 5 },
        { tipo: Auto, marca: "Lamborghini", modello: "Diablo", velocitaMassima: 600, targa: "RP583LM", numeroPorte: 3 }
    ];
    const veicoli: Veicolo[] = [];

    for (const veicoloData of veicoliData) {
        try {
            const veicolo = veicoloData.tipo === Moto
                ? new Moto(veicoloData.marca, veicoloData.modello, veicoloData.velocitaMassima, veicoloData.targa, veicoloData.tipoManubrio!)
                : new Auto(veicoloData.marca, veicoloData.modello, veicoloData.velocitaMassima, veicoloData.targa, veicoloData.numeroPorte!);

            veicoli.push(veicolo); // Aggiunge solo i veicoli validi
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(`Errore con il veicolo ${veicoloData.marca} ${veicoloData.modello}: ${error.message}`);
            } else {
                console.error('Errore sconosciuto');
            }
        }
    }

    for (const veicolo of veicoli) {
        visualizzaVeicolo(veicolo);
    }
});