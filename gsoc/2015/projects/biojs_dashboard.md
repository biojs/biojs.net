---
layout: gsoc 
title: BioJS Dashboard
gsoc: 2015
---

Rationale
---------

One of the biggest goals of the BioJS community is to make it as easy as possible for an user to utilize the variety of BioJS components. It should be possible to use and combine BioJS components without knowledge of JS. Building such an interactive platform would have three major effects:

(1) the direct benefit for biologist who can now easily work with their data on the web,
(2) the Galaxy data analysis platform which lacks sufficient means to visualize its entire output  and
(3) as the audience for BioJS components grows this would motivate BioJS developer to improve their components or newcomers to start building new ones.

The basic idea is that a user can upload his data file from experiments (or may already have them in the Cloud) and then BioJS components that are adequate for his specific data formats are displayed (see the Galaxy screenshot).
As a backend the Galaxy data persistence platform may be used, but this project main focus is not on a backend. 

<div class="row">
	<div class="col-md-6" align="center">
		<a href="http://vcf.iobio.io/"><img alt="Screenshot of IoBio" src="{{ site.baseurl }}gsoc/2015/img/iobio.png" width="100%" /></a>
<a href="http://iobio.io"> IoBio </a>
	</div>
	<div class="col-md-6" align="center">
		<img alt="Screenshot of ZoomData" src="{{ site.baseurl }}gsoc/2015/img/zoomdata.png" width="90%" />
	ZoomData
	</div>
</div>
<br>
  
Another very popular platform is [EpiViz](http://epiviz.cbcb.umd.edu/).

Approach
--------

tba

Challenges
---------

tba

Needed skills
-------------

* Advanced JS
* Experience with NodeJS
* Python

Resources
--------

* Miller, C. A., Qiao, Y., DiSera, T., D'Astous, B., & Marth, G. T. (2014). bam. iobio: a web-based, real-time, sequence alignment file inspector. Nature methods, 11(12), 1189-1189.
* Chelaru, F., Smith, L., Goldstein, N., & Bravo, H. C. (2014). Epiviz: interactive visual analytics for functional genomics data. Nature methods, 11(9), 938-940.

Mentors
-------

Tatyana Goldberg, Juan Miquel Cejuela
