const svg = d3.select('body').append('svg')
              .attr('width',1500)
              .attr('height',1500)


const height_male = svg.append('g')
                       .attr('transform','translate(500,300)');
height_male.append('rect')
           .attr('x',-10).attr('y',-50).attr('rx',20).attr('ry',20).style('stroke','gray').style('stroke-width','5').style('fill','lavenderblush')
           .attr('width',210)
           .attr('height',210);

height_male.append('line')
           .attr('x1',0).attr('x2',173.5).style('stroke','DarkCyan');
height_male.append('circle').style('fill','DarkTurquoise').attr('cx',173.5).attr('cy',0).attr('r',3);
height_male.append('text').attr('x',0).attr('y',20).text("台灣男生平均身高173.5 cm").style('fill','DarkCyan');


const height_female = svg.append('g')
                         .attr('transform','translate(500,400)');
height_female.append('line')
           .attr('x1',0).attr('x2',161.5).style('stroke','tomato');
height_female.append('circle').style('fill','pink').attr('cx',161.5).attr('cy',0).attr('r',3);
height_female.append('text').attr('x',0).attr('y',20).text("台灣女生平均身高161.5 cm").style('fill','tomato');



const age_male = svg.append('g')
                         .attr('transform','translate(800,300)');

age_male.append('rect')
        .attr('x',-10).attr('y',-50).attr('rx',20).style('stroke','CadetBlue').style('stroke-width','5').style('fill','antiquewhite')
        .attr('width',210)
        .attr('height',210);
age_male.append('line')
           .attr('x1',0).attr('x2',78.1).style('stroke','orange');
age_male.append('circle').style('fill','SandyBrown').attr('cx',78.1).attr('cy',0).attr('r',3);
age_male.append('text').attr('x',0).attr('y',20).text("台灣男生平均壽命78.1歲").style('fill','orange');


const age_female = svg.append('g')
                         .attr('transform','translate(800,400)');
age_female.append('line')
           .attr('x1',0).attr('x2',84.7).style('stroke','OliveDrab');
age_female.append('circle').style('fill','Teal').attr('cx',84.7).attr('cy',0).attr('r',3);
age_female.append('text').attr('x',0).attr('y',20).text("台灣女生平均壽命84.7歲").style('fill','OliveDrab');

