<div id="div-project-ideas" class="gsoc-accordion" markdown="1">

{% for p in include.pages %}
 {% if p.gsoc == include.gsocYear %}

 {% capture inpath %}{{page.gsocYear}}/projects/{{ p.name }}{% endcapture %}


 {% capture content %}{% include_relative {{inpath}} %}{% endcapture %}

<!-- probably the ugliest way to remove the YAML front matter -->
{% assign lines = content | newline_to_br | split: "<br />" %}

{% assign newContent = "" %}
{% for l in lines %}
    {% if forloop.index >= 6 %}
		{% assign newContent  = newContent | append: l %}
	{% endif %}
{% endfor %}

<h3> {{ p.title }} </h3>

<div>

{{ newContent | markdownify }}


<div class="gsoc-new-page">
<a class="btn btn-info" href="{{ p.url }}" target="_blank">Open in a new page</a>
</div>

<!--<hr class="fancy-line">-->
</div>

{% endif %}
{% endfor %}

<h3> Your idea! </h3>

None of our proposed ideas attracts you? You have your own awesome idea? Propose it!  
Before applying we recommend you to send a short description of your idea to our [mailing list](mailto:biojs@googlegroups.com) or [gitter](https://gitter.im/biojs/biojs).

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    $("#div-project-ideas").accordion({
        active: false,
        collapsible: true,
        autoHeight: false,
        heightStyle: "content",
    });
});
</script>
