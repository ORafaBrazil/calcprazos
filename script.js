// Lista de feriados e pontos facultativos (2024 e 2025)
let feriados = [
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

