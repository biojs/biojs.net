---
layout: gsoc 
title: IPython
gsoc: 2015
---

Rationale
---------

One of the most amazing projects is about a collaboration with [IPython](http://ipython.org/) / [Jupyter](http://jupyter.org/) (a very popular notebook software for "interactive computing").
This project is about achieving an as easy as possible integration of BioJS components into IPython.
Moreover it will require some very important design decisions (e.g. whether every BioJS should inherit from [Backbone.View](http://backbonejs.org/#View)).

Approach
--------

In IPEP 23 IPython describes an API that enables the user to generate and manipulate the GUI of the IPython notebook via _Widgets_.

![MSA in iPython]({{ site.baseurl }}gsoc/2015/img/msa_ipython.jpg){: width="90%"}

Challenges
---------

Resources
-----------

* [IPEP23](https://github.com/ipython/ipython/wiki/IPEP-23%3A-Backbone.js-Widgets)
* [Discussion about the BioJS - iPython integration on Github](https://github.com/biojs/biojs/issues/111)

Mentors
--------

Tim Ruffles, someone from IPython
