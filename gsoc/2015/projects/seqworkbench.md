---
layout: gsoc 
title: Sequencing workbench
gsoc: 2015
---

Rationale
---------

With the growth of our community contributed components we have now nearly all visualization components needed to build an interactive, web-based sequencing workbench.
At the moment we have two of the fundamental components: an [multiple sequence alignment viewer][msa] (MSA), and [phylogenetic tree viewer][exelexis].
We want to push the limits and see what is currently possible with pure browser tools.

<figure>
	<a href="http://biojs.io/#/d/msa-tnt">
		<img src="{{ site.baseurl }}gsoc/2015/img/msa_tnt.jpg" alt="MSA-TnT" style="width:90%; max-height: 50%">
	</a>
	<figcaption>An interactive combination of two BioJS components</figcaption>
</figure>

* [MSA-TNT](http://biojs.io/#/d/msa-tnt)

[exelexis]: http://biojs.io/d/exelixis
[msa]: http://biojs.io/d/msa

Approach
--------

### MSA

We have already developed a beautiful [multiple sequence alignment viewer][msa], but to
allow the user to work with the dataset we want to provide him with the ability 
to edit the given sequences. Some other tweaks like a better feature display 
will greatly increase the visual appeal to the end user.


### Phylogenetic trees

One should be able to construct a tree from an MSA.
Therefore the user should be able to perform simple calculation directly in his browser

* [UPGMA][upgma]
* [Neighbor-Joining][neighborjoining]
* [Hierarchical clustering approaches][hierarchicalclust] like Single-Linkage or Complete-Linkage

One of the wider known Tree toolkits is the [ETE toolkit][ETEToolkit](Python).

[upgma]: https://en.wikipedia.org/wiki/UPGMA
[neighborjoining]: https://en.wikipedia.org/wiki/Neighbor_joining
[hierarchicalclust]: https://en.wikipedia.org/wiki/Hierarchical_clustering
[ETEToolkit]: http://etetoolkit.org/

### Other components

Here is a small and incomplete list of already existing _Desktop_ based sequencing 
workbenches which could give you inspiration for more ideas:

* [Geneious](http://www.geneious.com/)
* [CLC workbench](http://www.clcbio.com/products/clc-main-workbench/)

Challenges
---------

* Building an easy-to-use UI for the end user
* Working with big data
* Tree algorithm tend to be computationally intensive
* Browser compatibility

Mentors
---------

Manuel Corpas, Rafael Jimenez
