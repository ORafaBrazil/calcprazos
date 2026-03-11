// Lista de feriados e pontos facultativos TJGO (2009–2029)
const feriadosTJGO = [
    '2009-01-01', '2009-02-23', '2009-02-24', '2009-04-08', '2009-04-09', '2009-04-10', '2009-04-21', '2009-05-01', '2009-06-11', '2009-07-26', '2009-09-07', '2009-10-12', '2009-10-24', '2009-10-28', '2009-11-02', '2009-11-15', '2009-12-08', '2009-12-25',
    '2010-01-01', '2010-02-15', '2010-02-16', '2010-03-31', '2010-04-01', '2010-04-02', '2010-04-21', '2010-05-01', '2010-06-03', '2010-07-30', '2010-09-06', '2010-09-07', '2010-10-11', '2010-10-12', '2010-10-24', '2010-10-28', '2010-10-29', '2010-11-01', '2010-11-02', '2010-11-15', '2010-12-08', '2010-12-25',
    '2011-01-01', '2011-03-07', '2011-03-08', '2011-03-09', '2011-04-20', '2011-04-21', '2011-04-22', '2011-05-01', '2011-06-23', '2011-07-26', '2011-09-07', '2011-10-12', '2011-10-24', '2011-10-28', '2011-11-01', '2011-11-15', '2011-12-08', '2011-12-25',
    '2012-01-01', '2012-02-20', '2012-02-21', '2012-02-22', '2012-04-04', '2012-04-05', '2012-04-06', '2012-04-21', '2012-05-01', '2012-06-07', '2012-07-26', '2012-09-07', '2012-10-12', '2012-10-24', '2012-10-28', '2012-11-02', '2012-11-15', '2012-12-08', '2012-12-25',
    '2013-01-01', '2013-02-11', '2013-02-12', '2013-02-13', '2013-03-27', '2013-03-28', '2013-03-29', '2013-04-21', '2013-05-01', '2013-06-30', '2013-07-26', '2013-09-07', '2013-10-12', '2013-10-24', '2013-10-28', '2013-11-02', '2013-11-15', '2013-12-08', '2013-12-25',
    '2014-01-01', '2014-03-03', '2014-03-04', '2014-03-05', '2014-04-16', '2014-04-17', '2014-04-18', '2014-04-21', '2014-05-01', '2014-06-19', '2014-07-26', '2014-09-07', '2014-10-12', '2014-10-24', '2014-10-28', '2014-11-02', '2014-11-15', '2014-12-08', '2014-12-25',
    '2015-01-01', '2015-02-16', '2015-02-17', '2015-02-18', '2015-04-01', '2015-04-02', '2015-04-03', '2015-04-20', '2015-04-21', '2015-05-01', '2015-06-04', '2015-06-05', '2015-07-26', '2015-09-07', '2015-10-12', '2015-10-24', '2015-10-28', '2015-11-02', '2015-11-15', '2015-12-08', '2015-12-25',
    '2016-01-01', '2016-02-08', '2016-02-09', '2016-02-10', '2016-03-23', '2016-03-24', '2016-03-25', '2016-04-21', '2016-04-22', '2016-05-01', '2016-05-26', '2016-05-27', '2016-07-25', '2016-09-07', '2016-10-12', '2016-10-24', '2016-10-25', '2016-11-02', '2016-11-14', '2016-11-15', '2016-12-08', '2016-12-25',
    '2017-01-01', '2017-02-27', '2017-02-28', '2017-03-01', '2017-04-12', '2017-04-13', '2017-04-14', '2017-04-21', '2017-05-01', '2017-06-15', '2017-06-16', '2017-07-26', '2017-09-07', '2017-09-08', '2017-10-12', '2017-10-13', '2017-10-24', '2017-10-28', '2017-11-02', '2017-11-03', '2017-11-15', '2017-12-08', '2017-12-25',
    '2018-01-01', '2018-02-12', '2018-02-13', '2018-02-14', '2018-03-28', '2018-03-29', '2018-03-30', '2018-04-21', '2018-04-30', '2018-05-01', '2018-05-31', '2018-06-01', '2018-06-27', '2018-07-02', '2018-07-06', '2018-07-25', '2018-09-07', '2018-10-12', '2018-10-24', '2018-10-28', '2018-11-02', '2018-11-15', '2018-11-16', '2018-12-08', '2018-12-25',
    '2019-01-01', '2019-03-04', '2019-03-05', '2019-03-06', '2019-04-17', '2019-04-18', '2019-04-19', '2019-04-21', '2019-05-01', '2019-06-20', '2019-06-21', '2019-07-26', '2019-09-07', '2019-10-12', '2019-10-24', '2019-10-25', '2019-10-28', '2019-11-02', '2019-11-15', '2019-12-08', '2019-12-25',
    '2020-01-01', '2020-02-24', '2020-02-25', '2020-02-26', '2020-04-08', '2020-04-09', '2020-04-10', '2020-04-20', '2020-04-21', '2020-05-01', '2020-06-11', '2020-06-12', '2020-07-26', '2020-09-07', '2020-10-12', '2020-10-24', '2020-10-28', '2020-11-02', '2020-11-15', '2020-12-08', '2020-12-25',
    '2021-01-01', '2021-02-15', '2021-02-16', '2021-03-31', '2021-04-01', '2021-04-02', '2021-04-21', '2021-05-01', '2021-06-03', '2021-07-26', '2021-09-07', '2021-10-12', '2021-10-24', '2021-10-28', '2021-11-02', '2021-11-15', '2021-12-08', '2021-12-25',
    '2022-01-01', '2022-02-28', '2022-03-01', '2022-04-13', '2022-04-14', '2022-04-15', '2022-04-21', '2022-05-01', '2022-06-16', '2022-07-26', '2022-09-07', '2022-10-12', '2022-10-24', '2022-10-28', '2022-11-02', '2022-11-15', '2022-11-24', '2022-11-28', '2022-12-02', '2022-12-05', '2022-12-08', '2022-12-09', '2022-12-25',
    '2023-01-01', '2023-02-20', '2023-02-21', '2023-04-05', '2023-04-06', '2023-04-07', '2023-04-21', '2023-05-01', '2023-05-03', '2023-06-08', '2023-06-09', '2023-07-24', '2023-09-07', '2023-09-08', '2023-10-12', '2023-10-13', '2023-10-23', '2023-10-24', '2023-10-28', '2023-11-02', '2023-11-03', '2023-11-15', '2023-12-08', '2023-12-25',
    '2024-01-01', '2024-02-12', '2024-02-13', '2024-03-27', '2024-03-28', '2024-03-29', '2024-04-21', '2024-05-01', '2024-05-30', '2024-05-31', '2024-07-22', '2024-09-07', '2024-10-12', '2024-10-24', '2024-11-01', '2024-11-02', '2024-11-15', '2024-11-20', '2024-12-08', '2024-12-25',
    '2025-01-01', '2025-03-03', '2025-03-04', '2025-04-16', '2025-04-17', '2025-04-18', '2025-04-21', '2025-05-01', '2025-05-02', '2025-06-19', '2025-06-20', '2025-07-26', '2025-09-07', '2025-10-12', '2025-10-24', '2025-10-27', '2025-10-28', '2025-11-02', '2025-11-15', '2025-11-20', '2025-11-21', '2025-12-08', '2025-12-25',
    '2026-01-01', '2026-02-16', '2026-02-17', '2026-02-18', '2026-03-20', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-20', '2026-04-21', '2026-05-01', '2026-06-04', '2026-06-05', '2026-07-26', '2026-09-07', '2026-10-12', '2026-10-24', '2026-10-28', '2026-11-02', '2026-11-15', '2026-11-20', '2026-12-07', '2026-12-08', '2026-12-25',
    '2027-01-01', '2027-02-08', '2027-02-09', '2027-02-10', '2027-03-24', '2027-03-25', '2027-03-26', '2027-04-21', '2027-05-01', '2027-05-27', '2027-05-28', '2027-07-26', '2027-09-06', '2027-09-07', '2027-10-11', '2027-10-12', '2027-10-24', '2027-10-28', '2027-10-29', '2027-11-01', '2027-11-02', '2027-11-15', '2027-11-20', '2027-12-08', '2027-12-25',
    '2028-01-01', '2028-02-28', '2028-02-29', '2028-03-01', '2028-04-12', '2028-04-13', '2028-04-14', '2028-04-21', '2028-05-01', '2028-06-15', '2028-06-16', '2028-07-26', '2028-09-07', '2028-09-08', '2028-10-12', '2028-10-13', '2028-10-23', '2028-10-24', '2028-10-28', '2028-11-02', '2028-11-03', '2028-11-15', '2028-11-20', '2028-12-08', '2028-12-25',
    '2029-01-01', '2029-02-12', '2029-02-13', '2029-02-14', '2029-03-28', '2029-03-29', '2029-03-30', '2029-04-21', '2029-04-30', '2029-05-01', '2029-05-31', '2029-06-01', '2029-07-26', '2029-07-27', '2029-09-07', '2029-10-12', '2029-10-24', '2029-10-28', '2029-11-02', '2029-11-15', '2029-11-16', '2029-11-19', '2029-11-20', '2029-12-08', '2029-12-25'
];

