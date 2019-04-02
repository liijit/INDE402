const thermo = d3.select("thermometer");
const svg = thermo.append("svg")
			.attr('width', 100)
			.attr('height', 100);
svg.append('rect')
   .attr('x', 50)
   .attr('y', 50)
   .attr('width', 200)
   .attr('height', 100)
   .attr('fill', 'green');
