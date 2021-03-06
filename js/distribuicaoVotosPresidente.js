// Definição do tamanho do elemento svg na tela
let width = 190,
    height = 190,
    scale = 180;

// Escolha da projeção mercator e definição do centro do mapa
let projection = d3.geo.mercator()
  .scale(scale)
  .center([-52, -15])
  .translate([width / 2, height / 2]);

// Variável utilizada para desenhar o mapa de acordo com a projeção escolhida
let path = d3.geo.path()
  .projection(projection);

// Carrega os dados
d3_queue.queue()
    .defer(d3.json, "data/br-states.json")
    .await(ready);

// Cria os elementos svg nas posições indicadas
let svg1 = d3.select("#svg1").append("svg")
            .attr("height", height);

let svg2 = d3.select("#svg2").append("svg")
            .attr("height", height);

let svg3 = d3.select("#svg3").append("svg")
            .attr("height", height);

let svg4 = d3.select("#svg4").append("svg")
            .attr("height", height);

let svg5 = d3.select("#svg5").append("svg")
            .attr("height", height);

let svg6 = d3.select("#svg6").append("svg")
            .attr("height", height);

let svg7 = d3.select("#svg7").append("svg")
            .attr("height", height);

let svg8 = d3.select("#svg8").append("svg")
            .attr("height", height);

let svg9 = d3.select("#svg9").append("svg")
            .attr("height", height);

let svg10 = d3.select("#svg10").append("svg")
            .attr("height", height);

let svg11 = d3.select("#svg11").append("svg")
            .attr("height", height);

let g1 = svg1.append("g");
let g2 = svg2.append("g");
let g3 = svg3.append("g");
let g4 = svg4.append("g");
let g5 = svg5.append("g");
let g6 = svg6.append("g");
let g7 = svg7.append("g");
let g8 = svg8.append("g");
let g9 = svg9.append("g");
let g10 = svg10.append("g");
let g11 = svg11.append("g");

function ready(error, shp) {
  if (error) throw error;

  // Extração dos estados e dos contornos dos estados
  let states = topojson.feature(shp, shp.objects.estados);
  let states_contour = topojson.mesh(shp, shp.objects.estados);

  // Desenha e colore os estados - Presidenciavel 1
  g1.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[0]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 1
  g1.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 2
  g2.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[1]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 2
  g2.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 3
  g3.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[2]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 3
  g3.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 4
  g4.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[3]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 4
  g4.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 5
  g5.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[4]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 5
  g5.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 6
  g6.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[5]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 6
  g6.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 7
  g7.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[6]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 7
  g7.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 8
  g8.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[7]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 8
  g8.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 9
  g9.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[8]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 9
  g9.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 10
  g10.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[9]);
      // calcula a cor do estado de acordo com a concentração de votos do
      // candidato no estado atual
      return color(votos);
    }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 10
  g10.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  // Desenha e colore os estados - Presidenciavel 11
  g11.attr("class", "state")
   .selectAll("path")
   .data(states.features)
   .enter()
   .append("path")
   .style('fill', function(d){
     let votos = calculaPercentualVotosNoEstado(d.id, presidents[10]);
     // calcula a cor do estado de acordo com a concentração de votos do
     // candidato no estado atual
     return color(votos);
   }).attr("d", path);

  // Desenha o contorno dos estados - Presidenciável 11
  g11.append("path")
  .datum(states_contour)
  .attr("d", path)
  .attr("class", "state_contour");

}

// Função que calcula o percentual de votos de cada candidato em cada estado
function calculaPercentualVotosNoEstado(estado, candidato){

  let turno = 1;
  let totalVotos = 0;
  let totalVotosNoEstado = 0;
  let percentualDeVotosNoEstado = 0;

  for (let i = 0; i < candidato.value.length; i++){
    if (candidato.value[i].num_turn == 1){
        totalVotos += Number(candidato.value[i].num_votes);
        if (candidato.value[i].cat_state == estado){
          totalVotosNoEstado = Number(candidato.value[i].num_votes);
        }
    }
  }

  percentualDeVotosNoEstado = (totalVotosNoEstado / totalVotos) * 100;
  return percentualDeVotosNoEstado;
}

// Definição das cores
let color = d3.scale.linear().domain([1, 50]).range(['#FFFFFF', '#000000']);
