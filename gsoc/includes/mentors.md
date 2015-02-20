<div id="meet-the-mentors">
<h3>Meet the mentors</h3>
<div id="accordion" class="gsoc-accordion">

{% for person in include.mentors %}

{% if person.img contains "http" %}
  {% assign img = person.img %}
{% else %}
  {% capture img %}{{ gpath }}images/people/{{person.img}}{% endcapture %}
{% endif %}

<h3> {{ person.name }}</h3>
<div>
     <a href="{{ person.url}}" target="_blank">
         <img class="lazy mentor-img" data-original="{{ img }}"  />
     </a>
     {{ person.desc | markdownify}}
     <p>
     Projects to mentor: {{ person.projects }}
     </p>
     <p>
     Contact: {{ person.contact }}
     </p>
</p>
</div>

{% endfor %}

</div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    $("#accordion").accordion({
        active: false,
        collapsible: true,
        autoHeight: false,
        heightStyle: "content",
    });
});
</script>
