// Definição do tamanho do elemento svg na tela
let width = 240,
    height = 260,
    scale = 275,
    margin = {top: 5, left: 5};

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

let svg1 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg2 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg3 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg4 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg5 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg6 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg7 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg8 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg9 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg10 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

let svg11 = d3.select("body").append("svg")
            .attr("width", width + margin.left)
            .attr("height", height + margin.top);

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

  // Desenhando e colorindo os estados
  g1.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[0]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g1.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g2.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[1]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g2.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g3.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[2]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g3.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g4.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[3]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g4.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g5.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[4]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g5.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g6.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[5]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g6.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g7.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[6]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g7.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g8.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[7]);
      // console.log(d.id + ": " + votos);
      return color(votos);
    }).attr("d", path);

  g8.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g9.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[8]);
      //console.log(votos + ": " + color(votos));
      return color(votos);
    }).attr("d", path);

  g9.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g10.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      let votos = calculaPercentualVotosNoEstado(d.id, presidents[9]);
      return color(votos);
    }).attr("d", path);

  g10.append("path")
   .datum(states_contour)
   .attr("d", path)
   .attr("class", "state_contour");

  g11.attr("class", "state")
   .selectAll("path")
   .data(states.features)
   .enter()
   .append("path")
   .style('fill', function(d){
     let votos = calculaPercentualVotosNoEstado(d.id, presidents[9]);
     return color(votos);
   }).attr("d", path);

  g11.append("path")
  .datum(states_contour)
  .attr("d", path)
  .attr("class", "state_contour");

}

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
  //console.log("%: " + percentualDeVotosNoEstado + " Cor: " + color(percentualDeVotosNoEstado));
  return percentualDeVotosNoEstado;
}

// Definição das cores
let color = d3.scale.linear().domain([1, 50]).range(['#FFFFFF', '#000000']);
