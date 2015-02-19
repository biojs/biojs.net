---
layout: gsoc 
title: Galaxy
gsoc: 2015
---
    
Rationale
---------

[Galaxy](https://usegalaxy.org/) is a cluster environment for biological computing which allows non-programmers to apply thousands of containerized programs to their data. Moreover Galaxy does not only allow users to execute programs, but is a  huge framework to allow efficient workflows. As most users of Galaxy interact with the platform via the web, Galaxy has the need to visualize the resulting data. Forsooth Galaxy already provides an API - the "visualization plugins", but at the moment there are no specific visualizations for biological data. 
This why in the past BioJS has focused to convert BioJS components into Galaxy visualization plugins.

<figure>
	<img src="{{ site.baseurl }}gsoc/2015/img/galaxy.jpg" alt="BioJS MSA in Galaxy" width="90%">
	<figcaption>Fig.1: Visualizing a multiple sequence alignment in Galaxy with the <a href="https://github.com/greenify/msa">MSA component</a></figcaption>
</figure>

If this is well done, it would allow non programmers (e.g. biologist) not just to work with, but to beautifully visualize their research data and hence get more scientific insights.
There is one step between a huge raw text file and a heatmap, but there is an enormous one between a heatmap and an understandable, insight-giving heatmap (e.g. by filtering or grouping the most important data points).

Approach
--------

In the beginning of this project you will adjust BioJS components from the [registry][registry] to [Galaxy datatypes][datatypes].

With the help of [biojs2galaxy](https://github.com/biojs/biojs2galaxy) you will be able to convert BioJS components to Galaxy visualization plugins. At the moment most BioJS components are constructed with a settings object, hence you should provide an input mask for the user to adjust those settings and update the components on changes. 

Using this gained experience you can start to add BioJS components to [Galaxy Charts Plugin](https://wiki.galaxyproject.org/Learn/Visualization/Charts) - an component builder provided by the Galaxy project.

[datatypes]: https://wiki.galaxyproject.org/Learn/Datatypes
[registry]: http://biojs.io

Needed skills
-------------

* Advanced JS skills
* Experience with NodeJS and npm
* Python literacy

Resources
---------

* [Ongoing discussion about the Galaxy-BioJS integration on Github](https://github.com/biojs/biojs/issues/71)
* [Use visualizations in Galaxy](https://wiki.galaxyproject.org/VisualizationsRegistry)

Mentors
-------

Manuel Corpas (for BioJS) and Aysam Guerler (for Galaxy)
