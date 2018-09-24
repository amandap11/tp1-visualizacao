// Definição do tamanho do elemento svg na tela
var width = 660,
    height = 600;

var svg1 = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var svg2 = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var g1 = svg1.append("g");
var g2 = svg2.append("g");

// Escolha da projeção mercator e definição do centro do mapa
var projection = d3.geo.mercator()
  .scale(650)
  .center([-52, -15])
  .translate([width / 2, height / 2]);

// Variável utilizada para desenhar o mapa de acordo com a projeção escolhida
var path = d3.geo.path()
  .projection(projection);

// Carrega os dados
d3_queue.queue()
    .defer(d3.json, "./br-states.json")
    .await(ready);

function ready(error, shp) {
  if (error) throw error;

  // Extração dos estados e dos contornos dos estados
  var states = topojson.feature(shp, shp.objects.estados);
  var states_contour = topojson.mesh(shp, shp.objects.estados);

  // Desenhando e colorindo os estados - 1 turno
  g1.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let partido = escolhePartidoMaisVotado(d.id, 1);
      return color(partido);
    }).attr("d", path);

  // Desenhando e colorindo os estados - 2 turno
  g2.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let partido = escolhePartidoMaisVotado(d.id, 2);
      return color(partido);
    }).attr("d", path);
}

function escolhePartidoMaisVotado(estado, turno){
  let votos = 0;
  let partidoMaisVotado = '';

  for (let i = 0; i < presidents.length; i++){
    for (let j = 0; j < presidents[i].value.length; j++){
      if (presidents[i].value[j].cat_state == estado
        && presidents[i].value[j].num_turn == turno){
        if (presidents[i].value[j].num_votes > votos){
          votos = presidents[i].value[j].num_votes;
          partidoMaisVotado = presidents[i].value[j].cat_party;
        }
      }
    }
  }

  return partidoMaisVotado;
}

// Definição das cores
var color = function (partido){
  let cor;
  switch(partido){
    case 'PSTU':
      cor = '#E8DA1C';
      break;
    case 'PRTB':
      cor = '#22660C';
      break;
    case 'PCB':
      cor = '#F37F0A';
      break;
    case 'PSOL':
      cor = '#E0079E';
      break;
    case 'PV':
      cor = '#2DA929';
      break;
    case 'PSC':
      cor = '#2DF429';
      break;
    case 'PSDC':
      cor = '#B0990F';
      break;
    case 'PCO':
      cor = '#73110B';
      break;
    case 'PT':
      cor = '#FF0000';
      break;
    case 'PSDB':
      cor = '#0F1973';
      break;
    case 'PSB':
      cor = '#15B096';
      break;
    default:
      cor = '#FFFFFF';
      break;
  }
  return cor;
}
