// Definição do tamanho do elemento svg na tela
var width = 960,
    height = 600;
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Definição das cores
var color = d3.scale.linear().domain([1, 20]).range(['blue', 'red']);

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

  // Desenhando e colorindo os estados
  g.attr("class", "state")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .style('fill', function(d){
      return color(d.properties.nome.replace(/\$+/g, '').length);
    }).attr("d", path);
}

var g = svg.append("g");
/*var zoom = d3.behavior.zoom()
  .translate([0, 0])
  .scale(1)
  .scaleExtent([1, 8])
  .on("zoom", zoomed);
svg.call(zoom) // delete this line to disable free zooming
  .call(zoom.event);


// What to do when zooming
function zoomed() {
  g.style("stroke-width", 1.5 / d3.event.scale + "px");
  g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}
d3.select(self.frameElement).style("height", height + "px");*/
