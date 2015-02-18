---
layout: gsoc 
title: Galaxy
gsoc: 2015
---


to be announced
    
Rationale
---------

Another project that we plan to propose is about [Galaxy](https://usegalaxy.org/) (a cluster environment for biological data)[4]. 
Here the focus is similar to the IPython project, but with different conditions. IPython users normally deal with small datasets whereas Galaxy stores data in the order of Giga- or even Terrabytes. So here the priorities are more shifted to things like indexing or data streaming.
If this is well done, it would allow non programmers (e.g. biologist) not just work with, but to beautifully visualize their research data and hence get more scientific insights.
There is one step between a huge raw text file and a heatmap, but there is an enormous one between a heatmap and an understandably one (e.g. by filtering or grouping the most important data points).

Approach
--------

[biojs2galaxy](https://github.com/biojs/biojs2galaxy)


[Charts Plugin](https://wiki.galaxyproject.org/Learn/Visualization/Charts)

![Galaxy]({{ site.baseurl }}gsoc/2015/img/galaxy.jpg){: width="90%"}

Challenges
---------

Resources
---------

* [Discussion about the Galaxy-BioJS integration on github](https://github.com/biojs/biojs/issues/71)
* [Use visualizations in Galaxy](https://wiki.galaxyproject.org/VisualizationsRegistry)
