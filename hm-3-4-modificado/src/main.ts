import Data from './Data';
import Voo from './Voo';

const _$ = vid => document.getElementById(vid) || document.querySelector(vid);
let voo: Voo;

// Funções para manipulação dos elementos HTML
function compararDatas() {
  const data1Input = (_$('data1') as HTMLInputElement).value;
  const data2Input = (_$('data2') as HTMLInputElement).value;

  const data1 = new Data(data1Input);
  const data2 = new Data(data2Input);
  
  const resultadoComparacao = data1.compara(data2);
  const resultadoTexto = resultadoComparacao === 0 ? 'Datas iguais' : (resultadoComparacao > 0 ? 'Data 1 é posterior à Data 2' : 'Data 1 é anterior à Data 2');

  (_$('resultadoComparacao') as HTMLElement).innerText = resultadoTexto;  
}

function informarVoo() {
  const numeroVooInput = parseInt((_$('numeroVoo') as HTMLInputElement).value, 10);
  const dataVoo = new Data('25/12/2024'); // Data fixa para exemplo
  
  voo = new Voo(numeroVooInput, dataVoo);
  const informacoesVoo = `Número do voo: ${voo.getVoo()} - Data do voo: ${voo.getData().getDia()}/${voo.getData().getMes()}/${voo.getData().getAno()}`;

  (_$('informacoesVoo') as HTMLElement).innerText = informacoesVoo;
}

function testarData(dataInputId: string, resultadoId: string) {
  const dataInput = (_$(dataInputId) as HTMLInputElement).value;
  const data = new Data(dataInput);

  const dia = data.getDia();
  const mes = data.getMes();
  const ano = data.getAno();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  const resultadoTexto = dia === '01' && mes === '01' && ano === '0001'
    ? 'Data inválida: 01/01/0001'
    : `Data válida: ${dataFormatada} - Ano bissexto: ${data.isBissexto() ? 'Sim' : 'Não'}`;

  (_$(resultadoId) as HTMLElement).innerText = resultadoTexto;
}

function ocuparCadeira() {
  const assentoInput = parseInt((_$('assento') as HTMLInputElement).value, 10);
  voo.ocupa(assentoInput);
  const resultadoTexto = `Cadeira ${assentoInput} ocupada.`;
  (_$('resultadoCadeira') as HTMLElement).innerText = resultadoTexto;
}

function verificarCadeira() {
  const assentoInput = parseInt((_$('assento') as HTMLInputElement).value, 10);
  const ocupado = voo.verifica(assentoInput);
  const resultadoTexto = ocupado ? `Cadeira ${assentoInput} está ocupada.` : `Cadeira ${assentoInput} está livre.`;
  (_$('resultadoCadeira') as HTMLElement).innerText = resultadoTexto;
}

function proximaCadeiraLivre() {
  const proximaLivre = voo.proximoLivre();
  const resultadoTexto = `Próxima cadeira livre: ${proximaLivre}.`;
  (_$('resultadoProximaLivre') as HTMLElement).innerText = resultadoTexto;
}

function quantidadeCadeirasVagas() {
  const vagas = voo.vagas();
  const resultadoTexto = `Quantidade de cadeiras vagas: ${vagas}.`;
  (_$('resultadoQuantidadeVagas') as HTMLElement).innerText = resultadoTexto;
}

// Adicionar eventos aos botões
(_$('comparar') as HTMLElement).addEventListener('click', compararDatas);
(_$('informarVoo') as HTMLElement).addEventListener('click', informarVoo);
(_$('testarData1') as HTMLElement).addEventListener('click', () => testarData('data1', 'resultadoData1'));
(_$('testarData2') as HTMLElement).addEventListener('click', () => testarData('data2', 'resultadoData2'));
(_$('ocuparCadeira') as HTMLElement).addEventListener('click', ocuparCadeira);
(_$('verificarCadeira') as HTMLElement).addEventListener('click', verificarCadeira);
(_$('proximaLivre') as HTMLElement).addEventListener('click', proximaCadeiraLivre);
(_$('quantidadeVagas') as HTMLElement).addEventListener('click', quantidadeCadeirasVagas);
