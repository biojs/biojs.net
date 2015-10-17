---
layout: container
title: BioJS Team
extra_css:
 - css/people.css
team: 
 - name: Seth Carbon
   institute: Berkeley Lab
   img: https://sigil.cupcake.io/seth
 - name: Saket Choudhary
   institute: University Of Southern California
   img: https://avatars2.githubusercontent.com/u/682153?v=2&s=460
   github: saketkc
 - name: David Dao
   institute: Broad Institute of MIT and Harvard
   img: http://daviddao.de/img/me.png
   instituteLink: https://www.broadinstitute.org/
   github: daviddao
 - name: Alex Garcia
   institute: Uni Bonn
   img: https://sigil.cupcake.io/alexgarcia
 - name: Leyla Garcia
   institute: EMBL-EBI
   img: https://avatars1.githubusercontent.com/u/5427252?v=2&s=460
   github: ljgarcia
 - name: Tatyana Goldberg
   institute: RostLab, TUM
   img: img/team/tatyana.jpg
   personLink: http://www.rostlab.org/~goldberg
   instituteLink: http://www.rostlab.org/
   github: TatyanaGoldberg
 - name: John Gomez
   institute: EMBL-EBI
   github: johncar
   img: https://avatars1.githubusercontent.com/u/5148730?v=2&s=460
 - name: Michiel Helvensteijn
   institute: Leiden University
   github: mhelvens
   img: https://avatars2.githubusercontent.com/u/4012816?v=2&s=460
 - name: Alex Kalderimis
   institute: Cambridge
   github: alexkalderimis
   img: https://avatars1.githubusercontent.com/u/436846?v=2&s=460
 - name: Ian Mulvany
   institute: eLife
   img: https://avatars2.githubusercontent.com/u/46833?v=2&s=460
   github: IanMulvany
 - name: Miguel Pignatelli
   institute: EMBL-EBI
   github: emepyc
   img: https://avatars3.githubusercontent.com/u/473962?v=2&s=460
 - name: Ricardo Ramirez
   institute: TGAC
   github: homonecloco
   img: https://avatars3.githubusercontent.com/u/254050?v=2&s=460
 - name: Francis Rowland
   institute: EMBL-EBI
   img: https://sigil.cupcake.io/francisrowland
 - name: Tim Ruffles
   institute: SidekickJS
   github: timruffles
   img: https://avatars1.githubusercontent.com/u/249800?v=2&s=460
 - name: Gustavo Salazar
   institute: Cape Town Uni
   img: https://avatars3.githubusercontent.com/u/2870295?v=2&s=460
   github: 4ndr01d3
 - name: Fabian Schreiber
   institute: EMBL-EBI
   img: https://avatars3.githubusercontent.com/u/1134157?v=2&s=460
   github: fabsta
 - name: Ian Silitoe
   institute: UCL
   img: https://avatars1.githubusercontent.com/u/152954?v=2&s=460
 - name: Iris Shih
   institute: TUM
   img: https://avatars2.githubusercontent.com/u/4600451?v=2&s=400
   github: IriscShih
 - name: William Spooner
   institute: Eagle Genomics
   img: https://sigil.cupcake.io/williamspooner
 - name: Anil Thanki
   institute: TGAC
   img: https://avatars1.githubusercontent.com/u/3940626?v=2&s=460
   github: anilthanki
 - name: Bruno Vieira
   institute: Queen Mary Uni.
   img: https://avatars1.githubusercontent.com/u/263386?v=2&s=460
   github: bmpvieira
 - name: Jose Villaveces
   institute: Max Planck Institute
   img: https://avatars0.githubusercontent.com/u/5575999?v=2&s=460
   github: jmVillaveces
 - name: Sebastian Wilzbach
   institute: RostLab, TUM
   personLink: http://seb.wilzba.ch
   github: greenify
   img: img/team/seb.jpg
 - name: Guy Yachdav
   institute: RostLab, TUM
   github: gyachdav
   img: img/team/guy.jpg
 - name: Benedikt Rauscher
   institute: TGAC
   github: bene200
   img: https://pbs.twimg.com/profile_images/597379014228111360/35gRCZik.png
 - name: Your name
   institute: your institute
   img: https://sigil.cupcake.io/yourimg

---

<!-- 
IMPORTANT: please upload your image in img/team and read the README their (1:1 dimension, max 200px)
-->

<div id="people-container">

<div class="row">

<div class="col-md-2 col-xs-4">
<img src="img/team/manuelcorpas.jpg">
<div class="people-name"> Manuel Corpas </div>
<div class="people-institution"> TGAC </div>
<div class="people-position"> Project Coordinator, PI </div>
<div class="github-link"><a href="https://github.com/manuelcorpas">@manuelcorpas</a></div>
</div>

<div class="col-md-2 col-xs-4">
<img src="https://www.ebi.ac.uk/sites/ebi.ac.uk/files/styles/medium/public/person/image/Hermjakob_Henning_72.jpg">
<div class="people-name"> Henning Hermjakob </div>
<div class="people-institution"> EMBL-EBI </div>
<div class="people-position"> Senior PI </div>
</div>

<div class="col-md-2 col-xs-4">
<img src="https://sigil.cupcake.io/suzi">
<div class="people-name"> Suzi Lewis </div>
<div class="people-institution"> Berkeley Lab </div>
<div class="people-position"> Senior PI </div>
<div class="github-link"><a href="https://github.com/selewis">@selewis</a></div>
</div>

<div class="col-md-2 col-xs-4">
<img src="https://avatars1.githubusercontent.com/u/2062396?v=2&s=460">
<div class="people-name"> Rafael Jiménez  </div>
<div class="people-institution"> ELIXIR </div>
<div class="people-position"> Chief Technical Coordinator </div>
<div class="github-link"><a href="https://github.com/rajido">@rajido</a></div>
</div>


<div class="clearfix"> </div>

</div>

<div class="row">

{% for person in page.team %}

<div class="col-md-2 col-xs-4">
<img src="{{ person.img }}">
<div class="people-name">
{% if person.personLink != nil %}
<a href="{{ person.personLink }}">{{ person.name }}</a>
{% else %}
{{ person.name }}
{% endif %}
</div>
<div class="people-institution">
{% if person.instituteLink != nil %}
<a href="{{ person.instituteLink }}">{{ person.institute }}</a>
{% else %}
{{ person.institute }}
{% endif %}
</div>

{% if person.github != nil %}
<div class="github-link">
<a href="https://github.com/{{ person.github }}">@{{ person.github }}</a>
</div>
{% endif %}

</div>

{% cycle nil, nil, '<div class="visible-xs clearfix"> </div>', nil, nil, '<div class="clearfix"> </div>' %}

{% endfor %}

</div>




</div>
