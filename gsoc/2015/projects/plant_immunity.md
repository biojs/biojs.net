---
layout: gsoc 
title: Plant immunity finder
gsoc: 2015
---

Rationale
--------

Plant immunity is made up of a multi-layered defense network. One layer of defense to an invading pathogen uses resistance genes (R genes) to produce proteins that can recognize the invading pathogens. Most plant immune system have 100-600 different R genes present in the genome, that can provide resistance to a plethora of virus, bacteria, fungus, oomycete, nematode and insect pathogens. Successful recognition of a pathogen can produce an immune response, such as apoptotic hypersensitive response (localized cell death). Many R genes commonly encode NB-LRR (nucleotide-binding/leucine-rich repeat domains) proteins. The sequences of a large number of manually curated and predicted R genes, from a couple of hundred species, are available via [PRGDB](http://prgdb.crg.eu) and other proteins/nucleotide databases. These genes are of particular interest to breeders for use in crop disease resistance, as they can be transferred between plants and they confer resistance against specific pathogens. 


<figure>
	<img src="{{ site.baseurl }}gsoc/2015/img/eti.jpg" alt="RTI" style="max-height: 500px">
	<figcaption>Fig. 1: Effector Triggerd Immunity: NB-LRR recognition of pathogen effectors. Adapted from Figure 1, Peter N. Dodds & John P. Rathjen, Nature Reviews Genetics 11, 539-548 (August 2010) doi:10.1038/nrg2812.</figcaption>
</figure>

Given the databases of known R gene available and specific known motifs of NB-LRR, it is possible to search the genome and/or transctipome of different crops species for these. Creating a simple tool that can take sequence data and produce a visualisation of the known R genes present (and predicted), would provide a quick and straightforward way for inexperienced users to have insight into what immunity maybe present in their plant of interest.

Approach 
--------

The project will follow the seven phases of data visualisation (acquire, parse, filter, mine, represent, refine and interact) to create a prototype that can identify R genes in model organisms, (e.g. Arabidopsis). The student will use existing libraries and APIs to acquire data from databases and parse assembly/alignment files, and will write a widget to mine data for sequences with similarity to NB-LRR genes. These will be visualised using a gamification approach to make the visualisation interactive and engaging. Making data relevant to the user and their biological question, using cascading information theory (walk the user though a narrative), feedback loops (cause and effect to user input) and where possible opening the widget up to community collaboration. 

Challenges
---------

* Deciding what level of similarity should be allowed when searching for NB-LRR genes and the best approach to this.
* Processing data as quick and efficiently as possible.
* How to visualise the information generated in a user friendly way for quick assessment; we don’t want to make another genome browser.
* Testing the widget to ensure there are a low number of false positives results.

Involved Tools/ Libraries
------------------------

* JavaScript
* jQuery (DOM manipulation)
* D3 
* BioJS
* Bionode

Needed Skills
-------------

* Comfortable with Javascript, HTML, SVG and CSS.
* Familiarity with the libraries above would be beneficial.
* A basic understanding of the biological application of the widget would help with context.
* Creative and familiar with information design.

Mentors
-------

Benjamen White, Max Franz