// Lista base já existente no site (mantida) + recesso
const feriadosBase = [
    // 2024
    '2024-01-01', '2024-02-12', '2024-02-13', '2024-02-14',
    '2024-03-27', '2024-03-28', '2024-03-29', '2024-05-01',
    '2024-05-24', '2024-05-30', '2024-05-31', '2024-07-22',
    '2024-10-24', '2024-10-25', '2024-10-28', '2024-11-15',
    '2024-11-20', '2024-12-25',
    // Recesso 2024-2025
    '2024-12-20', '2024-12-21', '2024-12-22', '2024-12-23',
    '2024-12-24', '2024-12-26', '2024-12-27', '2024-12-28',
    '2024-12-29', '2024-12-30', '2024-12-31',
    '2025-01-01', '2025-01-02', '2025-01-03', '2025-01-04',
    '2025-01-05', '2025-01-06',
    // 2025
    '2025-03-03', '2025-03-04', '2025-03-05', '2025-04-16',
    '2025-04-17', '2025-04-18', '2025-04-21', '2025-05-01',
    '2025-05-02', '2025-05-24', '2025-06-19', '2025-06-20',
    '2025-07-26', '2025-09-07', '2025-10-12', '2025-10-24',
    '2025-10-27', '2025-10-28', '2025-11-02', '2025-11-15',
    '2025-11-20', '2025-11-21', '2025-12-08', '2025-12-25',
    '2025-12-20', '2025-12-21', '2025-12-22', '2025-12-23',
    '2025-12-24', '2025-12-26', '2025-12-27', '2025-12-28',
    '2025-12-29', '2025-12-30', '2025-12-31',
    // 2026 (início do recesso)
    '2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04',
    '2026-01-05', '2026-01-06'
];

