---
---

{% include post_data.html %}

//select chart div
function liquid_make_data(){
    var data = [];
    var struct;

    {% for unique_track in unique_tracks %}
        struct = {}
        this_track = "{{unique_track}}";
        {% include posts_plus_prereqs.html sorted=sorted unique_track=unique_track %}
        ys = [{% for post in these_posts %}{{post.date | date: "%d"}},{% endfor %}]
        titles = [{% for post in these_posts %}"{{post.title }}",{% endfor %}]
        urls = [{% for post in these_posts %}"{{site.url}}{{site.baseurl}}{{post.url}}",{% endfor %}]
        post_html_icons = [
            {% for post in these_posts %}
            {% include post_icon.html post=post %},
            {% endfor %}
        ]
        struct['level'] = ys
        struct['titles'] = titles
        struct['urls'] = urls
        struct['html_icons'] = post_html_icons
        data.push(struct)
    // why do i need two of these???
    {% endfor %}

    return data;
}