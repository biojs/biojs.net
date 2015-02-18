---
layout: gsoc 
title: Galaxy
gsoc: 2015
---
    
Rationale
---------

The [Galaxy Project](https://usegalaxy.org/) builds a cluster environment for biological computing which allows non-programmers to apply thousands of containerized programs to their data. Galaxy does not only allow users to execute program, they provide a datastore and a huge framework to allow efficient workflows. As most users of Galaxy interact with the platform via the web, Galaxy has the need to visualize the resulting data. Galaxy already provides an API to visualization plugins, but at the moment there no specific visualizations for biological data. 
This why BioJS has focused in the past to convert BioJS components into Galaxy visualization plugins.

<figure>
	<img src="{{ site.baseurl }}gsoc/2015/img/galaxy.jpg" alt="BioJS MSA in Galaxy" width="90%">
	<figcaption>Visualizing a multiple sequence alignment in Galaxy with the <a href="https://github.com/greenify/msa">MSA component</a></figcaption>
</figure>

If this is well done, it would allow non programmers (e.g. biologist) not just work with, but to beautifully visualize their research data and hence get more scientific insights.
There is one step between a huge raw text file and a heatmap, but there is an enormous one between a heatmap and an understandably one (e.g. by filtering or grouping the most important data points).

Approach
--------

In the beginning of this project you map components from the [BioJS registry][registry] to [Galaxy datatypes][datatypes]. With the help of [biojs2galaxy](https://github.com/biojs/biojs2galaxy) you will be able to convert BioJS components to Galaxy visualization plugins. Using this gained experience you will be add BioJS components to [Galaxy Charts Plugin](https://wiki.galaxyproject.org/Learn/Visualization/Charts).

[datatypes]: https://wiki.galaxyproject.org/Learn/Datatypes
[registry]: http://biojs.io

Needed skills
-------------

* Advanced JS
* Experience with NodeJS
* Python

Resources
---------

* [Ongoing discussion about the Galaxy-BioJS integration on Github](https://github.com/biojs/biojs/issues/71)
* [Use visualizations in Galaxy](https://wiki.galaxyproject.org/VisualizationsRegistry)

[ipython]: {{ site.baseurl }}gsoc/2015/projects/ipython.html

The focus is similar to the [IPython][ipython] project, but with different conditions. IPython users normally deal with small datasets whereas Galaxy stores data in the order of Giga- or even Terrabytes. So here the priorities are more shifted to things like indexing or data streaming.
