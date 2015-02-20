---
layout: gsoc 
title: Bionode Pipeline Building GUI
gsoc: 2015
---

Rationale & Approach
--------------------

Making a easy to use graphical user interface to build interactive pipelines would lower the barrier of entry to usage of Bionode to non-bioinformaticians/programmers. This could be achieved through integration with projects like [Galaxy](http://galaxyproject.org), however a more interactive/advanced interface such as [Node-RED](http://nodered.org) is what we are aiming for. Another good source for interface inspiration would be the [NoFlo](http://noflojs.org) project. [Node-RED](http://nodered.org) or any other open source project can and should be used/adapted as much as possible instead of writing a new interface from scratch.

The resulting interface should produce as output a descriptive text file representation of the pipeline, that should be able to run on the command line without requiring the GUI. For example, [Gasket](https://github.com/datproject/gasket), [datscript](https://github.com/datproject/datscript), [hackfile](https://github.com/mafintosh/hackfile) or [Makefile](http://www.gnu.org/software/make/manual/make.html#toc-An-Introduction-to-Makefiles).

Challenges
-----------

* Integration between available interfaces and bionode pipeline
* Producing a simple text format representation of those pipelines for easy versioning, distribution and collaboration.


Involved Tools / Libraries
--------------------------

* Node-RED
* NoFlo (for ideas)
* Galaxy (for ideas)
* Gasket, Datscript, Hackfiles, Makefiles (for text representation of pipeline).

Needed Skills
-------------

* Backend JavaScript/Node.js
* Frontend JavaScript
* Bash
* CoffeeScript (for NoFlo)

Mentors
---------

Bionode team (contact: Bruno Vieira)  

* [Boris Adryan](http://logic.sysbiol.cam.ac.uk/): Scientist: @FlyJedi, genome gazer. Geek: Founder of @thingslearn, #IoT tinkerer
* [Bruno Vieira](http://bmpvieira.com/): Bioinformatics PhD student at Queen Mary University of London and Node.JS Web Developer. Working on population genomics, bionode.io and dat-data.com
* [Dave C-J](https://twitter.com/ceejay): Node-RED developer
* [Karissa McKelvey](http://www.karissamck.com/): Programmer and idea jockey based in Oakland, CA. Former academic experienced in building interactive data visualization and collaboration tools
* [Mathias Buus](https://github.com/mafintosh): Programmer based in Copenhagen, Denmark. Co-creator of node-modules.com and co-founder of ge.tt. open mouth, open source
* [Max Ogden](http://maxogden.com/): Programmer based in Portland, OR. Max works on or has worked on things like CSVConf, Code for America, JavaScript for Cats, and Voxel.js
* [Nicholas O'Leary](http://knolleary.net/): IBM Emerging Technologies geek. All things MQTT and IoT. Creator of @NodeRED and one of the @BeardyDads
* [Steve Moos](http://about.me/gawbul): Passionate Computational and Data Scientist specialising in Bioinformatics, DevOps and SysAdmin
* [Yannick Wurm](http://wurmlab.github.io/): Population Genomics, Bioinformatics, Evolution of Social Insects. Senior Lecturer at Queen Mary University London
