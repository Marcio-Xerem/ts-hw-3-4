import Data from './Data';
import Voo from './Voo';

// Testando a classe Data
const data1 = new Data('25/12/2024');
const data2 = new Data('01/01/2025');
const data3 = new Data('25/12/2024');
const data4 = new Data('29/02/2025'); // Data inválida
const agora = new Date(); // Recebe a data atual
const dataFormatada = agora.toLocaleDateString('pt-BR'); // Formata a data atual para uma string do tipo dd/mm/aaaa
const dataAtual = new Data(dataFormatada); // Cria um objeto Data com a data formatada

console.log(`Data 1 (válida): ${data1.getDia()}/${data1.getMes()}/${data1.getAno()}`);
console.log(`Mês por extenso: ${data1.getMesExtenso()}`);
console.log(`Ano bissexto: ${data1.isBissexto()}`);
console.log(`Data 2 (válida): ${data2.getDia()}/${data2.getMes()}/${data2.getAno()}`);
console.log(`Mês por extenso: ${data2.getMesExtenso()}`);
console.log(`Ano bissexto: ${data2.isBissexto()}`);
console.log("\n====================================================================\n");

console.log(`Comparação: ${data1.compara(data2)}`);
console.log(`Comparação: ${data1.compara(data3)}`);
console.log(`Comparação: ${data1.compara(dataAtual)}`);
console.log("\n====================================================================\n");

console.log(`Data 4 (inválida): ${data4.getDia()}/${data4.getMes()}/${data4.getAno()}`);
console.log("\n====================================================================\n");

// Testando a classe Voo
const voo = new Voo(123, data1);
console.log(`Número do voo: ${voo.getVoo()}`);
console.log(`Data do voo: ${voo.getData().getDia()}/${voo.getData().getMes()}/${voo.getData().getAno()}`);
console.log(`Próxima cadeira livre: ${voo.proximoLivre()}`);
console.log(`Verifica cadeira 1: ${voo.verifica(1)}`);
console.log(`Ocupando cadeira 1: ${voo.ocupa(1)}`);
console.log(`Verifica cadeira 1 novamente: ${voo.verifica(1)}`);
console.log(`Cadeiras vagas: ${voo.vagas()}`);
console.log("\n====================================================================\n");

console.log(`Número do voo: ${voo.getVoo()}`);
console.log(`Data do voo: ${voo.getData().getDia()}/${voo.getData().getMes()}/${voo.getData().getAno()}`);
console.log(`Verifica cadeira 3: ${voo.verifica(3)}`);
console.log(`Ocupando cadeira 3: ${voo.ocupa(3)}`);
console.log(`Verifica cadeira 3 novamente: ${voo.verifica(3)}`);
console.log(`Cadeiras vagas: ${voo.vagas()}`);