// Junta tudo e remove duplicados (para evitar repetição na lista)
let feriados = Array.from(new Set([...feriadosTJGO, ...feriadosBase]));

// Converter para Set para busca mais rápida
let feriadosSet = new Set(feriados);

// Função para verificar se uma data é dia útil
function isDiaUtil(data) {
    const diaSemana = data.getDay();
    // Sábado = 6, Domingo = 0
    if (diaSemana === 0 || diaSemana === 6) {
        return false;
    }
    
    // Verificar se é feriado
    const dataStr = formatarDataISO(data);
    return !feriadosSet.has(dataStr);
}

// Função para formatar data no formato ISO (YYYY-MM-DD)
function formatarDataISO(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

// Função para formatar data no formato brasileiro (DD/MM/YYYY)
function formatarDataBR(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

// Função para converter data do formato brasileiro (DD/MM/YYYY) para Date object
function parseDataBR(dataStr) {
    if (!dataStr) return null;
    
    // Remove espaços e caracteres especiais, mantendo apenas números e barras
    const limpa = dataStr.trim().replace(/[^\d\/]/g, '');
    
    // Verifica formato DD/MM/YYYY ou DD/MM/YY
    const partes = limpa.split('/');
    if (partes.length !== 3) {
        return null;
    }
    
    let dia = parseInt(partes[0], 10);
    let mes = parseInt(partes[1], 10) - 1; // Mês é 0-indexed no JavaScript
    let ano = parseInt(partes[2], 10);
    
    // Se o ano tiver 2 dígitos, assume 20XX para anos >= 24, 20XX para anos < 24 (assumindo anos recentes)
    if (ano < 100) {
        ano = 2000 + ano;
    }
    
    // Validação básica
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        return null;
    }
    
    if (dia < 1 || dia > 31 || mes < 0 || mes > 11) {
        return null;
    }
    
    const data = new Date(ano, mes, dia);
    
    // Verifica se a data é válida (ex: não permite 31/02)
    if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
        return null;
    }
    
    return data;
}

