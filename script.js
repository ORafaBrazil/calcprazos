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

// Função para contar dias úteis entre duas datas (para suspensão)
function contarDiasUteis(dataInicial, quantidadeDias) {
    let data = new Date(dataInicial);
    let diasContados = 0;
    
    while (diasContados < quantidadeDias) {
        data.setDate(data.getDate() + 1);
        if (isDiaUtil(data)) {
            diasContados++;
        }
    }
    
    return data;
}

// Função para iniciar contagem 2 dias após a data (regra do processo civil)
function iniciarContagem2DiasApos(dataInicial) {
    let data = new Date(dataInicial);
    let diasPulados = 0;
    
    while (diasPulados < 2) {
        data.setDate(data.getDate() + 1);
        if (isDiaUtil(data)) {
            diasPulados++;
        }
    }
    
    return data;
}

// Função para iniciar contagem 3 dias após (disponibilização + publicação + subsequente)
function iniciarContagem3DiasApos(dataInicial) {
    let data = new Date(dataInicial);
    let diasPulados = 0;
    
    while (diasPulados < 3) {
        data.setDate(data.getDate() + 1);
        if (isDiaUtil(data)) {
            diasPulados++;
        }
    }
    
    return data;
}

// 1. Purgação da Mora
function calcularPurgação() {
    const dataInput = document.getElementById('purgação-data').value;
    if (!dataInput) {
        alert('Por favor, informe a data da juntada do mandado cumprido.');
        return;
    }
    
    const dataInicial = new Date(dataInput + 'T00:00:00');
    // Purgação começa imediatamente (sem os 2 dias)
    const dataFinal = adicionarDiasUteis(dataInicial, 5);
    
    const resultado = document.getElementById('purgação-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data da juntada:</strong> ${formatarDataBR(dataInicial)} (${getNomeDiaSemana(dataInicial)})</p>
        <p class="data-final"><strong>Prazo final (5 dias úteis):</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
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
    
    const dataInicial = new Date(dataInput + 'T00:00:00');
    // Prazo 1: inicia 2 dias após, depois conta os dias úteis
    const dataInicioPrazo1 = iniciarContagem2DiasApos(dataInicial);
    const dataFimPrazo1 = adicionarDiasUteis(dataInicioPrazo1, prazo1);
    // Prazo 2: sucessivo ao prazo 1
    const dataFinal = adicionarDiasUteis(dataFimPrazo1, prazo2);
    
    const resultado = document.getElementById('sucessivos-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data de entrada:</strong> ${formatarDataBR(dataInicial)} (${getNomeDiaSemana(dataInicial)})</p>
        <p><strong>Início do Prazo 1:</strong> ${formatarDataBR(dataInicioPrazo1)} (${getNomeDiaSemana(dataInicioPrazo1)})</p>
        <p><strong>Fim do Prazo 1 (${prazo1} dias úteis):</strong> ${formatarDataBR(dataFimPrazo1)} (${getNomeDiaSemana(dataFimPrazo1)})</p>
        <p class="data-final"><strong>Prazo final (Prazo 1 + Prazo 2 = ${prazo1 + prazo2} dias úteis):</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
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
    
    const dataInicial = new Date(dataInput + 'T00:00:00');
    const dataInicioContagem = iniciarContagem2DiasApos(dataInicial);
    const dataFinal = adicionarDiasUteis(dataInicioContagem, 15);
    
    const resultado = document.getElementById('trânsito-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data da movimentação:</strong> ${formatarDataBR(dataInicial)} (${getNomeDiaSemana(dataInicial)})</p>
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
    
    const dataInicial = new Date(dataInput + 'T00:00:00');
    // 1 dia disponibilização + 1 dia publicação + 1 dia subsequente = 3 dias úteis
    const dataInicioContagem = iniciarContagem3DiasApos(dataInicial);
    const dataFinal = adicionarDiasUteis(dataInicioContagem, dias);
    
    const resultado = document.getElementById('contagem-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data registrada no Projudi:</strong> ${formatarDataBR(dataInicial)} (${getNomeDiaSemana(dataInicial)})</p>
        <p><strong>Início da contagem (após disponibilização + publicação):</strong> ${formatarDataBR(dataInicioContagem)} (${getNomeDiaSemana(dataInicioContagem)})</p>
        <p class="data-final"><strong>Prazo final (${dias} dias úteis):</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
    `;
    resultado.classList.add('show');
}

// 6. Suspensão
function calcularSuspensão() {
    const dataInput = document.getElementById('suspensão-data').value;
    const dias = parseInt(document.getElementById('suspensão-dias').value);
    
    if (!dataInput || !dias) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const dataInicial = new Date(dataInput + 'T00:00:00');
    const dataFinal = contarDiasUteis(dataInicial, dias);
    
    const resultado = document.getElementById('suspensão-resultado');
    resultado.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p><strong>Data inicial:</strong> ${formatarDataBR(dataInicial)} (${getNomeDiaSemana(dataInicial)})</p>
        <p class="data-final"><strong>Data final após suspensão de ${dias} dias úteis:</strong> ${formatarDataBR(dataFinal)} (${getNomeDiaSemana(dataFinal)})</p>
    `;
    resultado.classList.add('show');
}

// 7. Gerenciar Feriados
function adicionarFeriado() {
    const dataInput = document.getElementById('novo-feriado').value;
    if (!dataInput) {
        alert('Por favor, selecione uma data.');
        return;
    }
    
    if (!feriadosSet.has(dataInput)) {
        feriados.push(dataInput);
        feriadosSet.add(dataInput);
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

// Sistema de abas
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Inicializar lista de feriados
    atualizarListaFeriados();
});

