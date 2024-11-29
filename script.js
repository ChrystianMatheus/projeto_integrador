document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const responsaveis = {
        "responsavel1": { aluno: "João Pedro Pereira da Silva", comportamento: "Comportamento exemplar, sempre atento às aulas.", notas: "Notas: 9.5 1° bimestre, 9.0 2° bimestre, 9.8 3° bimestre.", faltas: "Faltas: 2", desempenho: "Desempenho: Excelente" },
        "responsavel2": { aluno: "Maria Clara Souza", comportamento: "Muito participativa, mas precisa melhorar a atenção.", notas: "Notas: 8.0 1° bimestre, 7.5 2° bimestre, 7.8 3° bimestre.", faltas: "Faltas: 4", desempenho: "Desempenho: Bom" },
        "responsavel3": { aluno: "Carlos Eduardo Gomes", comportamento: "Excelente aluno, sempre ajuda os colegas.", notas: "Notas: 10.0 1° bimestre, 9.8 2° bimestre, 10.0 3° bimestre.", faltas: "Faltas: 1", desempenho: "Desempenho: Excelente" },

        "responsavel30": { aluno: "Marcelo Costa", comportamento: "Precisa de mais foco, mas tem grande potencial.", notas: "Notas: 6.8 1° bimestre, 7.0 2° bimestre, 6.9 3° bimestre.", faltas: "Faltas: 8", desempenho: "Desempenho: Regular" }
    };

    const randomResponsavelKey = Object.keys(responsaveis)[Math.floor(Math.random() * Object.keys(responsaveis).length)];
    const responsavel = responsaveis[randomResponsavelKey];

    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.dashboard-container').style.display = 'block';

    const alunoInfo = `
        <h3>Aluno: ${responsavel.aluno}</h3>
        <p>Comportamento: ${responsavel.comportamento}</p>
        <p>${responsavel.notas}</p>
        <p>${responsavel.faltas}</p>
        <p>${responsavel.desempenho}</p>
    `;
    document.getElementById('aluno-info').innerHTML = alunoInfo;

    document.getElementById('logout-button').addEventListener('click', function() {
        document.querySelector('.login-container').style.display = 'block';
        document.querySelector('.dashboard-container').style.display = 'none';

        document.getElementById('login-form').reset();
    });
});
