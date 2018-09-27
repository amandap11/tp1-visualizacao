let candidatos = [];
let nomesCandidatos = [];
let votosTurno1 = ['Turno 1'];
let votosTurno2 = ['Turno 2'];
let diferencaVotos = ['Diferença entre os turnos'];

for (let i = 0; i < presidents.length; i++){
  let nomeCandidato = presidents[i].key;
  let totalTurno1 = 0;
  let totalTurno2 = 0;
  let dif = 0;

  for (let j = 0; j < presidents[i].value.length; j++){
    if (presidents[i].value[j].num_turn == 1){
      totalTurno1 += Number(presidents[i].value[j].num_votes);
    }
    else if (presidents[i].value[j].num_turn == 2){
      totalTurno2 += Number(presidents[i].value[j].num_votes);
    }
  }

  if (totalTurno2 > 0){
    participou2Turno = true;
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

candidatos.sort(function (a, b) {
  if (a.turno1 < b.turno1) { return 1; }
  if (a.turno1 > b.turno1) { return -1; }
  return 0;
});

for (let i = 0; i < candidatos.length; i++){
  if (candidatos[i].diferenca > 0){
    nomesCandidatos.push(candidatos[i].nome);
    votosTurno1.push(candidatos[i].turno1);
    votosTurno2.push(candidatos[i].turno2);
    diferencaVotos.push(candidatos[i].diferenca);
  }
}

let chart1 = c3.generate({
  bindto: '#diferencaVotos',
  data: {
    columns: [
      votosTurno1,
      votosTurno2,
      diferencaVotos
    ],
    types: {
      'Diferença entre os turnos': 'bar',
      'Turno 1': 'scatter',
      'Turno 2': 'scatter'
    }
  },
  legend: {
    show: true,
    position: 'right'
  },
  axis : {
    x: {
      type: 'category',
      categories: nomesCandidatos,
      tick: {
        multiline: true
      },
      height: 80
    },
    y: {
      label: {
        text: 'Quantidade de votos (em milhões)',
        position: 'outer-middle'
      },
      tick: {
        format: d3.scale.linear()
                  .domain([0, 60000000])
                  .range([0, 60])
      }
    }
  },
  bar: {
    width: 20
  },
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