// Função para aplicar máscara de data brasileira (DD/MM/YYYY)
function aplicarMascaraData(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }
    
    // Formata como DD/MM/YYYY
    if (valor.length > 2) {
        valor = valor.substring(0, 2) + '/' + valor.substring(2);
    }
    if (valor.length > 5) {
        valor = valor.substring(0, 5) + '/' + valor.substring(5);
    }
    
    input.value = valor;
}

// Função para obter o nome do dia da semana
function getNomeDiaSemana(data) {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dias[data.getDay()];
}

// Função para adicionar dias úteis a uma data
function adicionarDiasUteis(dataInicial, quantidadeDias) {
    let data = new Date(dataInicial);
    let diasAdicionados = 0;
    
    while (diasAdicionados < quantidadeDias) {
        data.setDate(data.getDate() + 1);
        if (isDiaUtil(data)) {
            diasAdicionados++;
        }
    }
    
    return data;
}

// Função para ajustar data de entrada para próximo dia útil se necessário
function ajustarDataEntrada(data) {
    let dataAjustada = new Date(data);
    
    // Se não for dia útil, encontrar o próximo dia útil
    while (!isDiaUtil(dataAjustada)) {
        dataAjustada.setDate(dataAjustada.getDate() + 1);
    }
    
    return dataAjustada;
}

// Função para calcular prazo incluindo o dia inicial e o dia final
// dataInicio é o primeiro dia útil após a publicação (já calculado)
// quantidadeDias é o número de dias úteis a contar
// Regra: Conta quantidadeDias dias úteis a partir de dataInicio (incluindo dataInicio)
// O último dia (dia do vencimento) é incluído na contagem
function calcularPrazoComExclusaoInclusao(dataInicio, quantidadeDias) {
    // O dia inicial (dataInicio) é incluído na contagem
    // Contamos quantidadeDias dias úteis a partir de dataInicio
    let data = new Date(dataInicio);
    let diasContados = 0;
    
    // Conta os dias úteis incluindo o dia inicial
    while (diasContados < quantidadeDias) {
        if (isDiaUtil(data)) {
            diasContados++;
        }
        // Se ainda não contou todos os dias, avança para o próximo
        if (diasContados < quantidadeDias) {
            data.setDate(data.getDate() + 1);
        }
    }
    
    // Retorna a data final (incluída na contagem)
    return data;
}

// Função para iniciar contagem após publicação
// Calcula a data de publicação (2 dias úteis após a data de entrada)
// Retorna o primeiro dia útil após a publicação (que será o início da contagem)
function iniciarContagemAposPublicacao(dataEntrada) {
    let data = new Date(dataEntrada);
    let diasPulados = 0;
    
    // Calcula a data de publicação (2 dias úteis após a data de entrada)
    while (diasPulados < 2) {
        data.setDate(data.getDate() + 1);
        if (isDiaUtil(data)) {
            diasPulados++;
        }
    }
    // Agora 'data' é a data de publicação
    
    // Retorna o primeiro dia útil após a publicação (início da contagem)
    data.setDate(data.getDate() + 1);
    while (!isDiaUtil(data)) {
        data.setDate(data.getDate() + 1);
    }
    
    return data;
}

