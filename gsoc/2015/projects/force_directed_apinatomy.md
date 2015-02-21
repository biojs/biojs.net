---
layout: gsoc 
title: "Force Directed 3D Connectivity in ApiNATOMY"
gsoc: 2015
---

Rationale & Approach
--------------------

One of the possible overlays in the [ApiNATOMY](http://www.apinatomy.org) circuit board widget is the inter-tile connectivity layer, which consists of a graph with end-point nodes (tied to a specific tile) and internal junctions. This can be used to represent the communication channels in a system, like the blood-vessels and neuronal connections of the human body. To achieve this, the JavaScript library D3 is used. It has a force directed graph module, which organically finds the most efficient layout.

But with the 2D representation of these channels it is too easy to lose overview, and edges seem to cross certain areas where they do not really belong (semantically they're just "in transit"). This project idea is to use the third dimension for routing these cables. ApiNATOMY already exists in a 3D space (using the Three.js library), so this move makes perfect sense.

<figure>
	<img src="{{ site.baseurl }}gsoc/2015/img/apinatomy/apinatomy_3d.jpg" alt="Lungs" style="max-height: 200px">
	<figcaption>Fig. 1: 3D connections between tiles in ApiNATOMY</figcaption>
</figure>

Challenges
---------

The main challenge is to develop or adapt an algorithm to find the optimal placement in 3D space of each branching junction of the graph. A possible approach would be to keep using D3 to determine the x and y coordinates, and to set z according to certain aesthetic criteria.
The other challenge is to render these pathways in 3D space so that they look organic, avoid (or minimize) collisions and look comfortable to the eye.

Involved Tools / Libraries
---------------------------

* JavaScript ([EcmaScript 6](https://github.com/lukehoban/es6features))
* [WebPack](http://webpack.github.io/) + [Gulp](http://gulpjs.com/) (build process)
* [jQuery](http://jquery.com/) (DOM manipulation)
* [D3](http://d3js.org/) (2D graphs / data visualization)
* [Three.js](http://threejs.org/) (WebGL / 3D frontend)
* [Kefir.js](https://pozadi.github.io/kefir/) (Functional Reactive Programming)
* [delta.js](https://github.com/mhelvens/delta.js) (Feature Oriented Programming)

Needed Skills
-------------

* You need to be comfortable with JavaScript and modern web development practices.
* Familiarity with D3 and/or Three.js (WebGL) will be very useful.
* Familiarity with the other tools / libraries mentioned above would be helpful, but can be learned during the process. (The developer of delta.js will actually be your mentor for this project.)

Mentors
-------

Michiel Helvensteijn, Natallia Kokash

<a target="_blank" class="btn btn-primary pull-right" href="{{ site.baseurl }}gsoc/2015/projects/apinatomy.html">Learn more about ApiNATOMY</a>  
<br> 
