import Data from './Data';

class Voo {
    private numero: number;
    private data: Data;
    private passageiros: boolean[];

    constructor(numero: number, data: Data) {
        this.numero = numero;
        this.data = data;
        this.passageiros = Array(100).fill(false);
    }

    proximoLivre(): number | null {
        const index = this.passageiros.indexOf(false);
        return index !== -1 ? index + 1 : null;
    }

    verifica(cadeira: number): boolean {
        return this.passageiros[cadeira - 1];
    }

    ocupa(cadeira: number): boolean {
        if (!this.verifica(cadeira)) {
            this.passageiros[cadeira - 1] = true;
            return true;
        }
        return false;
    }

    vagas(): number {
        let vagasLivres = 0;
        this.passageiros.forEach(cadeira => {
            if (!cadeira) {
                vagasLivres++;
            }
        });
        return vagasLivres;
    }

    getVoo(): number {
        return this.numero;
    }

    getData(): Data {
        return this.data;
    }
}

export default Voo;