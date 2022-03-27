
function make_tree(){

    tree_datas = liquid_make_data();

    var base_chart = d3.select('#chart')

    tree = base_chart
        .selectAll('div')
        .data(tree_datas)
        .enter()
        .append('div')
        .classed('tree',true)
        .style('height',
            function (track_struct){
                return 25*(track_struct.maxy+1)+'px'})

    icons = tree.selectChildren('div')
        .data(function(track_struct){
            return track_struct.data;})
        .enter()
        .append('div')
        .style('left',function(d){
            if (d.nposts_share_level != 1){
                xscale = d3.scaleLinear().domain([0,d.nposts_share_level-1]).range([10,90])
                 loc = xscale(d.xindex)+"%";}
            else loc = "50%";
            return loc})
        .style('top',function(d){ 
            var maxy = this.parentElement.__data__.maxy;
            yscale = d3.scaleLinear().domain([1,maxy]).range([0,25*(maxy)])
            var loc = yscale(d.level)+'px'
            return loc})
        .classed('tree_icon',true)
        .append('p')
        .html(function (struct,i){
            all_html = ""
            all_html += struct.html_icon;
            return all_html})
        .style('display','table-cell')
        .style('width','inherit')
        .style('height','inherit')
        .style('vertical-align','middle')
        .style('text-align','middle')
        .style('transform',function (d){
            return 'translateY('+(-25*d.index)+'px)'})

    console.log(icons)
    
            
    /*
    maxy = Math.max(...ys);
    yscale = d3.scaleLinear().domain([1,maxy]).range([0,25*(maxy)])
    
    //xaxis = d3.axisBottom(xscale)
    //yaxis = d3.axisLeft(yscale)

    // this is going to be janky

        x = xmaxs[i] == 1 ? "50" : xscale(xi);
        //foo.append('circle')
            //.attr('cx', x+'%')
            //.attr('cy',yscale(ys[i])+"%")
            //.attr('r',10)
        foo.append('div')
            .classed('tree_icon',true)
            .style('left',x+'%')
            .style('top',yscale(ys[i])+'px')
            .style(
                'transform',
                'translateY('+(-25*i)+'px)')
            .append('p')
            .html(ys[i])
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
        */
}

/*

.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html(formatTime(d.date) + "<br/>"  + d.close)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
            })					
        .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });

*/