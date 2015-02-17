<div id="meet-the-mentors">
<h3>Meet the mentors</h3>
<div id="accordion">

{% for person in include.mentors %}

<h3> {{ person.name }}</h3>
<div>
     <a href="{{ person.url}}" target="_blank">
         <img src="{{ gpath }}images/people/{{person.img}}" class="mentor-img" />
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
