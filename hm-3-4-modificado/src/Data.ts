class Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dataStr: string) {
        const partes = dataStr.split('/');
        const numeros = partes.map(Number);
        const dia = numeros[0];
        const mes = numeros[1];
        const ano = numeros[2];

        if (this.isValidDate(dia, mes, ano)) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        } else {
            this.dia = 1;
            this.mes = 1;
            this.ano = 1;
        }
    }

    private isValidDate(dia: number, mes: number, ano: number): boolean {
        if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
            return false;
        }
        const date = new Date(ano, mes - 1, dia);
        return (
            date.getFullYear() === ano &&
            date.getMonth() === mes - 1 &&
            date.getDate() === dia
        );
    }

    compara(outraData: Data): number {
        const atual = new Date(this.ano, this.mes - 1, this.dia);
        const outra = new Date(outraData.getAno(), outraData.getMes() - 1, outraData.getDia());
        if (atual.getTime() === outra.getTime()) {
            return 0;
        }
        return atual.getTime() > outra.getTime() ? 1 : -1;
    }

    getDia(): string {
        return this.dia.toString().padStart(2, '0');
    }

    getMes(): string {
        return this.mes.toString().padStart(2, '0');
    }

    getAno(): string {
        return this.ano.toString().padStart(4, '0');
    }

    getMesExtenso(): string {
        const meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return meses[this.mes - 1];
    }

    isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || this.ano % 400 === 0;
    }
}

export default Data;
