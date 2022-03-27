---
---

{% include post_data.html %}

//select chart div
function liquid_make_data(){
    var data = [];
    var struct;
    var track_struct;

    // because this is a liquid file, you have to comment out the js comments. 
    // loop through each track in liquid 
    {% for unique_track in unique_tracks %}
        track_struct = {};
        track_struct['track'] = "{{unique_track}}";
        track_struct['data'] = []
        // add prereqs to posts in this track 
        {% include posts_plus_prereqs.html sorted=sorted unique_track=unique_track %}
        // create arrays for each component of post that we want to store
        //  has to be separate liquid loops because the { for } loop will be replaced
        //  with the _literal_ (in the technical sense) content so we add commas
        //  between the numbers/strings/whatever 
        ys = [{% for post in these_posts %}{{post.date | date: "%d"}},{% endfor %}]
        titles = [{% for post in these_posts %}"{{post.title }}",{% endfor %}]
        urls = [{% for post in these_posts %}"{{site.url}}{{site.baseurl}}{{post.url}}",{% endfor %}]
        post_html_icons = [{% for post in these_posts %}{% include post_icon.html post=post %},{% endfor %} ]
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
    {% endfor %}

    return data;
}