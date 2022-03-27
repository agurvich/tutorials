

<!-- loop through posts and compile a list of all the tracks -->





//select chart div
function liquid_make_data(){
    var data = [];
    var struct;
    var track_struct;

    // because this is a liquid file, you have to comment out the js comments. 
    // loop through each track in liquid 
    
        track_struct = {};
        track_struct['track'] = "Using an HPC Cluster";
        track_struct['data'] = []
        // add prereqs to posts in this track 
        



        // create arrays for each component of post that we want to store
        //  has to be separate liquid loops because the { for } loop will be replaced
        //  with the _literal_ (in the technical sense) content so we add commas
        //  between the numbers/strings/whatever 
        ys = [01,01,04,06,]
        titles = ["Using bash","Connecting by ssh","Jupyter notebooks","Running Jupyter on a cluster",]
        urls = ["https://alexbgurvi.ch/tutorials/using-bash/","https://alexbgurvi.ch/tutorials/ssh/","https://alexbgurvi.ch/tutorials/jupyter-notebooks/","https://alexbgurvi.ch/tutorials/jupyter-cluster/",]
        post_html_icons = [
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
, ]
        // find the number of posts on each post's level
        nposts_share_level = ys.map(function (value){return ys.filter(function (sub_value){return sub_value == value;}).length})
        // index each post on a level
        old_level = 1;
        xi = 0;
        xindices = []
        for (i=0; i < ys.length; i++){
            // if this y is on a new level let's start over counting
            if (ys[i] != old_level){
                old_level = ys[i];
                xi=0;
            }
            xindices.push(xi);
            xi++;
        }
        
        track_struct['maxy'] = d3.max(ys);
        // unpack the arrays into individual structs and push them 
        ys.forEach(function (y,i){
            struct = {}
            struct['index'] = i
            struct['level'] = y
            struct['title'] = titles[i]
            struct['url'] = urls[i]
            struct['html_icon'] = post_html_icons[i]
            struct['nposts_share_level'] = nposts_share_level[i]
            struct['xindex'] = xindices[i]
            track_struct['data'].push(struct);
        })
        data.push(track_struct)
    
        track_struct = {};
        track_struct['track'] = "The zen of Git";
        track_struct['data'] = []
        // add prereqs to posts in this track 
        



        // create arrays for each component of post that we want to store
        //  has to be separate liquid loops because the { for } loop will be replaced
        //  with the _literal_ (in the technical sense) content so we add commas
        //  between the numbers/strings/whatever 
        ys = [01,01,04,06,]
        titles = ["Using bash","Version control with git","Intermediate git skills","Advanced git usage",]
        urls = ["https://alexbgurvi.ch/tutorials/using-bash/","https://alexbgurvi.ch/tutorials/git-basics/","https://alexbgurvi.ch/tutorials/git-intermediate/","https://alexbgurvi.ch/tutorials/git-advanced/",]
        post_html_icons = [
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
, ]
        // find the number of posts on each post's level
        nposts_share_level = ys.map(function (value){return ys.filter(function (sub_value){return sub_value == value;}).length})
        // index each post on a level
        old_level = 1;
        xi = 0;
        xindices = []
        for (i=0; i < ys.length; i++){
            // if this y is on a new level let's start over counting
            if (ys[i] != old_level){
                old_level = ys[i];
                xi=0;
            }
            xindices.push(xi);
            xi++;
        }
        
        track_struct['maxy'] = d3.max(ys);
        // unpack the arrays into individual structs and push them 
        ys.forEach(function (y,i){
            struct = {}
            struct['index'] = i
            struct['level'] = y
            struct['title'] = titles[i]
            struct['url'] = urls[i]
            struct['html_icon'] = post_html_icons[i]
            struct['nposts_share_level'] = nposts_share_level[i]
            struct['xindex'] = xindices[i]
            track_struct['data'].push(struct);
        })
        data.push(track_struct)
    
        track_struct = {};
        track_struct['track'] = "Scientific Computing";
        track_struct['data'] = []
        // add prereqs to posts in this track 
        



        // create arrays for each component of post that we want to store
        //  has to be separate liquid loops because the { for } loop will be replaced
        //  with the _literal_ (in the technical sense) content so we add commas
        //  between the numbers/strings/whatever 
        ys = [01,01,01,02,02,02,03,04,]
        titles = ["Using bash","Creating a working software environment","Running Python","(Ana)conda: Python's best friend","Installing Python packages","numpy: the numerical Python library","Matplotlib: a pixel-perfect plotting library","Jupyter notebooks",]
        urls = ["https://alexbgurvi.ch/tutorials/using-bash/","https://alexbgurvi.ch/tutorials/create-environment/","https://alexbgurvi.ch/tutorials/using-python/","https://alexbgurvi.ch/tutorials/conda/","https://alexbgurvi.ch/tutorials/python-packages/","https://alexbgurvi.ch/tutorials/numpy-basics/","https://alexbgurvi.ch/tutorials/matplotlib/","https://alexbgurvi.ch/tutorials/jupyter-notebooks/",]
        post_html_icons = [
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-book post-research"></i>'
,
    '<i class="fa-brands fa-python post-python"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-brands fa-python post-python"></i>'
,
    '<i class="fa-brands fa-python post-python"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
, ]
        // find the number of posts on each post's level
        nposts_share_level = ys.map(function (value){return ys.filter(function (sub_value){return sub_value == value;}).length})
        // index each post on a level
        old_level = 1;
        xi = 0;
        xindices = []
        for (i=0; i < ys.length; i++){
            // if this y is on a new level let's start over counting
            if (ys[i] != old_level){
                old_level = ys[i];
                xi=0;
            }
            xindices.push(xi);
            xi++;
        }
        
        track_struct['maxy'] = d3.max(ys);
        // unpack the arrays into individual structs and push them 
        ys.forEach(function (y,i){
            struct = {}
            struct['index'] = i
            struct['level'] = y
            struct['title'] = titles[i]
            struct['url'] = urls[i]
            struct['html_icon'] = post_html_icons[i]
            struct['nposts_share_level'] = nposts_share_level[i]
            struct['xindex'] = xindices[i]
            track_struct['data'].push(struct);
        })
        data.push(track_struct)
    
        track_struct = {};
        track_struct['track'] = "Making a website";
        track_struct['data'] = []
        // add prereqs to posts in this track 
        



        // create arrays for each component of post that we want to store
        //  has to be separate liquid loops because the { for } loop will be replaced
        //  with the _literal_ (in the technical sense) content so we add commas
        //  between the numbers/strings/whatever 
        ys = [01,02,03,04,]
        titles = ["HTML + CSS make the world (wide web) go round","Making a Github pages website","Making a professional website","using Jekyll to create a monster",]
        urls = ["https://alexbgurvi.ch/tutorials/html-css/","https://alexbgurvi.ch/tutorials/website/","https://alexbgurvi.ch/tutorials/personal-website/","https://alexbgurvi.ch/tutorials/jekyll/",]
        post_html_icons = [
    '<i class="fa-solid fa-globe post-web"></i>'
,
    '<i class="fa-solid fa-globe post-web"></i>'
,
    '<i class="fa-solid fa-book post-research"></i>'
,
    '<i class="fa-solid fa-globe post-web"></i>'
, ]
        // find the number of posts on each post's level
        nposts_share_level = ys.map(function (value){return ys.filter(function (sub_value){return sub_value == value;}).length})
        // index each post on a level
        old_level = 1;
        xi = 0;
        xindices = []
        for (i=0; i < ys.length; i++){
            // if this y is on a new level let's start over counting
            if (ys[i] != old_level){
                old_level = ys[i];
                xi=0;
            }
            xindices.push(xi);
            xi++;
        }
        
        track_struct['maxy'] = d3.max(ys);
        // unpack the arrays into individual structs and push them 
        ys.forEach(function (y,i){
            struct = {}
            struct['index'] = i
            struct['level'] = y
            struct['title'] = titles[i]
            struct['url'] = urls[i]
            struct['html_icon'] = post_html_icons[i]
            struct['nposts_share_level'] = nposts_share_level[i]
            struct['xindex'] = xindices[i]
            track_struct['data'].push(struct);
        })
        data.push(track_struct)
    
        track_struct = {};
        track_struct['track'] = "Essential Skills";
        track_struct['data'] = []
        // add prereqs to posts in this track 
        



        // create arrays for each component of post that we want to store
        //  has to be separate liquid loops because the { for } loop will be replaced
        //  with the _literal_ (in the technical sense) content so we add commas
        //  between the numbers/strings/whatever 
        ys = [01,01,01,01,02,]
        titles = ["Using bash","Version control with git","Using LaTeX","Creating a working software environment","(Ana)conda: Python's best friend",]
        urls = ["https://alexbgurvi.ch/tutorials/using-bash/","https://alexbgurvi.ch/tutorials/git-basics/","https://alexbgurvi.ch/tutorials/latex-basics/","https://alexbgurvi.ch/tutorials/create-environment/","https://alexbgurvi.ch/tutorials/conda/",]
        post_html_icons = [
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
,
    '<i class="fa-solid fa-book post-research"></i>'
,
    '<i class="fa-solid fa-book post-research"></i>'
,
    '<i class="fa-solid fa-terminal post-terminal"></i>'
, ]
        // find the number of posts on each post's level
        nposts_share_level = ys.map(function (value){return ys.filter(function (sub_value){return sub_value == value;}).length})
        // index each post on a level
        old_level = 1;
        xi = 0;
        xindices = []
        for (i=0; i < ys.length; i++){
            // if this y is on a new level let's start over counting
            if (ys[i] != old_level){
                old_level = ys[i];
                xi=0;
            }
            xindices.push(xi);
            xi++;
        }
        
        track_struct['maxy'] = d3.max(ys);
        // unpack the arrays into individual structs and push them 
        ys.forEach(function (y,i){
            struct = {}
            struct['index'] = i
            struct['level'] = y
            struct['title'] = titles[i]
            struct['url'] = urls[i]
            struct['html_icon'] = post_html_icons[i]
            struct['nposts_share_level'] = nposts_share_level[i]
            struct['xindex'] = xindices[i]
            track_struct['data'].push(struct);
        })
        data.push(track_struct)
    

    return data;
}