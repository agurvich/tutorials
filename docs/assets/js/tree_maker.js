

<!-- loop through posts and compile a list of all the tracks -->





//select chart div
var base_chart = d3.select('#chart')

var tree;
var row_i;
var xaxis,yaxis;
var xscale,yscale;

var ys,maxy;
var old_level,level;
var xs;
var i,xi;


    



    tree = base_chart
        .append('div')
        .classed('tree',true)
    
            
    ys = [01,01,04,06,]
    maxy = Math.max(...ys);
    yscale = d3.scaleLinear().domain([1,maxy]).range([0,25*(maxy)])
    //xaxis = d3.axisBottom(xscale)
    //yaxis = d3.axisLeft(yscale)
    tree.style('height',25*(maxy+1)+'px')

    i=0;
    xi=0;
    old_level=1;
    // this is going to be janky
    xmaxs = ys.map(function (value){
        return ys.filter(function (sub_value){
            return sub_value == value;
        }).length})

    //foo = tree.append('div')
        //.style('width','inherit')
    foo = tree
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    

    



    tree = base_chart
        .append('div')
        .classed('tree',true)
    
            
    ys = [01,01,04,06,]
    maxy = Math.max(...ys);
    yscale = d3.scaleLinear().domain([1,maxy]).range([0,25*(maxy)])
    //xaxis = d3.axisBottom(xscale)
    //yaxis = d3.axisLeft(yscale)
    tree.style('height',25*(maxy+1)+'px')

    i=0;
    xi=0;
    old_level=1;
    // this is going to be janky
    xmaxs = ys.map(function (value){
        return ys.filter(function (sub_value){
            return sub_value == value;
        }).length})

    //foo = tree.append('div')
        //.style('width','inherit')
    foo = tree
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    

    



    tree = base_chart
        .append('div')
        .classed('tree',true)
    
            
    ys = [01,01,01,02,02,02,03,04,]
    maxy = Math.max(...ys);
    yscale = d3.scaleLinear().domain([1,maxy]).range([0,25*(maxy)])
    //xaxis = d3.axisBottom(xscale)
    //yaxis = d3.axisLeft(yscale)
    tree.style('height',25*(maxy+1)+'px')

    i=0;
    xi=0;
    old_level=1;
    // this is going to be janky
    xmaxs = ys.map(function (value){
        return ys.filter(function (sub_value){
            return sub_value == value;
        }).length})

    //foo = tree.append('div')
        //.style('width','inherit')
    foo = tree
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-book post-research"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-brands fa-python post-python"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-brands fa-python post-python"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-brands fa-python post-python"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    

    



    tree = base_chart
        .append('div')
        .classed('tree',true)
    
            
    ys = [01,02,03,04,]
    maxy = Math.max(...ys);
    yscale = d3.scaleLinear().domain([1,maxy]).range([0,25*(maxy)])
    //xaxis = d3.axisBottom(xscale)
    //yaxis = d3.axisLeft(yscale)
    tree.style('height',25*(maxy+1)+'px')

    i=0;
    xi=0;
    old_level=1;
    // this is going to be janky
    xmaxs = ys.map(function (value){
        return ys.filter(function (sub_value){
            return sub_value == value;
        }).length})

    //foo = tree.append('div')
        //.style('width','inherit')
    foo = tree
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-globe post-web"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-globe post-web"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-book post-research"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-globe post-web"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    

    



    tree = base_chart
        .append('div')
        .classed('tree',true)
    
            
    ys = [01,01,01,01,02,]
    maxy = Math.max(...ys);
    yscale = d3.scaleLinear().domain([1,maxy]).range([0,25*(maxy)])
    //xaxis = d3.axisBottom(xscale)
    //yaxis = d3.axisLeft(yscale)
    tree.style('height',25*(maxy+1)+'px')

    i=0;
    xi=0;
    old_level=1;
    // this is going to be janky
    xmaxs = ys.map(function (value){
        return ys.filter(function (sub_value){
            return sub_value == value;
        }).length})

    //foo = tree.append('div')
        //.style('width','inherit')
    foo = tree
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-book post-research"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-book post-research"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    
        if (ys[i] != old_level){
            xi = 0;
            old_level=ys[i];
            //foo = tree.append('div').style('width','inherit')
        }
        xscale = d3.scaleLinear().domain([0,xmaxs[i]-1]).range([10,90])
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
            //.html(ys[i])
            .html(
    '<i class="fa-solid fa-terminal post-terminal"></i>'
)
            .style('display','table-cell')
            .style('width','inherit')
            .style('height','inherit')
            .style('vertical-align','middle')
            .style('text-align','middle')
        i+=1;
        xi+=1;
    

/*
*/