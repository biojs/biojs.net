---
layout: gsoc 
title: IPython
gsoc: 2015
---

Rationale
---------

Python and [IPython](http://ipython.org/) (a very popular notebook software for "interactive computing") are very popular among Bioinformaticians (e.g. BioPython) and we would like to make our visualizations components easily accessible for IPython users.
One example is that instead of showing raw sequences in JSON or a "pre"-block, we could use an interactive multiple sequence alignment viewer. Our long term goal is to have a BioJS specification that allows to wrap all BioJS components into IPython

![MSA in iPython]({{ site.baseurl }}gsoc/2015/img/msa_ipython.jpg){: width="90%"}

Approach
--------

In [IPEP 23][ipep23] IPython describes an API that enables the user to generate and manipulate the GUI of the IPython notebook via _widgets_. As a start to familiarize yourself with IPEP23 you should port one or two components to IPython widgets. The most interesting question of this projects is how we infer knowledge about data type into BioJS components - a related project ([biojs2galaxy](https://github.com/biojs/biojs2galaxy)) uses special template files for this. Moreover as every IPython Widget has to inherit from a special [Backbone.View](http://backbonejs.org/#View)), we could also put some work into a [BioJS core](https://github.com/biojs/biojs/issues/125).

This project should also improve the Widget management in IPython/Jupyter and therefore you will be working with amazing dudes from IPython to build an [extension manager for Jupyter widgets](https://github.com/ipython/ipython/issues/6327), so that is super easy for IPython users to install and depend on custom widgets.  This is a unique opportunity because a good design of this extension manager could enhance the user experience drastically. Another amazing outcome of the work on the extension manager for Jupyter is that widget dependencies could also be resolved for static notebooks.

[ipep23]: https://github.com/ipython/ipython/wiki/IPEP-23%3A-Backbone.js-Widgets

Challenges
---------

* Two-way synchronization (changes in the frontend should update the backend)
* IPython widgets are currently only shown in running notebooks - [static](http://nbviewer.ipython.org/) (exported) notebooks are quite common
* IPython is growing - they recently rebranded to [Jupyter](http://jupyter.org/) to show that they are agnostic to the actual kernel. So supporting other languages like R, Ruby or Scala would be an upcoming problem. 
* [Resizability](https://github.com/ipython/ipython/issues/6733)

Resources
-----------

* [IPEP23](https://github.com/ipython/ipython/wiki/IPEP-23%3A-Backbone.js-Widgets)
* [Discussion about the BioJS - iPython integration on Github](https://github.com/biojs/biojs/issues/111)

Mentors
--------

Tim Ruffles (for BioJS), Dough (for IPython)
