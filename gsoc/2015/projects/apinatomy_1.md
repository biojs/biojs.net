---
layout: gsoc 
title: ApiNATOMY
gsoc: 2015
---
    
Rationale
---------

While the existing layouts have been successfully used to represent flat body maps, we would like to extend the toolkit with the possibility to display generated 3D models and dynamic processes. Our goal is to be able to construct organs and systems in the form of network of multi-layered “pipes”, where layers in the pipes represent body tissues and materials. Such models than can be used for dynamic process analysis, e.g., such as simulating air-flow in lungs or drug distribution via the vascular system.

<figure class="figure-no-block">
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/lungs_human.png" alt="Lungs" width="24%">
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/lungs.png" alt="Lungs" width="24%">
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/lungs_illustration.png" alt="Lungs" width="24%">
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/lungs_blood.png" alt="Lungs" width="24%">
	<figcaption>Fig. 1: Different visualiation of the human lung</figcaption>
</figure>
  
The images above illustrate the rationale for the project: to reconstruct a body organ or a system, we develop its description in a form of a tree or graph with associate semantic data and then use this structure to produce a dynamic 3d model. Biomedical professionals will be able to navigate, zoom in and out, emphasize and edit data related to any part of the organ or system.

Approach
--------

The basic structure of organs or systems is represented by trees or graphs. Each edge or level of such a tree is associated with the information about layers and materials it is composed of. Such information is represented in a form of an asymmetric unit, which is essentially a treemap with certain constraints that will ensure tissue layer continuity. Such treemap is rotated around one of its edges to produce a lyph. The term lyph is part of the word glyph (a hieroglyphic character or symbol, an ornamental carved groove or channel) which we expand to mean a “graphical lyph”. Several types of lyphs can be distinguished, e.g., tubes, cists, bags. When the entire construct is rendered, we obtain an intuitive 3d representation of body organs (e.g., gastrointestinal tract, kidney, lungs, arteries and veins).  

The initial prototype we developed allows us to describe asymmetric units and create graphs with associated asymmetric units. There is also a prototype that constructs a 3d model of lungs from layered tubes.

<figure class="figure-no-block">
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/lungs_tubes_graph.png" alt="Lungs" style="max-height: 200px">
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/lungs_tubes.png" alt="Lungs" style="max-height: 200px">
	<figcaption>Fig. 2: Asymmetric units in the lymph system</figcaption>
</figure>

The first objective of the project is to be able to generate lyphs from any asymmetric unit as shown in the images above. The method can be generalized to work with any treemap. When this is done, the next goal is to be able to combine lyphs to obtain 3d trees and graphs that resemble body organs and systems. One of the challenges here is to connect lyphs in a smooth way so that the model could be used for realistic process simulation (e.g., airflow analysis in lungs).

Challenges
---------

* Develop a tool to generate tubes from asymmetric units.
* Support navigation, zooming, object selection, etc. on tubes.
* Combine tubes to 3d composite structures.
* Develop methods for smooth and seamless connection of asymmetric units.
* Develop algorithms for structural validation of unit compatibility (e.g., continuity of tissue layers).

Involved Tools / Libraries
-------------------------

* JavaScript
* jQuery (DOM manipulation)
* D3 (2D graphs / data visualization)
* Three.js (WebGL / 3D frontend)
* CSG.js (constructive solid geometry)

Needed Skills
-------------

* You need to be comfortable with JavaScript and modern web development practices.
* Experience with 3D modeling would be a big plus.
* Familiarity with the other tools / libraries mentioned above would be helpful, but can be learned during the process.

Mentors
--------
Natallia Kokash, Michiel Helvensteijn

<a target="_blank" class="btn btn-primary pull-right" href="{{ site.baseurl }}gsoc/2015/projects/apinatomy.html">Learn more about ApiNATOMY</a>  
<br> 
