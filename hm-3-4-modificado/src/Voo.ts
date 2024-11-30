import Data from './Data';

class Voo {
    private numeroVoo: number;
    private data: Data;
    private assentos: boolean[];

    constructor(numeroVoo: number, data: Data) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.assentos = new Array(100).fill(false);
    }

    getVoo(): number {
        return this.numeroVoo;
    }

    getData(): Data {
        return this.data;
    }

    proximoLivre(): number {
        return this.assentos.indexOf(false) + 1;
    }

    verifica(assento: number): boolean {
        return this.assentos[assento - 1];
    }

    ocupa(assento: number): void {
        if (!this.assentos[assento - 1]) {
            this.assentos[assento - 1] = true;
        }
    }

    vagas(): number {
        return this.assentos.filter(assento => !assento).length;
    }
}

export default Voo;