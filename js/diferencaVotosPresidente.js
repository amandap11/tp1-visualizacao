let candidatos = [];
let nomesCandidatos = [];
let votosTurno1 = ['Primeiro Turno'];
let votosTurno2 = ['Segundo Turno'];
let diferencaVotos = ['Diferença entre os turnos'];

// Percorre a lista de presidentes
for (let i = 0; i < presidents.length; i++){
  let nomeCandidato = presidents[i].key;
  let totalTurno1 = 0;
  let totalTurno2 = 0;
  let dif = 0;

  // Para cada estado
  for (let j = 0; j < presidents[i].value.length; j++){
    // Contabiliza o total de votos do primeiro turno
    if (presidents[i].value[j].num_turn == 1){
      totalTurno1 += Number(presidents[i].value[j].num_votes);
    }
    // Contabiliza o total de votos do segundo turno
    else if (presidents[i].value[j].num_turn == 2){
      totalTurno2 += Number(presidents[i].value[j].num_votes);
    }
  }

  dif = totalTurno2 - totalTurno1;

  let candidato = {
    nome: nomeCandidato,
    turno1: totalTurno1,
    turno2: totalTurno2,
    diferenca: dif
  }

  candidatos.push(candidato);

}

// Ordena os candidatos pela quantidade de votos no primeiro turno
candidatos.sort(function (a, b) {
  if (a.turno1 < b.turno1) { return 1; }
  if (a.turno1 > b.turno1) { return -1; }
  return 0;
});

// Armazena os candidatos que receberam algum voto no segundo turno
// ou seja, candidatos que participaram do segundo turno
for (let i = 0; i < candidatos.length; i++){
  if (candidatos[i].turno2 > 0){
    nomesCandidatos.push(candidatos[i].nome);
    votosTurno1.push(candidatos[i].turno1);
    votosTurno2.push(candidatos[i].turno2);
    diferencaVotos.push(candidatos[i].diferenca);
  }
}

// Desenha a visualização
let chart1 = c3.generate({
  // Determina onde desenhar
  bindto: '#diferencaVotos',
  // Define os dados que serão exibidos
  data: {
    // Colunas / séries de dados: [nomeDaSerie, valor1, valor2, ..., valorN]
    columns: [
      votosTurno1,
      votosTurno2,
      diferencaVotos
    ],
    // Tipo de série (nomeDaSerie: tipo)
    types: {
      'Diferença entre os turnos': 'bar',
      'Primeiro Turno': 'scatter',
      'Segundo Turno': 'scatter'
    }
  },
  // Define as cores
  color: {
    pattern: ['#A4A4A4', '#2E2E2E', '#088A29']
  },
  // Define o tamanho dos pontos
  point: {
    r: 5
  },
  // Define se a legenda deve ser exibida e onde deve ser posicionada
  legend: {
    show: true,
    position: 'right'
  },
  // Informações sobre os eixos
  axis : {
    // O eixo x terá o nome dos candidatos como categorias e os nomes dos
    // candidatos podem estar quebrados em mais de uma linha
    x: {
      type: 'category',
      categories: nomesCandidatos,
      tick: {
        multiline: true
      },
      height: 80
    },
    y: {
      // Foi escolhido um texto e uma posição para o label do eixo y
      label: {
        text: 'Quantidade de votos (em milhões)',
        position: 'outer-middle'
      },
      // Definição da escala do eixo y
      tick: {
        format: d3.scale.linear()
                  .domain([0, 60000000])
                  .range([0, 60])
      }
    }
  },
  // Definição da largura das barras (de diferença de votos)
  bar: {
    width: 20
  },
  // Customização da informação exibida ao passar o mouse sobre a visualização
  tooltip: {
    show: true,
    format: {
      value: function (value) {
        let format = d3.format(',');
        return format(value);
      }
    }
  }
});
