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

In the end a user should be able to upload his data file from experiments (or may already have them in the Cloud) and then BioJS components that are adequate for his specific data formats are displayed.
(As a backend the Galaxy data persistence platform may be used, but this project main focus is not on a backend)

<div class="row">
	<div class="col-md-6" align="center">
		<a href="http://vcf.iobio.io/"><img src="{{ site.baseurl }}gsoc/2015/img/iobio.jpg" alt="Screenshot of IoBio"  width="100%" /></a>
<a href="http://iobio.io"> IoBio </a>
	</div>
	<div class="col-md-6" align="center">
		<img src="{{ site.baseurl }}gsoc/2015/img/zoomdata.jpg"  alt="Screenshot of ZoomData" width="90%" />
	ZoomData
	</div>
</div>
<br>
  
Another very popular platform is [EpiViz](http://epiviz.cbcb.umd.edu/).

Approach
--------

This project could be structured in five phases.

1. Build a BioJS widget manager (maybe on the basis of [gridster.js][gridster]) 
2. Require BioJS components as widgets
3. Define the logic to create new widgets from specific data types
4. Allow the user to customize a Widget (color, labels, ...)
5. Save & load user changes to widgets and assembled dashboards
6. Sharable dashboards: saved dashboards should be shareable with other researchers and be able to used as a template for new data

You can find a prototype [here](dashify).

[gridster]: http://gridster.net/
[dashify]: https://dashify.github.io/widgetmanager/

Challenges
---------

* Adapting widgets to the container size
* Constructing BioJS widgets asynchronously
* Let multiple components interact
* Configuration API for BioJS components
* Have a super-easy workflow for an user from his data files to an actual beautiful visualization 

Needed skills
-------------

* Excellent knowledge of JavaScript
* Intimate relationship with Backbone, jQuery and/or Angular 
* Experience with NodeJS and npm

Resources
--------

* Miller, C. A., Qiao, Y., DiSera, T., D'Astous, B., & Marth, G. T. (2014). bam. iobio: a web-based, real-time, sequence alignment file inspector. Nature methods, 11(12), 1189-1189.
* Chelaru, F., Smith, L., Goldstein, N., & Bravo, H. C. (2014). Epiviz: interactive visual analytics for functional genomics data. Nature methods, 11(9), 938-940.

Mentors
-------

Tatyana Goldberg, Guy Yachdav
