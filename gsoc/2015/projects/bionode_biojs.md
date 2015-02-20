---
layout: gsoc 
title: Bionode integration
gsoc: 2015
---

Rationale & Approach
----------------------

[Bionode](http://bionode.io) focus is on modular pipelines for data manipulation and analysis, while BioJS focus is on visualisation. It would be interesting to combine both tools to solve a biologically relevant problem while testing and solving issues with the integration between both projects.
For example, one interesting use case is to use Bionode to get transcriptomic data from the Sequence Read Archive (SRA) for any species/experiment and visualise the expression levels of genes with BioJS. During your project you should be able to work on at least three different use cases.
As the data might become larger for specific files (e.g. SAM/BAM) one should be able to use streams to communicate with Bionode modules

Challenges
----------

* Getting several modules from both projects to work together
* Might require some architectural changes to those modules.

Involved Tools / Libraries
--------------------------

* Bionode
* BioJS

Needed Skills
-------------

* Frontend JavaScript
* Backend JavaScript/Node.js

Mentors
---------

Bruno Vieira (Bionode) and Miguel Pignatelli (BioJS)
