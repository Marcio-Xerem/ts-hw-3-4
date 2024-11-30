import './style.css';
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
  const painel1 = _$('resultadoComparacao');
    
  const resultadoComparacao = data1.compara(data2);
  const resultadoTexto = resultadoComparacao === 0 ? 'Datas iguais' : (resultadoComparacao > 0 ? 'Data 1 é posterior à Data 2' : 'Data 1 é anterior à Data 2');

  (painel1 as HTMLElement).innerText = resultadoTexto;  
}

function informarVoo() {
  const numeroVooInput = parseInt((_$('numeroVoo') as HTMLInputElement).value, 10);
  const dataVoo = new Data('25/12/2024'); // Data fixa para exemplo
  const painel2 = _$('informacoesVoo');
  
  voo = new Voo(numeroVooInput, dataVoo);
  const informacoesVoo = `Número do voo: ${voo.getVoo()} - Data do voo: ${voo.getData().getDia()}/${voo.getData().getMes()}/${voo.getData().getAno()}`;

  (painel2 as HTMLElement).innerText = informacoesVoo;
}

function testarData(dataInputId: string, resultadoId: string) {
  const dataInput = (_$(dataInputId) as HTMLInputElement).value;
  const data = new Data(dataInput);
  const painel3 = _$(resultadoId)

  const dia = data.getDia();
  const mes = data.getMes();
  const ano = data.getAno();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  const resultadoTexto = dia === '01' && mes === '01' && ano === '0001'
    ? 'Data inválida: 01/01/0001'
    : `Data válida: ${dataFormatada} - Ano bissexto: ${data.isBissexto() ? 'Sim' : 'Não'}`;

  (painel3 as HTMLElement).innerText = resultadoTexto;
}

function ocuparCadeira() {
  const assentoInput = parseInt((_$('assento') as HTMLInputElement).value, 10);
  voo.ocupa(assentoInput);
  const resultadoTexto = `Cadeira ${assentoInput} ocupada.`;
  const painel4 = _$('resultadoCadeira');

  (painel4 as HTMLElement).innerText = resultadoTexto;
}

function verificarCadeira() {
  const assentoInput = parseInt((_$('assento') as HTMLInputElement).value, 10);
  const ocupado = voo.verifica(assentoInput);
  const resultadoTexto = ocupado ? `Cadeira ${assentoInput} está ocupada.` : `Cadeira ${assentoInput} está livre.`;
  const painel5 = _$('resultadoCadeira');

  (painel5 as HTMLElement).innerText = resultadoTexto;
}

function proximaCadeiraLivre() {
  const proximaLivre = voo.proximoLivre();
  const resultadoTexto = `Próxima cadeira livre: ${proximaLivre}.`;
  const painel6 = _$('resultadoProximaLivre');

  (painel6 as HTMLElement).innerText = resultadoTexto;
}

function quantidadeCadeirasVagas() {
  const vagas = voo.vagas();
  const resultadoTexto = `Quantidade de cadeiras vagas: ${vagas}.`;
  const painel7 = _$('resultadoQuantidadeVagas');

  (painel7 as HTMLElement).innerText = resultadoTexto;
}

// Adicionar eventos aos botões
const btnComparar = _$('comparar'); const btninformarVoo = _$('informarVoo'); const btntestarData1 = _$('testarData1');
const btntestarData2 = _$('testarData2'); const btnocuparCadeira = _$('ocuparCadeira'); const btnverificarCadeira = _$('verificarCadeira');
const btnproximaLivre = _$('proximaLivre'); const btnquantidadeVagas = _$('quantidadeVagas');
(btnComparar as HTMLElement).addEventListener('click', compararDatas);
(btninformarVoo as HTMLElement).addEventListener('click', informarVoo);
(btntestarData1 as HTMLElement).addEventListener('click', () => testarData('data1', 'resultadoData1'));
(btntestarData2 as HTMLElement).addEventListener('click', () => testarData('data2', 'resultadoData2'));
(btnocuparCadeira as HTMLElement).addEventListener('click', ocuparCadeira);
(btnverificarCadeira as HTMLElement).addEventListener('click', verificarCadeira);
(btnproximaLivre as HTMLElement).addEventListener('click', proximaCadeiraLivre);
(btnquantidadeVagas as HTMLElement).addEventListener('click', quantidadeCadeirasVagas);
