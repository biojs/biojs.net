---
layout: gsoc 
title: "Drag & drop editing of ApiNATOMY Circuit Boards"
gsoc: 2015
---

Rationale & Approach
--------------------

ApiNATOMY offers a 'circuit board' visualization widget. That is, a dynamic treemap with relevant data overlayed on top of it, in 2D and 3D space. At the moment, ApiNATOMY offers merely a visualization of ontologies and overlayed data. This project idea will turn it into an editor. The curation of ontologies is an important but often time-consuming and frustrating task.

ApiNATOMY has been praised for the intuitive visualization it offers. With your help, it can offer the same intuitive experience to the editing process, with GUI operations like:

* Adding / removing / moving circuit board tiles using simple drag & drop actions.
* Adding / removing / moving simple data overlays between tiles using drag & drop.
* Editing meta-data (name, description, etc.) in-place.
* Drawing graphical connections inside and between tiles (and internal junctions) with the mouse, e.g., to represent blood-vessels and neuronal connections.

<figure>
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/apinatomy_drop.jpg" alt="Lungs" style="max-height: 200px">
	<figcaption>Fig. 1: Dragging tiles in ApiNATOMY</figcaption>
</figure>

Changes made through the GUI would persist in the underlying model (so that instant two-way synchronization with other widgets is possible), and in any underlying databases.

Challenges
----------

* Providing a smooth intuitive experience for curators / biologists who are not programmers.
* Proper propagation of changes throughout the system so that instant two-way synchronization with (unrelated) widgets is possible.
* ApiNATOMY supports many types of data-overlays, most of which would benefit from the same kind of 'editability' (add/remove/move). One useful challenge is to write an abstract plugin that can be used to make any such overlays 'editable'.

Involved Tools / Libraries
-------------------------

* JavaScript (EcmaScript 6)
* WebPack + Gulp (build process)
* jQuery (DOM manipulation)
* D3 (2D graphs / data visualization)
* Three.js (WebGL / 3D frontend)
* Kefir.js (Functional Reactive Programming)
* delta.js (Feature Oriented Programming)

Needed Skills
-------------

* You need to be comfortable with JavaScript and modern web development practices.
* Familiarity with jQuery will be very useful.
* Familiarity with the other tools / libraries mentioned above would be helpful, but can be learned during the process. (The developer of delta.js will actually be your mentor for this project.)

Mentors
-------

Michiel Helvensteijn, Natallia Kokash

<a target="_blank" class="btn btn-primary pull-right" href="{{ site.baseurl }}gsoc/2015/projects/apinatomy.html">Learn more about ApiNATOMY</a>  
<br> 