// Função para iniciar contagem 1 dia útil após (para suspensão)
function iniciarContagem1DiaUtilApos(dataInicial) {
    let data = new Date(dataInicial);
    data.setDate(data.getDate() + 1);
    
    // Encontra o próximo dia útil
    while (!isDiaUtil(data)) {
        data.setDate(data.getDate() + 1);
    }
    
    return data;
}

// 1. Purgação da Mora / Contestação
function calcularPurgação() {
    const dataInput = document.getElementById('purgação-data').value;
    if (!dataInput) {
        alert('Por favor, informe a data da juntada do mandado cumprido.');
        return;
    }
    
    const dataInicial = parseDataBR(dataInput);
    if (!dataInicial) {
        alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
        return;
    }
    
    // Purgação da mora: 5 dias úteis a contar da juntada do mandado cumprido
    // A contagem começa no próximo dia útil após a data da juntada
    // Se a data informada for sábado, domingo, feriado ou ponto facultativo, ajusta para o próximo dia útil
    const dataEntrada = ajustarDataEntrada(dataInicial);
    
    // Conta 5 dias úteis a partir do dia seguinte à data de entrada
    const dataFimPurgação = adicionarDiasUteis(dataEntrada, 5);
    
    // Contestação: 15 dias úteis após o prazo da purgação da mora, contado sucessivamente
    // O prazo de contestação começa no dia útil seguinte ao término da purgação
    const dataFimContestação = adicionarDiasUteis(dataFimPurgação, 15);
    
    const resultado = document.getElementById('purgação-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data da juntada do mandado cumprido:</strong> ${formatarDataBR(dataEntrada)} (${getNomeDiaSemana(dataEntrada)})</p>
        <p><strong>Fim da purgação da mora (5 dias úteis):</strong> ${formatarDataBR(dataFimPurgação)} (${getNomeDiaSemana(dataFimPurgação)})</p>
        <p class="data-final"><strong>Fim do prazo de contestação (15 dias úteis após a purgação):</strong> ${formatarDataBR(dataFimContestação)} (${getNomeDiaSemana(dataFimContestação)})</p>
    `;
    resultado.classList.add('show');
}

// 2. Contestação
function calcularContestação() {
    const dataInput = document.getElementById('contestação-data').value;
    if (!dataInput) {
        alert('Por favor, informe a data da juntada do mandado cumprido.');
        return;
    }
    
    const dataInicial = new Date(dataInput + 'T00:00:00');
    // Primeiro calcula a purgação (5 dias úteis imediatamente)
    const dataFimPurgação = adicionarDiasUteis(dataInicial, 5);
    // Depois calcula a contestação (15 dias úteis sucessivos)
    const dataFinal = adicionarDiasUteis(dataFimPurgação, 15);
    
    const resultado = document.getElementById('contestação-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data da juntada:</strong> ${formatarDataBR(dataInicial)} (${getNomeDiaSemana(dataInicial)})</p>
        <p><strong>Fim da purgação (5 dias úteis):</strong> ${formatarDataBR(dataFimPurgação)} (${getNomeDiaSemana(dataFimPurgação)})</p>
        <p class="data-final"><strong>Prazo final da contestação (15 dias úteis):</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
    `;
    resultado.classList.add('show');
}

// 3. Prazos Sucessivos
function calcularSucessivos() {
    const dataInput = document.getElementById('sucessivos-data').value;
    const prazo1 = parseInt(document.getElementById('sucessivos-prazo1').value);
    const prazo2 = parseInt(document.getElementById('sucessivos-prazo2').value);
    
    if (!dataInput || !prazo1 || !prazo2) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // 3.1: Ajustar data de entrada se for sábado, domingo, feriado ou ponto facultativo
    const dataInicial = parseDataBR(dataInput);
    if (!dataInicial) {
        alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
        return;
    }
    const dataEntrada = ajustarDataEntrada(dataInicial);
    
    // 3.4: Início do prazo - começa a contar a partir do primeiro dia útil seguinte ao da publicação (2 dias úteis após)
    const dataInicioPrazo1 = iniciarContagemAposPublicacao(dataEntrada);
    
    // 3.2: Calcular prazo 1 com exclusão do dia inicial e inclusão do dia final
    const dataFimPrazo1 = calcularPrazoComExclusaoInclusao(dataInicioPrazo1, prazo1);
    
    // 3.5: Prazo sucessivo - no primeiro dia útil seguinte ao término do prazo 1, inicia o prazo 2
    // O prazo 2 começa a contar no dia subsequente ao prazo 1 (sem a regra dos 2 dias)
    let dataInicioPrazo2 = new Date(dataFimPrazo1);
    dataInicioPrazo2.setDate(dataInicioPrazo2.getDate() + 1);
    while (!isDiaUtil(dataInicioPrazo2)) {
        dataInicioPrazo2.setDate(dataInicioPrazo2.getDate() + 1);
    }
    
    // Calcular prazo 2 - conta dias úteis a partir de dataInicioPrazo2 (incluindo o dia inicial)
    const dataFimPrazo2 = calcularPrazoComExclusaoInclusao(dataInicioPrazo2, prazo2);
    
    const totalDiasUteis = prazo1 + prazo2;
    
    const resultado = document.getElementById('sucessivos-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data de entrada:</strong> ${formatarDataBR(dataEntrada)} (${getNomeDiaSemana(dataEntrada)})</p>
        <p><strong>Início do Prazo 1:</strong> ${formatarDataBR(dataInicioPrazo1)} (${getNomeDiaSemana(dataInicioPrazo1)})</p>
        <p><strong>Fim do prazo 1 (${prazo1} dias úteis):</strong> ${formatarDataBR(dataFimPrazo1)} (${getNomeDiaSemana(dataFimPrazo1)})</p>
        <p><strong>Início do Prazo 2:</strong> ${formatarDataBR(dataInicioPrazo2)} (${getNomeDiaSemana(dataInicioPrazo2)})</p>
        <p><strong>Fim do prazo 2 (${prazo2} dias úteis):</strong> ${formatarDataBR(dataFimPrazo2)} (${getNomeDiaSemana(dataFimPrazo2)})</p>
        <p class="data-final"><strong>Prazo Final: Prazo 1 + Prazo 2 = ${totalDiasUteis} dias úteis:</strong> ${formatarDataBR(dataFimPrazo2)} (${getNomeDiaSemana(dataFimPrazo2)})</p>
    `;
    resultado.classList.add('show');
}

// 4. Trânsito em Julgado
function calcularTrânsito() {
    const dataInput = document.getElementById('trânsito-data').value;
    if (!dataInput) {
        alert('Por favor, informe a data da movimentação no Projudi.');
        return;
    }
    
    // 4.1: Ajustar data de entrada se for sábado, domingo, feriado ou ponto facultativo
    const dataInicial = parseDataBR(dataInput);
    if (!dataInicial) {
        alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
        return;
    }
    const dataEntrada = ajustarDataEntrada(dataInicial);
    
    // 4.3: Início do prazo - começa a contar a partir do primeiro dia útil seguinte ao da publicação (2 dias úteis após)
    const dataInicioContagem = iniciarContagemAposPublicacao(dataEntrada);
    
    // 4.2: Calcular prazo com exclusão do dia inicial e inclusão do dia final
    const dataFinal = calcularPrazoComExclusaoInclusao(dataInicioContagem, 15);
    
    const resultado = document.getElementById('trânsito-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data da movimentação:</strong> ${formatarDataBR(dataEntrada)} (${getNomeDiaSemana(dataEntrada)})</p>
        <p><strong>Início da contagem:</strong> ${formatarDataBR(dataInicioContagem)} (${getNomeDiaSemana(dataInicioContagem)})</p>
        <p class="data-final"><strong>Trânsito em julgado (15 dias úteis):</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
    `;
    resultado.classList.add('show');
}

// 5. Contagem Livre
function calcularContagem() {
    const dataInput = document.getElementById('contagem-data').value;
    const dias = parseInt(document.getElementById('contagem-dias').value);
    
    if (!dataInput || !dias) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // 4.1: Ajustar data de entrada se for sábado, domingo, feriado ou ponto facultativo
    const dataInicial = parseDataBR(dataInput);
    if (!dataInicial) {
        alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
        return;
    }
    const dataEntrada = ajustarDataEntrada(dataInicial);
    
    // 4.3: Início do prazo - começa a contar a partir do primeiro dia útil seguinte ao da publicação (2 dias úteis após)
    const dataInicioContagem = iniciarContagemAposPublicacao(dataEntrada);
    
    // 4.2: Calcular prazo com exclusão do dia inicial e inclusão do dia final
    const dataFinal = calcularPrazoComExclusaoInclusao(dataInicioContagem, dias);
    
    const resultado = document.getElementById('contagem-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data registrada no Projudi:</strong> ${formatarDataBR(dataEntrada)} (${getNomeDiaSemana(dataEntrada)})</p>
        <p><strong>Início da contagem (após publicação):</strong> ${formatarDataBR(dataInicioContagem)} (${getNomeDiaSemana(dataInicioContagem)})</p>
        <p class="data-final"><strong>Prazo final (${dias} dias úteis):</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
    `;
    resultado.classList.add('show');
}

// 6. Edital
function calcularEdital() {
    const dataInput = document.getElementById('edital-data').value;
    const diasCorridos = parseInt(document.getElementById('edital-dias').value);
    const diasContestacao = parseInt(document.getElementById('edital-contestacao').value) || 15;
    
    if (!dataInput || !diasCorridos) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Ajustar data de publicação se for sábado, domingo, feriado ou ponto facultativo
    const dataInicial = parseDataBR(dataInput);
    if (!dataInicial) {
        alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
        return;
    }
    const dataPublicacao = ajustarDataEntrada(dataInicial);
    
    // Início da contagem: dia útil seguinte à publicação
    let dataInicioContagem = new Date(dataPublicacao);
    dataInicioContagem.setDate(dataInicioContagem.getDate() + 1);
    while (!isDiaUtil(dataInicioContagem)) {
        dataInicioContagem.setDate(dataInicioContagem.getDate() + 1);
    }
    
    // Calcular término do edital (dias corridos)
    let dataTerminoEdital = new Date(dataInicioContagem);
    let diasContados = 0;
    
    while (diasContados < diasCorridos) {
        diasContados++;
        if (diasContados < diasCorridos) {
            dataTerminoEdital.setDate(dataTerminoEdital.getDate() + 1);
        }
    }
    
    // Prazo de contestação inicia no dia útil seguinte ao término do edital
    let dataInicioContestacao = new Date(dataTerminoEdital);
    dataInicioContestacao.setDate(dataInicioContestacao.getDate() + 1);
    while (!isDiaUtil(dataInicioContestacao)) {
        dataInicioContestacao.setDate(dataInicioContestacao.getDate() + 1);
    }
    
    // Calcular prazo de contestação (dias úteis)
    const dataFimContestacao = calcularPrazoComExclusaoInclusao(dataInicioContestacao, diasContestacao);
    
    const resultado = document.getElementById('edital-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data da publicação no DJE:</strong> ${formatarDataBR(dataPublicacao)} (${getNomeDiaSemana(dataPublicacao)})</p>
        <p><strong>Início da contagem:</strong> ${formatarDataBR(dataInicioContagem)} (${getNomeDiaSemana(dataInicioContagem)})</p>
        <p><strong>Término do edital (${diasCorridos} dias corridos):</strong> ${formatarDataBR(dataTerminoEdital)} (${getNomeDiaSemana(dataTerminoEdital)})</p>
        <p><strong>Início do prazo de contestação:</strong> ${formatarDataBR(dataInicioContestacao)} (${getNomeDiaSemana(dataInicioContestacao)})</p>
        <p class="data-final"><strong>Fim do prazo de contestação (${diasContestacao} dias úteis):</strong> ${formatarDataBR(dataFimContestacao)} (${getNomeDiaSemana(dataFimContestacao)})</p>
    `;
    resultado.classList.add('show');
}

// 7. Suspensão/Decurso de Prazo
function calcularSuspensão() {
    const dataInput = document.getElementById('suspensão-data').value;
    const dias = parseInt(document.getElementById('suspensão-dias').value);
    
    if (!dataInput || !dias) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Ajustar data de entrada se for sábado, domingo, feriado ou ponto facultativo
    const dataInicial = parseDataBR(dataInput);
    if (!dataInicial) {
        alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
        return;
    }
    const dataEntrada = ajustarDataEntrada(dataInicial);
    
    // Contagem inicia no primeiro dia útil subsequente ao da movimentação no projudi
    const dataInicioSuspensão = iniciarContagem1DiaUtilApos(dataEntrada);
    
    // Contar dias úteis em contagem direta (pular dias)
    let dataFinal = new Date(dataInicioSuspensão);
    let diasContados = 0;
    
    while (diasContados < dias) {
        if (isDiaUtil(dataFinal)) {
            diasContados++;
        }
        if (diasContados < dias) {
            dataFinal.setDate(dataFinal.getDate() + 1);
        }
    }
    
    const resultado = document.getElementById('suspensão-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data da movimentação:</strong> ${formatarDataBR(dataEntrada)} (${getNomeDiaSemana(dataEntrada)})</p>
        <p><strong>Início da suspensão:</strong> ${formatarDataBR(dataInicioSuspensão)} (${getNomeDiaSemana(dataInicioSuspensão)})</p>
        <p class="data-final"><strong>Data final após suspensão de ${dias} dias úteis:</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
    `;
    resultado.classList.add('show');
}

// 8. Gerenciar Feriados
function adicionarFeriado() {
    const dataInput = document.getElementById('novo-feriado').value;
    if (!dataInput) {
        alert('Por favor, informe uma data.');
        return;
    }
    
    const data = parseDataBR(dataInput);
    if (!data) {
        alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
        return;
    }
    
    const dataISO = formatarDataISO(data);
    if (!feriadosSet.has(dataISO)) {
        feriados.push(dataISO);
        feriadosSet.add(dataISO);
        atualizarListaFeriados();
        document.getElementById('novo-feriado').value = '';
    } else {
        alert('Este feriado já está cadastrado.');
    }
}

function removerFeriado(dataStr) {
    if (confirm('Deseja realmente remover este feriado?')) {
        feriados = feriados.filter(f => f !== dataStr);
        feriadosSet.delete(dataStr);
        atualizarListaFeriados();
    }
}

function atualizarListaFeriados() {
    const lista = document.getElementById('lista-feriados');
    lista.innerHTML = '';
    
    // Ordenar feriados
    const feriadosOrdenados = [...feriados].sort();
    
    feriadosOrdenados.forEach(dataStr => {
        const data = new Date(dataStr + 'T00:00:00');
        const item = document.createElement('div');
        item.className = 'feriado-item';
        item.innerHTML = `
            <span>${formatarDataBR(data)} - ${getNomeDiaSemana(data)}</span>
            <button class="btn-remove" onclick="removerFeriado('${dataStr}')">Remover</button>
        `;
        lista.appendChild(item);
    });
}

// Sistema de abas e máscaras de data
document.addEventListener('DOMContentLoaded', function() {
    // Abas principais (dentro do container)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active de todos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Adiciona active no selecionado
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Abas externas (Manual e Suporte)
    const externalTabButtons = document.querySelectorAll('.external-tab-button');
    const externalTabContents = document.querySelectorAll('.external-tab-content');
    
    externalTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active de todos
            externalTabButtons.forEach(btn => btn.classList.remove('active'));
            externalTabContents.forEach(content => content.classList.remove('active'));
            
            // Adiciona active no selecionado
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Aplicar máscara de data em todos os inputs de data
    const inputsData = document.querySelectorAll('input[type="text"][placeholder*="dd/mm"]');
    inputsData.forEach(input => {
        input.addEventListener('input', function() {
            aplicarMascaraData(this);
        });
        
        input.addEventListener('blur', function() {
            // Valida ao sair do campo
            const valor = this.value.trim();
            if (valor && !parseDataBR(valor)) {
                alert('Por favor, informe uma data válida no formato dd/mm/aaaa.');
                this.focus();
            }
        });
    });
    
    // Inicializar lista de feriados
    atualizarListaFeriados();
});

